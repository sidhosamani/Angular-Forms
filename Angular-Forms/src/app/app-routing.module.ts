import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  { path: '', component: FormComponentComponent, pathMatch: 'full' },
  { path: 'template', component: FormComponentComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'list', component: ListUserComponent },
  {path: 'lazy', loadChildren: ('./customer-dashboard/customer-dashboard.module#CustomerDashboardModule')}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
