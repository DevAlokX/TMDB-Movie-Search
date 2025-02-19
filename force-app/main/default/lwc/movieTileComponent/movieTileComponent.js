import { LightningElement, api} from 'lwc';

export default class MovieTileComponent extends LightningElement {

    @api movie

    connectedCallback(){
        console.log('MovieTileComponent===>',this.movie);
    }
    get fullImageUrl() {
        let fullImage =  `https://image.tmdb.org/t/p/original${this.movie.poster_path}`;
        console.log('fullImage-->',fullImage);
        return fullImage;
    }

    movieHandler(){
        console.log('movie-->',{...this.movie});
        let customEvent = new CustomEvent ('movieclick',{
            detail : this.movie.Id
        })

        this.dispatchEvent(customEvent);

    }


}