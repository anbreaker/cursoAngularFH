import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LifeCicleHooksComponent } from './pages/life-cicle-hooks/life-cicle-hooks.component';
import { ShowNameComponent } from './components/show-name/show-name.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LifeCicleHooksComponent, ShowNameComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
