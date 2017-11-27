import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DataService } from '../../Services/data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  movies:any[]
  movieName:String
  isMovieName:String


  constructor(private dataService:DataService,private router: Router) { }

  ngOnInit() {
    $("#searchMovie").modal("hide")
  }


  openSearchMovieDialog(){
    this.movieName = "";
    this.isMovieName = "blank";
    $("#searchMovie").modal("show")
  }

  getMovieData(movie){
    console.log("MOVIE ",movie)
    this.router.navigate(['/movie',movie.id]);
  }

  searchMovies(){
    this.isMovieName = "blank"
    if(this.movieName != '' && this.movieName != undefined && this.movieName != null){
      this.dataService.getData(this.movieName).subscribe((posts) => {
        console.log("POSTS ",posts)
        if(posts.results.length != 0 || posts.results.length != "0"){
          $("#searchMovie").modal("hide")
          this.movies = posts.results
        }
        
      });
    }else{
      this.isMovieName = "error"
    }
    
  }
  

}
