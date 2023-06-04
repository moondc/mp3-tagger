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

  @Input() file!: string;

  band: string = "";
  album: string = "";
  song: string = "";
  thumbnail: any = null;

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
    if (this.file) {
      this.backendApi.getMetadata(this.file).subscribe(x => {
        this.band = x.artist ? x.artist : null;
        this.album = x.album ? x.album : null;
        this.song = x.title ? x.title : null;
        this.thumbnail = x.image;
      })
    }
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
    if (this.file) {
      const tag: Tag = { artist: event.target.value }
      this.backendApi.writeMetadata(this.file, tag).subscribe(this.obs);
    }
  }

  onAlbumChange(event: any) {
    if (this.file) {
      const tag: Tag = { album: event.target.value }
      this.backendApi.writeMetadata(this.file, tag).subscribe(this.obs);
    }
  }

  onSongChange(event: any) {
    if (this.file) {
      const tag: Tag = { title: event.target.value }
      this.backendApi.writeMetadata(this.file, tag).subscribe(this.obs);
    }
  }

  getProps() {
    return {
      title: this.song,
      artist: this.band,
      album: this.album
    }
  }
}
