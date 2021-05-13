import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from '../services/task.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tasks-by-categories',
  templateUrl: './tasks-by-categories.component.html',
  styleUrls: ['./tasks-by-categories.component.css']
})
export class TasksByCategoriesComponent {

  displayedColumns: string[] = ['task', 'state', 'timestamp', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public category: any;

  panelOpenState = false;

  constructor(public taskService: TaskService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.taskService.getTasksByCategory(this.taskService.selectedCategory.id).subscribe(res => this.dataSource.data = res);

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

  inProcess(element){
    element.state = 'In process'
    this.taskService.setState(element);
  }
}
