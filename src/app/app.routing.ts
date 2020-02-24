import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {
    FormComponent,
} from './examples/01-template-forms-example';

import {
    ReactiveFormComponent
} from './examples/02-reactive-forms-example';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'examples/01-template-forms-example',
    pathMatch: 'full'
  },
  {path: 'examples/01-template-forms-example', component: FormComponent},
  {path: 'examples/02-reactive-forms-example', component: ReactiveFormComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
