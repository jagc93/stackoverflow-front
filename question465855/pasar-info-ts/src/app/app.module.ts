import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DialogContentExampleDialog, ManualesComponent } from './manuales/manuales.component';

@NgModule({
  declarations: [
    AppComponent,
    ManualesComponent,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
