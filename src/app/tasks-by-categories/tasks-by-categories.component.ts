import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from '../services/task.service';
import { MatPaginator } from '@angular/material/paginator';
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

  constructor(public taskService: TaskService) { }

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
  }

  inProcess(element){
    element.state = 'In process'
    this.taskService.setState(element);
  }
}
