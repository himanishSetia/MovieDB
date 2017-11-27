import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../Services/data.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieId:Number
  movieData:any
  imageBaseUrl:string
  constructor(private activatedRoute:ActivatedRoute,private dataService:DataService) { 
    this.movieId = activatedRoute.snapshot.params['id']
    this.imageBaseUrl = environment.imageBaseUrl
    console.log("THIS ID ",this.movieId)
    this.dataService.getMovieById(this.movieId).subscribe((data) => {
      this.movieData = data
      console.log("DATA ",this.movieData)
    })
  }

  ngOnInit() {  }



}


interface MovieData{
  adult:boolean
  backdrop_path:string
  budget:number
  genres:any[]
  homepage:string
  id:number
  imdb_id:string
  original_language:string
  original_title:string
  overview:string
  popularity:number
  poster_path:string
  production_companies:any[]
  production_countries:any[]
  release_date:string
  revenue:number
  runtime:number
  spoken_languages:any[]
  status:string
  tagline:string
  title:string
  video:boolean
  vote_average:number
  vote_count:number
}
