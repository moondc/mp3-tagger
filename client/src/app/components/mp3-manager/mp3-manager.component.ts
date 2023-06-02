import { Component } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api.service';

@Component({
  selector: 'app-mp3-manager',
  templateUrl: './mp3-manager.component.html',
  styleUrls: ['./mp3-manager.component.css']
})
export class Mp3ManagerComponent {
  file: any = null// "C:\\Users\\vboxuser\\Desktop\\test\\(Linkin Park) - Meteora - Easier To Run.mp3";

  constructor(private backendApi: BackendApiService) { }

  onFileSelected(file: File) {
    const dir = localStorage.getItem("baseMusicDirectory") as string;
    this.backendApi.findFile(file.name, dir).subscribe(x => this.file = x.fullFilePath);
  }
}
