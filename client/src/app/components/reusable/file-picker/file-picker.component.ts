import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.css']
})
export class FilePickerComponent {
  @Output() fileSelected = new EventEmitter<File>();
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      this.fileSelected.emit(file);
    }
  }

  localStorageValueExists(): boolean {
    return localStorage.getItem('baseMusicDirectory') !== null;
  }
}