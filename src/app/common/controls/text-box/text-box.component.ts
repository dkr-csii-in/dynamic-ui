import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormField } from 'src/app/services/data.service';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent {
  @Input() field!: FormField
  @Input() fieldName!: string;
  @Input() dataModel: any;
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  onchange(ev: Event) {
    this.onChange.emit((ev.target as HTMLInputElement).value);
  }
}
