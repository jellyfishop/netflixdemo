import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private service: ApiServiceService) { }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
    

  }

  //banner
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result);
      this.bannerResult = result.results;

    })
  }
  trendingData() {
    this.service.trendingMovieApi().subscribe((result) => {
      console.log(result);
      this.trendingMovieResult = result.results;

    })
  }
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      console.log(result, 'actionmovies#');
      this.actionMovieResult = result.results;

    })
  }
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      console.log(result, 'actionmovies#');
      this.adventureMovieResult = result.results;

    })
  }
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      console.log(result, 'amovies#');
      this.animationMovieResult = result.results;

    })
  }
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      console.log(result, 'actionmovies#');
      this.comedyMovieResult = result.results;

    })
  }
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      console.log(result, 'actionmovies#');
      this.documentaryMovieResult = result.results;

    })
  }
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      console.log(result, 'actionmovies#');
      this.sciencefictionMovieResult = result.results;

    })
  }
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      console.log(result, 'actionmovies#');
      this.thrillerMovieResult = result.results;

    })
  }
}
