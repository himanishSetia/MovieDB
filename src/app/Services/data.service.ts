import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log("Data Service Connected")
   }


   //Searching movies
   getData(movieName){
     return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=0f3777cf29d8eabbf19ac03e1725e29c&language=en-US&page=1&include_adult=false&query='+movieName)
     .map(res=>res.json());
   }

   //Get movie by Id
   getMovieById(movieId){
     return this.http.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=0f3777cf29d8eabbf19ac03e1725e29c&language=en-US')
     .map(res=>res.json());
   }

}
