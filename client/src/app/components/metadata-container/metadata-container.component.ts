import { Component } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-metadata-container',
  templateUrl: './metadata-container.component.html',
  styleUrls: ['./metadata-container.component.css']
})
export class MetadataContainerComponent {

  file = "C:\\Users\\vboxuser\\Desktop\\test\\(3 Doors Down) - The Better Life - Kryptonite.mp3";

  data = [
    { label: 'Band', value: 'First Value', modifiable: true },
    { label: 'Album', value: 'Second Value', modifiable: true },
    { label: 'Song', value: "Third Value", modifiable: true },
    { label: 'NonModifiable1', value: "NonModifiable Value 1", modifiable: false },
    { label: 'NonModifiable2', value: "NonModifiable Value 2", modifiable: false },
  ];

  constructor(private backendApi: BackendApiService) { }

  ngOnInit() {
    this.backendApi.getMetadata(this.file).subscribe((metadata: any) => {
      console.log(metadata);
    })
  }

  onValueChange(label: string, newValue: string) {
    console.log(`${label} : ${newValue}`);
  }
}
