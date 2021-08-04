import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { HttpComponent } from './http/http.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
    {path:'list',component: DeviceListComponent, pathMatch: 'full'},
    { path: 'add', component: TemplateFormComponent, pathMatch: 'full'},
    { path: 'update/:id', component: ReactiveFormComponent, pathMatch: 'full'}
    // { path: 'detailsUpdate', component: HttpComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
