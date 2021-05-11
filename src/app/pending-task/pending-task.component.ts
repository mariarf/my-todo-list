import { Component, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-pending-task',
  templateUrl: './pending-task.component.html',
  styleUrls: ['./pending-task.component.css']
})
export class PendingTaskComponent {

  displayedColumns: string[] = ['task', 'category', 'timestamp', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  public categories: any[];

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getPendingTasks().subscribe(res => this.dataSource.data = res);
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

  inProcess(element){
    element.state = 'In process'
    this.taskService.setState(element);
  }
}
