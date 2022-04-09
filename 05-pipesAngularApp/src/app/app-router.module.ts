import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NotCommonComponent } from './sales/pages/not-common/not-common.component';
import { SortsComponent } from './sales/pages/sorts/sorts.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full',
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'not-commons',
    component: NotCommonComponent,
  },
  {
    path: 'sorts',
    component: SortsComponent,
  },
  {
    path: 'sorts',
    component: SortsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
