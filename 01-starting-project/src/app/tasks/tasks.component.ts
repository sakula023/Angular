import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTasksComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  // @Output() newTasks = new EventEmitter<string>();
  isAddingTasks = false;

  constructor(private tasksService: TasksService) { }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTasks() {
    // return this.newTasks.emit("New tasks Added!!");
    this.isAddingTasks = true;
  }

  onCloseAddTasks() {
    this.isAddingTasks = false;
  }
}
