import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoles } from 'src/app/app.roles';
import { TasksService } from 'src/app/service/tasks.service';
import { Task } from 'src/app/data/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  public tasks : Array<Task> = new Array<Task>()


  roles=AppRoles

  constructor (
    private tasksService: TasksService,
    private router: Router
  ) {}

  ngOnInit () {
    this.reloadData()
  }

  private reloadData () {
    this.tasksService.getList().subscribe(obj => {
      this.tasks = obj
    })
  }

  public async edit (obj:Task) {
    await this.router.navigate(['tasks', obj.id])
  }

  async add () {
    await this.router.navigate(['tasks'])
  }


  delete (obj:Task) {
    this.tasksService.delete(obj.id).subscribe({
      next: response => {
        if (response.status === 200) {
          this.reloadData()
        }
      }
    })
  }

}
