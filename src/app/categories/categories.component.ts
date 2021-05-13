import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from '../services/task.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['category', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public categoryForm: FormGroup;

  editCategory = document.getElementById('editCategory');

  constructor(public taskService: TaskService, public formBuilder: FormBuilder, private _snackBar: MatSnackBar,) {
    this.categoryForm = this.formBuilder.group({
      category: ['']
    })
  }

  ngOnInit(): void {
    this.taskService.getCategories().subscribe(res => this.dataSource.data = res);
    this.taskService.selectedCategory = {
      id: null,
      category: '',
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onEdit(element) {
    this.taskService.selectedCategory = element;
  }

  onDelete(id:string){
    this.taskService.deleteCategory(id);
  }

  onSaveForm(){
    if(this.taskService.selectedCategory.id != null){
      this.taskService.editCategory(this.taskService.selectedCategory);
      this.taskService.selectedCategory = {
        id: null,
        category: '',
      }
      this._snackBar.open("Category edited!", "Close",  {duration: 3000});
    }else{
      this.taskService.createCategory(this.categoryForm.value);
      this.taskService.selectedCategory = {
        id: null,
        category: '',
      }
      this._snackBar.open("Category created!", "Close",  {duration: 3000});
    }
  }
  listOfTasks(element){
    this.taskService.selectedCategory = element
  }
}
