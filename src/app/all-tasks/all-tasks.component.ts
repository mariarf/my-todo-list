import { Component, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TaskService } from '../services/task.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})

export class AllTasksComponent {

  displayedColumns: string[] = ['task', 'category', 'state',  'timestamp', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public categories: any[];

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(res => this.dataSource.data = res);
    this.taskService.getCategories().subscribe(res => this.categories = res);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onEdit(element) {
    this.taskService.selectedEdit = element;
  }

  onDelete(id:string){
    this.taskService.deleteTask(id);
  }

}
