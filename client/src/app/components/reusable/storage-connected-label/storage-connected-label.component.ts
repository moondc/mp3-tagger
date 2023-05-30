import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-storage-connected-label',
  templateUrl: './storage-connected-label.component.html',
  styleUrls: ['./storage-connected-label.component.css']
})
export class StorageConnectedLabelComponent {
  @Input() prop!: string;

  textboxValue = '';

  ngOnInit() {
    const savedValue = localStorage.getItem(this.prop);
    if (savedValue) {
      this.textboxValue = savedValue;
    }
  }

  updateLocalStorage(value: any) {
    this.textboxValue = value;
    localStorage.setItem(this.prop, this.textboxValue);
  }
}
