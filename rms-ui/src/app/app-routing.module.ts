import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { JobComponent } from './component/HR/job/job.component';
import { AddjobComponent } from './component/HR/addjob/addjob.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'job', component : JobComponent},
  {path : 'addjob', component : AddjobComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
