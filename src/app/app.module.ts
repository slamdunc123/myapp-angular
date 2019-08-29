import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { InfoComponent } from './components/info/info.component';
import { ActivityComponent } from './components/activity/activity.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

const appRoutes: Routes = [
  { path: '', component: UsersComponent },
  // { path: 'profile/:id', component: ProfilesComponent },
  { path: 'profile/:id/info', component: InfoComponent },
  { path: 'profile/:id/posts', component: PostsComponent },
  { path: 'profile/:id/activity', component: ActivityComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    ProfilesComponent,
    InfoComponent,
    ActivityComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
