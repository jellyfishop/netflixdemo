import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'search',component:SearchpageComponent},
  {path:'movie/:id',component:DetailspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
