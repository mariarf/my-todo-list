import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskI } from '../../models/task.interface';
import { CategoryI } from '../../models/category.interface';

export interface TaskID extends TaskI { id: string;}
export interface CategoryID extends CategoryI { id: string;}

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

  public selectedCategory = {
    id: null,
    category: '',
  }

  private categoryCollection: AngularFirestoreCollection<CategoryI>;
  categories: Observable<CategoryID[]>;

  constructor(private readonly afs:AngularFirestore) {
    this.taskCollection = afs.collection<TaskI>('tasks');
    this.tasks = this.getData();

    this.categoryCollection = afs.collection<CategoryI>('category');
    this.categories = this.getCategories();
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

  getCategories(){
    return this.categoryCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as CategoryI;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );
  }

  getTasksByCategory(id){
    this.taskCollection = this.afs.collection<TaskI>('tasks', ref => {
      return ref.where('category', '==', id);
    });
    return this.getData();
  }

  editCategory(category: CategoryID){
    return this.categoryCollection.doc(category.id).update(category);
  }

  deleteCategory(id: string){
    return this.categoryCollection.doc(id).delete();
  }

  createCategory(category: CategoryI){
    return this.categoryCollection.add(category);
  }

}
