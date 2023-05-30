import { Component } from '@angular/core';

@Component({
  selector: 'app-mp3-manager',
  templateUrl: './mp3-manager.component.html',
  styleUrls: ['./mp3-manager.component.css']
})
export class Mp3ManagerComponent {
  file = null// "C:\\Users\\vboxuser\\Desktop\\test\\(Linkin Park) - Meteora - Easier To Run.mp3";


  onFileSelected(file: File) {
    console.log('File selected:', file);
  }
}
