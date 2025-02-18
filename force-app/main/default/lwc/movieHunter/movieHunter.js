import { LightningElement } from 'lwc';

export default class MovieHunter extends LightningElement {
searchmovie;
    moviesearchhandler(event){
        this.searchmovie = event.detail;
        console.log('searchmovie..', this.searchmovie);

        this.callExternalAPI();

    }
    async callExternalAPI() {
        const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${this.searchmovie}&include_adult=false&language=en-US&page=1`; // Replace with your API URL
        const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2I5NDMwZDljZTAzMjI3NTgwZWQ1YThiZGUzNDA1OSIsIm5iZiI6MTczOTg4NjQzNi43NTEwMDAyLCJzdWIiOiI2N2I0OGY2NGY4Y2Y0NzM0NTE5ZmM0ODAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nuVNY3gKUnZPOWAcs4lGePoRPA5QQGX91WVt8za4O1k'; // Replace with your actual Bearer token

        try {
            const response = await fetch(apiUrl, {
                method: 'GET', // Change to POST, PUT, DELETE if needed
                headers: {
                    'Authorization': `Bearer ${bearerToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('API Response:', data.results);
        } catch (error) {
            console.error('Error fetching API:', error);
        }
    }
}