import UrlRepository from "@/repositories/UrlRepostitory";
import shortId from 'shortid';


export class UrlShortenerService {
    private urlRepository;
    constructor(){
        this.urlRepository = new UrlRepository();
    }

    async shortenUrl (originalUrl:string) : Promise<String> {
        // if orginal and short url is presemt
        let url = await this.urlRepository.getUrlByOriginalUrl(originalUrl);
        if (url){
            return url.shortUrl;
        }
        // checking the short url is present or not
        let shortUrl = shortId();
        url = await this.urlRepository.getUrlByShortUrl(shortUrl);
        //if the short  url exist we are keep change the short url 
        while(url){
            shortUrl = shortId();
            url = await this.urlRepository.getUrlByShortUrl(shortUrl);
        }

        await this.urlRepository.createUrl(originalUrl,shortUrl);
        return shortUrl;

    }

    async getAllUrls(){
        return await this.urlRepository.getAllUrls();
    }

    async getUrlByShortUrl(shortUrl:string){
        return await this.urlRepository.getUrlByShortUrl(shortUrl);
    }
}
