import { Component, OnInit } from '@angular/core';
import { TaskService} from '../services/task.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public task: TaskService) { }

  ngOnInit(): void {
  }

  onSaveForm(){
    if(this.task.selectedEdit != null){
      this.task.editTask(this.task.selectedEdit);
    }
  }

}
