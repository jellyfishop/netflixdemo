import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent {

  constructor(private service:ApiServiceService){}

  ngOnInit(): void {

  }
  searchResult:any;
  searchForm = new FormGroup({
    'movieName' : new FormControl(null)
  });
  submitForm()
  {
    console.log(this.searchForm.value,'searchform#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result,'searchmovie##');
      this.searchResult=result.results;
    })
    
  }

}
