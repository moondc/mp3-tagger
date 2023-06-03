import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetadataContainerComponent } from './components/mp3-manager/metadata-container/metadata-container.component';

import { MatCardModule } from '@angular/material/card';
import { ThumbnailComponent } from './components/mp3-manager/thumbnail/thumbnail.component'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip'

import { FormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StatusMessageComponent } from './components/reusable/status-message/status-message.component';
import { Mp3ManagerComponent } from './components/mp3-manager/mp3-manager.component';
import { FilePickerComponent } from './components/reusable/file-picker/file-picker.component';
import { StorageConnectedLabelComponent } from './components/reusable/storage-connected-label/storage-connected-label.component';
import { UncamelCaserPipe } from './pipes/uncamel-caser.pipe';
import { ButtonComponent } from './components/reusable/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    MetadataContainerComponent,
    ThumbnailComponent,
    StatusMessageComponent,
    Mp3ManagerComponent,
    FilePickerComponent,
    StorageConnectedLabelComponent,
    UncamelCaserPipe,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
