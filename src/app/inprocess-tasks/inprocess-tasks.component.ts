import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from '../services/task.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inprocess-tasks',
  templateUrl: './inprocess-tasks.component.html',
  styleUrls: ['./inprocess-tasks.component.css']
})
export class InprocessTasksComponent {

  displayedColumns: string[] = ['task', 'category', 'timestamp', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public categories: any[];

  constructor(public taskService: TaskService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.taskService.getInProcessTasks().subscribe(res => this.dataSource.data = res);
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
    this._snackBar.open("Task deleted!", "Close",  {duration: 3000});
  }

  onDone(element){
    element.state = 'Done'
    this.taskService.setState(element);
  }

}
