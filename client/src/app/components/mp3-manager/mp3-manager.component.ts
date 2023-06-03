import { Component } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-mp3-manager',
  templateUrl: './mp3-manager.component.html',
  styleUrls: ['./mp3-manager.component.css']
})
export class Mp3ManagerComponent {
  file: any = null;
  status: any;
  status_message: any;

  constructor(private backendApi: BackendApiService) { }

  onFileSelected(file: File) {
    const dir = localStorage.getItem("baseMusicDirectory") as string;
    this.backendApi.findFile(file.name, dir).subscribe(x => this.file = x.fullFilePath);
  }

  renameFileDisabled() {
    if (localStorage.getItem('namingPattern') && this.file !== null)
      return false;
    return true;
  }

  renameFile() {
    const obs = {
      next: (res: any) => {
        if (res.result) {
          this.status = "success";
          this.status_message = "File Renamed!";
          this.file = res.newFile
        }
        else {
          this.status = "error";
          this.status_message = "Could not rename";
        }
      }
    }
    this.backendApi.renameFile(this.file, localStorage.getItem('namingPattern') as string).subscribe(obs);
  }
}
