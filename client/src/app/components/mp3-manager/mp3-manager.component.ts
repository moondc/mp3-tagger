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

  renameAllFilesDisabled() {
    if (localStorage.getItem('namingPattern') && localStorage.getItem('baseMusicDirectory'))
      return false;
    return true;
  }

  findMissingTagsDisabled() {
    if (localStorage.getItem('baseMusicDirectory'))
      return false;
    return true;
  }

  renameAllFiles() {
    const obs = {
      next: (res: any) => {
        if (res.result) {
          this.status = "success";
          this.status_message = "Files Renamed!";
          this.file = res.newFile
        }
      },
      error: (ex: any) => {
        this.status = "error";
        console.log(ex);
        this.status_message = ex.error.toString();
      }
    }
    this.backendApi.renameAllFiles(localStorage.getItem('namingPattern') as string, localStorage.getItem('baseMusicDirectory') as string).subscribe(obs);
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

  findMissingTag() {
    const obs = {
      next: (result: any) => {
        if (!result.fullFilePath) {
          this.status = 'success';
          this.status_message = 'no files with missing tags'
        }
        console.log(result);
        this.file = result.fullFilePath
      }
    }
    const musicDir = localStorage.getItem('baseMusicDirectory') as string;
    this.backendApi.getMissingTag(musicDir).subscribe(obs)
  }
}
