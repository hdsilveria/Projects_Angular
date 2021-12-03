import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'
import { CrudComponent } from './views/crud/crud.component'
import { CreateUserComponent } from './components/components/create-user/create-user.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "crud",
    component: CrudComponent
  },
  {
    path: "create-user",
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
