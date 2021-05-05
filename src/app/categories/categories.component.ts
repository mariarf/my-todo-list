import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TaskService } from '../services/task.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['category', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  public categoryForm: FormGroup;

  editCategory = document.getElementById('editCategory');

  constructor(public taskService: TaskService, public formBuilder: FormBuilder) {
    this.categoryForm = this.formBuilder.group({
      category: ['']
    })
  }

  ngOnInit(): void {
    this.taskService.getCategories().subscribe(res => this.dataSource.data = res);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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
    }else{
      this.taskService.createCategory(this.categoryForm.value);
    }
  }
}
