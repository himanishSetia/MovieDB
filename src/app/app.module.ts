import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { Routes,RouterModule } from '@angular/router';
import { DataService } from './Services/data.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './Components/movies/movies.component'; // <-- NgModel lives here


const appRoutes : Routes = [
  {path:'',component:UsersComponent},
  {path:'movie/:id',component:MoviesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
