import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blob-image',
  templateUrl: './blob-image.component.html',
  styleUrls: ['./blob-image.component.css']
})
export class BlobImageComponent implements OnInit, OnChanges {
  @Input() imageData: Blob | null = null;
  imageUrl: SafeUrl | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.updateImage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('imageData' in changes) {
      this.updateImage();
    }
  }

  private updateImage(): void {
    if (this.imageData) {
      const objectUrl = URL.createObjectURL(this.imageData);
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
    } else {
      this.imageUrl = null;
    }
  }
}
