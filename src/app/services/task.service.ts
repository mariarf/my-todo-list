import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskI } from '../../models/task.interface';

export interface TaskID extends TaskI { id: string;}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskCollection: AngularFirestoreCollection<TaskI>;
  tasks: Observable<TaskID[]>;

  public selectedEdit = {
    id: null,
    task: '',
    state: '',
    timestamp: '',
    category: '',
  }

  public selectedAdd = {
    task: '',
    state: '',
    timestamp: '',
    category: '',
  }

  constructor(private readonly afs:AngularFirestore) {
    this.taskCollection = afs.collection<TaskI>('tasks');
    this.tasks = this.getData();
  }

  getData(){
    return this.taskCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as TaskI;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );
  }
  setState(task: TaskID){
    console.log(task)
    return this.taskCollection.doc(task.id).update(task);
  }

  getAllTasks() {
    return this.tasks;
  }

  getDoneTasks() {
    this.taskCollection = this.afs.collection<TaskI>('tasks', ref => {
      return ref.where('state', '==', 'Done');
    });

    return this.getData();
  }

  getPendingTasks() {
    this.taskCollection = this.afs.collection<TaskI>('tasks', ref => {
      return ref.where('state', '==', 'Pending');
    });
    return this.getData();
  }

  getInProcessTasks() {
    this.taskCollection = this.afs.collection<TaskI>('tasks', ref => {
      return ref.where('state', '==', 'In process');
    });
    return this.getData();
  }
  editTask(task: TaskID){

    return this.taskCollection.doc(task.id).update(task);
  }

  deleteTask(id: string){
    return this.taskCollection.doc(id).delete();
  }

  createTask(task: TaskI){
    return this.taskCollection.add(task);

  }
}
