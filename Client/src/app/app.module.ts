import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AnimeItemComponent } from './components/anime-item/anime-item.component';
import { AnimeFormComponent } from './components/anime-form/anime-form.component';
import { MainComponent } from './components/main/main.component';
// Services
import {AnimesService} from './services/animes.service';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent} from './components/blog-component/blog-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    NavigationComponent,
    AnimeItemComponent,
    AnimeFormComponent,
    MainComponent,
    PaginationComponent,
    AboutUsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AnimesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
