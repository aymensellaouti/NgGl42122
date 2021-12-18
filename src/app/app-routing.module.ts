import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CvComponent} from "./cv/cv/cv.component";
import {TodoComponent} from "./todo/todo/todo.component";
import {ColorComponent} from "./components/color/color.component";
import {FirstComponent} from "./components/first/first.component";
import {DetailsCvComponent} from "./cv/details-cv/details-cv.component";
import {BackComponent} from "./components/back/back.component";
import {FrontComponent} from "./components/front/front.component";
import {SecondComponent} from "./components/second/second.component";
import {NF404Component} from "./components/nf404/nf404.component";
import {LoginComponent} from "./components/login/login.component";
import {AddPersonneComponent} from "./cv/add-personne/add-personne.component";
import {AuthGuard} from "./auth/guards/auth.guard";

const routes: Routes = [
  { path: '', component: FirstComponent},
  { path: 'login', component: LoginComponent},
  {
    path: 'cv',
    children:[
      { path: '', component: CvComponent},
      { path: 'add', component: AddPersonneComponent, canActivate: [AuthGuard]},
      { path: ':id', component: DetailsCvComponent},
    ]
  },
  {
    path: 'back',
    component: BackComponent,
    children: [
      { path: 'todo', component: TodoComponent},
    ]
  },
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'color', component: ColorComponent},
    ]
  },
  { path: '**', component: NF404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
