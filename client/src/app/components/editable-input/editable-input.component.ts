import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.css']
})
export class EditableInputComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() readonly: boolean = false;
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(newValue: FocusEvent) {
    let value = (newValue.target as HTMLInputElement).value
    if (value !== this.value) {
      this.value = value;
      this.valueChange.emit(value);
    }
  }
}
