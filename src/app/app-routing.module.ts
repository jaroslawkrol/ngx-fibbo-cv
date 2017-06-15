import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicTemplateComponent} from "./containers/basic-template/basic-template.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BasicTemplateComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'education',
        loadChildren: './pages/education/education.module#EducationModule',
      },
      {
        path: 'experience',
        loadChildren: './pages/experience/experience.module#ExperienceModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
