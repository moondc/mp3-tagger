import { Component } from '@angular/core';
import { TagReaderService } from './services/tag-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mp3-tagger';

  myImageData: Blob | null = null;

  constructor(private tagReaderService: TagReaderService) {
    //this.tagReaderService.getThumbnail("C:\\Users\\vboxuser\\Desktop\\a.mp3").subscribe(x => this.myImageData = x)
  }
}
