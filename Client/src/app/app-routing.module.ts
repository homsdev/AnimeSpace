import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import {MainComponent} from './components/main/main.component';
import {AnimeFormComponent} from './components/anime-form/anime-form.component';
import {AnimeListComponent} from './components/anime-list/anime-list.component'
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent} from './components/blog-component/blog-component.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'anime/add',
    component:AnimeFormComponent
  },
  {
    path:'anime',
    component:AnimeListComponent
  },
  {
    path:'anime/edit/:id',
    component:AnimeFormComponent
  },
  {
    path:'about',
    component:AboutUsComponent 
  },
  {
    path:'blog',
    component:BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
