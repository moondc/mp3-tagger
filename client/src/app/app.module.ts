import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetadataContainerComponent } from './components/metadata-container/metadata-container.component';
import { MatCardModule } from '@angular/material/card';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlobImageComponent } from './components/blob-image/blob-image.component';
import { HttpClientModule } from '@angular/common/http';
import { StatusMessageComponent } from './components/status-message/status-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MetadataContainerComponent,
    ThumbnailComponent,
    BlobImageComponent,
    StatusMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
