import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';
import { ViewsComponent } from './app/mis-pedidos/views/views.component';

@NgModule({
  declarations: [
    AppComponent,
    MisPedidosComponent,
    ViewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
