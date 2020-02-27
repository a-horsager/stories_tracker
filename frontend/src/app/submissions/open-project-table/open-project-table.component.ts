import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';
import { MatTable, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatCell, MatCellDef } from '@angular/material/table';


@Component({
  selector: 'app-open-project-table',
  templateUrl: './open-project-table.component.html',
  styleUrls: ['./open-project-table.component.scss']
})
export class OpenProjectTableComponent implements OnInit {
  public projects;
  public openProjects;
  private subscriptions: Subscription = new Subscription();
  public displayedColumns: string[] = ['title', 'status', 'wordcount'];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProjects();

    this.subscriptions.add(this.dataService.projects$.subscribe(res => {
      this.projects = res;
      this.openProjects = this.projects.filter(project => project.status === 'open');
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
