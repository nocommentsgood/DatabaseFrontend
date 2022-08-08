import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'} ,
  { path: 'detail/:id', component: StudentDetailComponent }, // the colon :id indicates that :id is a placeholder for specific hero id
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
