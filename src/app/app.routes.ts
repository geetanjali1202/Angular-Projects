import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'Signup',component:SignupComponent},
    {path:'Todos',component:TodosComponent},
    {path:'Home',component:HomeComponent},
];
