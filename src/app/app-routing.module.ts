import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppAuthGuard } from './guard/app.auth.guard';
import { AppRoles } from './app.roles';
import { NoaccessComponent } from './pages/noaccess/noaccess.component';
import { AufgabenDetailComponent } from './pages/aufgaben/aufgaben.component';
import { DepartamentDetailComponent } from './pages/departament/departament.component';
import { TasksListComponent } from './pages/list/tasks-list.component';
import { TasksDetailComponent } from './pages/detail/tasks-detail.component';





const routes: Routes = [
  {
    path: 'tasks',
    component: TasksListComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Read],
      pagetitle: 'Alle Spiele'
    }
  },

  {
    path: 'person',
    component: TasksDetailComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Read],
      pagetitle: 'Alle Spiele'
    }
  },


  {
    path: 'aufgabe',
    component: AufgabenDetailComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Read],
      pagetitle: 'Alle Spiele'
    }
  },

  {
    path: 'departament',
    component: DepartamentDetailComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Read],
      pagetitle: 'Alle Spiele'
    }
  },


  {
    path: 'task/:id',
    pathMatch: 'full',
    component: TasksListComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Update],
      pagetitle: 'Spiel bearbeiten'
    }
  },

  {
    path: 'task',
    pathMatch: 'full',
    component: TasksListComponent,
    canActivate: [AppAuthGuard],
    data: {
      roles: [AppRoles.Admin],
      pagetitle: 'Spiel erfassen'
    }
  },

  {
      path: 'noaccess',
      component: NoaccessComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
