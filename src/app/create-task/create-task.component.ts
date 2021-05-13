import { Component } from '@angular/core';
import { TaskService} from '../services/task.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent {

  public taskForm: FormGroup;
  public categories: any[];

  constructor(public task: TaskService, public formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    this.taskForm = this.formBuilder.group({
      task: [''],
      state: ['Pending'],
      timestamp: [''],
      category: ['']
    })
  }

  ngOnInit(): void {
    this.task.getCategories().subscribe(res => this.categories = res);
  }

  onSaveForm(){

    this.taskForm.value.timestamp=new Date().toLocaleString();

    this.task.createTask(this.taskForm.value);

    this.taskForm = this.formBuilder.group({
      task: [''],
      state: ['Pending'],
      timestamp: [''],
      category: ['']
    })

    this._snackBar.open("Task created!", "Close",  {duration: 3000});
  }

}
