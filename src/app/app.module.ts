import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { ListTaskComponent } from './list-task/list-task.component';
import { TaskService} from './services/task.service'

// firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormComponent } from './form/form.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HistoricalTasksComponent } from './historical-tasks/historical-tasks.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component'

@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    ToolbarComponent,
    FormComponent,
    CreateTaskComponent,
    HistoricalTasksComponent,
    AllTasksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
