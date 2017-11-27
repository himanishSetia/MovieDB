import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log("Data Service Connected")
   }

   getData(movieName){
     return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=7e8f60e325cd06e164799af1e317d7a7&language=en-US&page=1&include_adult=false&query='+movieName)
     .map(res=>res.json());
   }

}
