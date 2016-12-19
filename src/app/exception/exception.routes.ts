import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exception }    from './exception.component';

export const exceptionRoutes: Routes = [
  { path: 'exception', component: Exception }
];
