import { Component } from '@angular/core';
import { TaskService} from '../services/task.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(public task: TaskService, private router: Router) { }

  onSaveForm(){

    this.task.editTask(this.task.selectedEdit);

    this.task.selectedEdit = {
      id: null,
      task: '',
      state: '',
      timestamp: '',
      category: '',
    };

    this.router.navigate(['/list-task']);
  }

}
