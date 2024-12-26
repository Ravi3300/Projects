import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShimmerUiComponent } from './shimmer-ui/shimmer-ui.component';
import { MemeCardComponent } from './meme-card/meme-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MainBodyComponent } from './main-body/main-body.component';

@NgModule({
  declarations: [
    AppComponent,
    ShimmerUiComponent,
    MemeCardComponent,
    MainBodyComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
