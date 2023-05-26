import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api.service';

interface Tag {
  album?: string;
  title?: string;
  artist?: string;
  image?: string;
}

@Component({
  selector: 'app-metadata-container',
  templateUrl: './metadata-container.component.html',
  styleUrls: ['./metadata-container.component.css']
})
export class MetadataContainerComponent implements OnChanges {

  @Input() file: any;

  band: string = "";
  album: string = "";
  song: string = "";

  status_message: string = "";
  status: 'success' | 'error' = "success";




  constructor(private backendApi: BackendApiService) { }

  ngOnInit() {
    this.backendApi.getMetadata(this.file);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['file']) {
      this.loadMetadata();
    }
  }

  loadMetadata() {
    this.backendApi.getMetadata(this.file).subscribe(x => {
      this.band = x.artist;
      this.album = x.album;
      this.song = x.title;
    })
  }

  private obs = {
    next: (x: any) => {
      this.status_message = "Saved!";
      this.status = "success";
    },
    error: (err: any) => {
      this.status_message = "Error";
      this.status = "error";
    },
  }

  onBandChange(event: any) {
    const tag: Tag = { artist: event.target.value }
    this.backendApi.writeMetadata(this.file, tag).subscribe(this.obs);
  }

  onAlbumChange(event: any) {
    const tag: Tag = { album: event.target.value }
    this.backendApi.writeMetadata(this.file, tag).subscribe(this.obs);
  }

  onSongChange(event: any) {
    const tag: Tag = { title: event.target.value }
    this.backendApi.writeMetadata(this.file, tag).subscribe(this.obs);
  }
}
