import {Component, inject, Input} from '@angular/core';
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) selectedName!: string;
  isAddingTask = false;
  private taskService = inject(TasksService);

  // Alternative to inject(TasksService);:
  // constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
