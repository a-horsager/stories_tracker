import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmissionsComponent } from './submissions/submissions.component';
import { ProjectsComponent } from './projects/projects.component';
import { MarketsComponent } from './markets/markets.component';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';


const routes: Routes = [
  { path: 'submissions', component: SubmissionsComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'markets', component: MarketsComponent },
  { path: '', redirectTo: 'submissions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
