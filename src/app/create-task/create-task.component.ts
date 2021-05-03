import { Component, OnInit } from '@angular/core';
import { TaskService} from '../services/task.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {

  public taskForm: FormGroup;


  constructor(public task: TaskService, public formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      task: [''],
      state: ['Pending'],
      timestamp: ['']
    })
  }

  ngOnInit(): void {
  }

  onSaveForm(){

    this.taskForm.value.timestamp=new Date().toDateString()+ ", " + new Date().toLocaleTimeString();
    this.task.createTask(this.taskForm.value);
    this.taskForm = this.formBuilder.group({
      task: [''],
      state: ['Pending'],
      timestamp: ['']
    })
  }

}
