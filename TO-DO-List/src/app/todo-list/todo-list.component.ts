import { Component } from '@angular/core';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
    taskArray: any = [{ task: 'Morning Wak', isComplete: false }];

    todoSubmit(form: any) {
        console.log(form, "formSubmit")
        this.taskArray.push({
            task: form.controls['taskVal'].value,
            isComplete: false
        });
        form.reset();
    }

    deleteTask(id: any) {
        console.log(id, "delete tn")
        this.taskArray.splice(id, 1)
        // console.log(val, "after filterData")
    }
    checkMark(id: any) {
        this.taskArray[id].isComplete = true
        console.log(this.taskArray, "check task")
    }
}
