import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-historical-tasks',
  templateUrl: './historical-tasks.component.html',
  styleUrls: ['./historical-tasks.component.css']
})
export class HistoricalTasksComponent implements OnInit {

  displayedColumns: string[] = ['task', 'category', 'timestamp', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  public categories: any[];

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getDoneTasks().subscribe(res => this.dataSource.data = res);
    this.taskService.getCategories().subscribe(res => this.categories = res);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onEdit(element) {
    this.taskService.selectedEdit = element;

  }

  onDelete(id:string){
    this.taskService.deleteTask(id);
  }

}
