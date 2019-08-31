import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from '../info/info.component';
import { PostsComponent } from '../posts/posts.component';
import { ActivityComponent } from '../activity/activity.component';
import { RouterModule, Routes } from '@angular/router';
// import { MenuComponent } from '../menu/menu.component';

const profilesRoutes: Routes = [
  // { path: 'profiles/:id/info', component: InfoComponent },
  // { path: 'profiles/:id/posts', component: PostsComponent },
  // { path: 'profiles/:id/activity', component: ActivityComponent }
];

@NgModule({
  declarations: [
    InfoComponent,
    PostsComponent,
    ActivityComponent
    // MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      profilesRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ]
})
export class ProfilesModule {}
