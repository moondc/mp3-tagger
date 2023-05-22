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
import { EditableInputComponent } from './components/editable-input/editable-input.component';
import { BlobImageComponent } from './components/blob-image/blob-image.component';

@NgModule({
  declarations: [
    AppComponent,
    MetadataContainerComponent,
    ThumbnailComponent,
    EditableInputComponent,
    BlobImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
