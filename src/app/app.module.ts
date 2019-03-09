import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AssinaturaComponent } from './assinatura/assinatura.component';
import { TabuadaComponent } from './tabuada/tabuada.component';

@NgModule({
  declarations: [
    AppComponent,
    AssinaturaComponent,
    TabuadaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
