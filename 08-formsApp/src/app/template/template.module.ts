import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BasicsComponent } from './basics/basics.component';
import { DinamicsComponent } from './dinamics/dinamics.component';
import { SwitchesComponent } from './switches/switches.component';
import { TemplateRoutingModule } from './template-routing.module';
import { CustomMinDirective } from './directives/custom-min.directive';

@NgModule({
  declarations: [
    BasicsComponent,
    CustomMinDirective,
    DinamicsComponent,
    SwitchesComponent,
  ],
  imports: [CommonModule, FormsModule, TemplateRoutingModule],
})
export class TemplateModule {}
