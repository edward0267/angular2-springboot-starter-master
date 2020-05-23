import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloHellComponent} from "./hello-hell/hello-hell.component";
import {HelloWorldComponent} from "./hello-world/hello-world.component";



export const routes: Routes = [

  {
    path: 'helloworld',
    component: HelloWorldComponent
  },
  {
    path: 'hellohell',
    component: HelloHellComponent
  },
  {
    path: '',
    redirectTo: 'helloworld',
    pathMatch: 'full'
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
