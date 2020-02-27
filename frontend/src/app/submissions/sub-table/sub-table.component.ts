import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';
import { MatTable, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatCell, MatCellDef } from '@angular/material/table';

@Component({
  selector: 'app-sub-table',
  templateUrl: './sub-table.component.html',
  styleUrls: ['./sub-table.component.scss']
})
export class SubTableComponent implements OnInit {
  public submissions;
  public active_subs = [];
  private subscription: Subscription = new Subscription();
  public displayedColumns: string[] = ['title', 'market', 'sub_date'];

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSubmissions();

    this.subscription.add(this.dataService.submissions$.subscribe(res => {
      this.submissions = res;
      this.active_subs = this.submissions.filter(sub => sub.status === 'active');
    }));

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
