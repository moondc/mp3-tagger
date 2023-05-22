import { Component } from '@angular/core';

@Component({
  selector: 'app-metadata-container',
  templateUrl: './metadata-container.component.html',
  styleUrls: ['./metadata-container.component.css']
})
export class MetadataContainerComponent {
  data = [
    { label: 'Band', value: 'First Value', modifiable: true },
    { label: 'Album', value: 'Second Value', modifiable: true },
    { label: 'Song', value: "Third Value", modifiable: true },
    { label: 'NonModifiable1', value: "NonModifiable Value 1", modifiable: false },
    { label: 'NonModifiable2', value: "NonModifiable Value 2", modifiable: false },
  ];

  onValueChange(label: string, newValue: string) {
    console.log(`${label} : ${newValue}`);
  }
}
