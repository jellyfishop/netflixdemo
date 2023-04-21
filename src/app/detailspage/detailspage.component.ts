import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent {
  constructor(private service: ApiServiceService, private router: ActivatedRoute) { }
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');

    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }
  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result, 'getmoviedetails#');
      this.getMovieDetailResult=result;

    });
  }
  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,'getMovieVideo#');
      result.results.forEach((element:any) => {
        if(element.type=="Trailer"){
          this.getMovieVideoResult=element.key;

        }
        
      });
      

    });
  }
  getCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'moviecast#');
      this.getMovieCastResult=result.cast;
      
    })
  }


}
