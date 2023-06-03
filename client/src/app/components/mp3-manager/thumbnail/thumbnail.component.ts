import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {

  @Input() set data(data: any) {
    if (data) {
      let uint8Array = new Uint8Array(data.imageBuffer.data);
      let blob = new Blob([uint8Array], { type: 'image/jpeg' });
      let objectURL = URL.createObjectURL(blob);
      this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
    else {
      this.image = null;
    }
  }

  image: any;

  constructor(private sanitizer: DomSanitizer) {

  }

}
