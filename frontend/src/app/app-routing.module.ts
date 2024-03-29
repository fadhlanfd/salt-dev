import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { PeopleComponent } from './components/people/people.component';
import { DocumentComponent } from './components/document/document.component';
import { EventComponent } from './components/event/event.component';
import { CommunityComponent } from './components/community/community.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ChannelComponent } from './components/channel/channel.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rute untuk halaman utama
  { path: 'videos', component: VideoComponent}, // Rute untuk halaman Videos
  { path: 'people', component: PeopleComponent }, // Rute untuk halaman People
  { path: 'documents', component: DocumentComponent }, // Rute untuk halaman Documents
  { path: 'events', component: EventComponent }, // Rute untuk halaman Events
  { path: 'communities', component: CommunityComponent }, // Rute untuk halaman Communities
  { path: 'favorites', component: FavoriteComponent }, // Rute untuk halaman Favorites
  { path: 'channels', component: ChannelComponent }, // Rute untuk halaman Channels
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
