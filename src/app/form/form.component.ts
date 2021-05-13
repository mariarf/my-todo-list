import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public categories: any[];

  constructor(public task: TaskService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.task.getCategories().subscribe(res => this.categories = res);
  }

  onSaveForm(){
    this.task.editTask(this.task.selectedEdit);
    this._snackBar.open("Task edited!", "Close",  {duration: 3000});
  }
}
