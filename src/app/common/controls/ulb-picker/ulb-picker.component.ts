import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { firstValueFrom } from 'rxjs';
import { ValidType } from 'src/app/dto/valid-type';
import { FormField } from 'src/app/services/data.service';
import { FormHelperService } from 'src/app/services/form-helper.service';

@Component({
  selector: 'app-ulb-picker',
  templateUrl: './ulb-picker.component.html',
  styleUrls: ['./ulb-picker.component.css']
})
export class UlbPickerComponent implements OnInit {
  ulbList: ValidType[] = [];
  @Output() selectedUlbChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() selectedUlb?: string;
  @Input() field!: FormField

  constructor(private formHelper: FormHelperService) { }

  async ngOnInit() {
    this.getValues();
  }

  async getValues() {
    const values = await firstValueFrom(this.formHelper.getAuthorityList());
    this.ulbList = values;
  }

  onUlbChanged(ev: MatSelectChange) {
    this.selectedUlbChange.emit(ev.value);
  }
}
