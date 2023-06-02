import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Task } from 'src/app/data/task';
import { Department } from 'src/app/data/department';
import { User } from 'src/app/data/user';

import { TasksService } from 'src/app/service/tasks.service';
import { DepartmentService } from 'src/app/service/department.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-tasks-detail',
  templateUrl: './tasks-detail.component.html',
  styleUrls: ['./tasks-detail.component.css']
})
export class TasksDetailComponent   implements OnInit {

  task : Task = new Task()
  departments : Array<Department> = []
  users : Array<User> = []

  public taskForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    date: new FormControl(''),
    text: new FormControl(''),
    members : new FormControl(''),
    lastname: new FormControl (''),
    multiplayer: new FormControl(''),
    address: new FormControl (''),
    age: new FormControl (0),
    priority : new FormControl('')
  })

  constructor (
    private router: Router,
    private route:ActivatedRoute,
    private tasksService: TasksService,
    private departmentService: DepartmentService,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string);
      this.tasksService.getOne(id).subscribe(obj => {
        this.task = obj
        this.taskForm = this.formBuilder.group(this.task)

        this.taskForm.controls.members.setValue(this.task.members)
      })
    }

    this.departmentService.getList().subscribe(obj => {
      this.departments = obj;
    });

    this.userService.getList().subscribe(obj => {
      this.users = obj;
    });

  }

  public compareOptions(o1 : any, o2 : any): boolean{
    return o1 && o2 ? o1?.id === o2?.id : o1 === o2;
  }

  async back () {
    await this.router.navigate(['tasks'])
  }


  async save (formData: any) {
    this.task = Object.assign(formData)

   if (this.task.id) {
      this.tasksService.update(this.task).subscribe({
        next: () => {
          this.back()
        },
        error: () => {

        }
      })
    } else {
      this.tasksService.save(this.task).subscribe({
        next: () => {
          this.back()
        },
        error: () => {

        }
      })
    }

  }

}
