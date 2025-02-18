import { LightningElement } from 'lwc';
import Background_Image from "@salesforce/resourceUrl/Background_Image";
export default class MovieSearch extends LightningElement {

    searchMovie;
    changeHandler(event){
        this.searchMovie  = event.target.value;
        console.log('enter movies===>',this.searchMovie);
    
    }

    clickHandler(event){

        let myCustomEvent = new CustomEvent('searchmovie', {
            detail : this.searchMovie
        });

        this.dispatchEvent(myCustomEvent);
    }
}