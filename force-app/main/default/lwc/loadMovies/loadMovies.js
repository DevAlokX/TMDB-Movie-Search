import { LightningElement, api, track } from 'lwc';

export default class LoadMovies extends LightningElement {
    @api movieresults;  // This gets data from parent

    get checkMovie() {
        return this.movieresults && this.movieresults.length > 0;  // Ensure movieresults is not undefined
    }

    movieClick(event) {
        let movieId = event.detail;
        console.log('Movie Id==>', movieId);
    }
}
