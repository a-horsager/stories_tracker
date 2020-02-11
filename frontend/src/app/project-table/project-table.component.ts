import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { MatTable, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatCell, MatCellDef } from '@angular/material/table';

export interface ProjectElement {
  id: number;
  title: string;
  status: string;
  word_count: number;
  notes: string;
}

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit, OnDestroy {
  private projects: any;
  private subscription: Subscription;
  private displayedColumns: string[] = ['title', 'status', 'wordcount'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('Init function run.');
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
