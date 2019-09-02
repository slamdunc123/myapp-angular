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
import { ProfilesModule } from './components/profiles/profiles.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: UsersComponent },
  {
    path: 'profiles/:id',
    component: ProfilesComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: InfoComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'activity', component: ActivityComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
  // { path: 'profile/:id/info', component: InfoComponent }
  // { path: 'profile/:id/posts', component: PostsComponent },
  // { path: 'profile/:id/activity', component: ActivityComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    // PostsComponent,
    UsersComponent,
    ProfilesComponent,
    // InfoComponent,
    // ActivityComponent,
    HeaderComponent,
    MenuComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProfilesModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
