import { Component, EventEmitter, Output } from '@angular/core';
import { NewTaskData } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {
@Output() cancel = new EventEmitter<void>();
@Output() add = new EventEmitter<NewTaskData>();
enteredTitle = '';
enteredSummary = '';
enteredDueDate = '';
  
onCancel() {
  this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    })
  }
}
