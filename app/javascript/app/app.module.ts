import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PageComponent } from './components/mainPage/page.component';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PageComponent]
})
export class AppModule { }
