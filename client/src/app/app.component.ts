import { Component } from '@angular/core';
import { TagReaderService } from './services/tag-reader.service';
import { HttpClient } from '@angular/common/http';
import { BackendApiService } from './services/backend-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mp3-tagger';

  myImageData: Blob | null = null;

  constructor(private backendApi: BackendApiService) {
    //this.backendApi.getAllFiles("C:\\Users\\vboxuser\\Downloads").subscribe(x => console.log(x));
    this.backendApi.getMetadata("C:\\Users\\vboxuser\\Desktop\\test\\(3 Doors Down) - The Better Life - Kryptonite.mp3").subscribe(x => console.log(x));

  }
}
