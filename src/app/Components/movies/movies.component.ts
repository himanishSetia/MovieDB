import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieId:Number
  constructor(private activatedRoute:ActivatedRoute) { 
    this.movieId = activatedRoute.snapshot.params['id']
    console.log("THIS ID ",this.movieId)
  }

  ngOnInit() {
    // console.log("THIS>MOVEIS ",this.activatedRoute)
  }

}
