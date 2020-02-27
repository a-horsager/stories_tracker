import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatIconModule} from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectTableComponent } from './projects/project-table/project-table.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectTableHeaderComponent } from './projects/project-table-header/project-table-header.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { MarketsComponent } from './markets/markets.component';
import { SubHeaderComponent } from './submissions/sub-header/sub-header.component';
import { SubTableComponent } from './submissions/sub-table/sub-table.component';
import { OpenProjectTableComponent } from './submissions/open-project-table/open-project-table.component';
import { ProjectSubsComponent } from './submissions/project-subs/project-subs.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectTableComponent,
    HeaderComponent,
    SidenavComponent,
    ProjectsComponent,
    ProjectTableHeaderComponent,
    SubmissionsComponent,
    MarketsComponent,
    SubHeaderComponent,
    SubTableComponent,
    OpenProjectTableComponent,
    ProjectSubsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
