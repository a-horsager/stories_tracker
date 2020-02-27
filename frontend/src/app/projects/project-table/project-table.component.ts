import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';
import { MatTable, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatCell, MatCellDef } from '@angular/material/table';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit, OnDestroy {
  private projects;
  private subscription: Subscription;
  public displayedColumns: string[] = ['title', 'status', 'wordcount', 'modify'];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProjects();

    this.subscription = this.dataService.projects$.subscribe(res => {
      this.projects = res;
      console.log(this.projects);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
