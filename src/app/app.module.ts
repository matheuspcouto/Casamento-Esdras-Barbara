import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SiteAtivoGuard } from './guards/site-ativo.guard';

import { AguardeComponent } from './modules/aguarde/aguarde.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { LoadderComponent } from './shared/components/loadder/loadder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AguardeComponent,
    FooterComponent,
    LoadderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [ SiteAtivoGuard ],
  bootstrap: [AppComponent],
})
export class AppModule {}
