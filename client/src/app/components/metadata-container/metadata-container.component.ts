import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api.service';

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

  onBandChange(event: any) {
    this.status = "success";
    this.status_message = "Saved!";
    // todo
  }

  onAlbumChange(event: any) {
    // todo
  }

  onSongChange(event: any) {
    // todo
  }
}
