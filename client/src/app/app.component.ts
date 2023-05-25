import { Component } from '@angular/core';
import { BackendApiService } from './services/backend-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mp3-tagger';

  file = "C:\\Users\\vboxuser\\Desktop\\test\\(3 Doors Down) - The Better Life - Kryptonite.mp3";
  secondfile = "C:\\Users\\vboxuser\\Desktop\\test\\(Linkin Park) - Hybrid Theory - Pushing Me Away.mp3";

  constructor(private backendApi: BackendApiService) {
    //this.backendApi.getAllFiles("C:\\Users\\vboxuser\\Downloads").subscribe(x => console.log(x));
    setTimeout(() => { this.file = this.secondfile }, 3000);
  }

}
