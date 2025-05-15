import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  imports: [ReactiveFormsModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  // 2. Displaying Tasks: This array holds our task data.
  tasks: Task[] = [];

  // 1. Adding Tasks: This form manages the input field.
  taskListForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskListForm = this.fb.group({
      task: ['', Validators.required] // 'task' FormControl for the input field
    });
  }

  // 1. Adding Tasks: This function is called when the form is submitted.
  addTask() {
    const taskValue = this.taskListForm.get('task')?.value.trim();
    if (taskValue) {
      // Create a new task object
      this.tasks.push({ name: taskValue, completed: false });
      // Clear the input field
      this.taskListForm.reset();
    }
  }

  // 3. Marking Tasks as Complete: This function updates the 'completed' status.
  toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    // In a more complex scenario, you might want to persist this change.
  }

  // 4. Deleting Tasks: This function removes a task from the list.
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    // Again, in a real app, you might confirm before deleting or handle persistence.
  }
}