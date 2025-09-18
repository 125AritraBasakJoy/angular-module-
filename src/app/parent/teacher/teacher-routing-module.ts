import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherModule } from './teacher-module';

const routes: Routes = [
  { path: '', component: TeacherModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {}
