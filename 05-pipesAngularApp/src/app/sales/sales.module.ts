import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NotCommonComponent } from './pages/not-common/not-common.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortsComponent } from './pages/sorts/sorts.component';
import { CasePipe } from './pipes/uppercase.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    // Components
    NumbersComponent,
    NotCommonComponent,
    BasicsComponent,
    SortsComponent,

    // Pipes
    FlyPipe,
    CasePipe,
    SortPipe,
  ],
  exports: [
    NumbersComponent,
    NotCommonComponent,
    BasicsComponent,
    SortsComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
})
export class SalesModule {}
