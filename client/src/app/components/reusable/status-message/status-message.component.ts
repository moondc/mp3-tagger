import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-message',
  templateUrl: './status-message.component.html',
  styleUrls: ['./status-message.component.css']
})
export class StatusMessageComponent {

  @Input() message!: string;
  @Input() status!: 'success' | 'error';

}
