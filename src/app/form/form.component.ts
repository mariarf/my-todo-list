import { Component, OnInit } from '@angular/core';
import { TaskService} from '../services/task.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public task: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  onSaveForm(){
    if(this.task.selectedEdit != null){
      this.task.editTask(this.task.selectedEdit);
    }
    this.task.selectedEdit = {
      id: null,
      task: '',
      state: '',
      timestamp: '',
    };
    this.router.navigate(['/list-task']);
  }

}
