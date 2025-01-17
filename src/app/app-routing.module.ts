
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LoginComponent } from './components/login/login.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkoutGeneratorComponent } from './components/workout-generator/workout-generator.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-page', component: UserPageComponent,
    children: [
      { path: 'users', component: UserListComponent },
      { path: 'adduser', component: UserFormComponent },
    ]
   },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'workout-generator', component: WorkoutGeneratorComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
