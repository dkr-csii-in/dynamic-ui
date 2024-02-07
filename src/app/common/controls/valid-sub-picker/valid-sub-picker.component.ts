import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { firstValueFrom } from 'rxjs';
import { ValidSub } from 'src/app/dto/valid-sub';
import { FormField } from 'src/app/services/data.service';
import { EventService } from 'src/app/services/event.service';
import { FormHelperService } from 'src/app/services/form-helper.service';

@Component({
  selector: 'app-valid-sub-picker',
  templateUrl: './valid-sub-picker.component.html',
  styleUrls: ['./valid-sub-picker.component.css']
})
export class ValidSubPickerComponent implements OnInit {
  itemList: ValidSub[] = [];
  @Output() subCodeChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() subCode?: number;
  @Input() authorityRSN!: number;
  @Input() folderType!: string;
  @Input() field!: FormField

  constructor(
    private formHelper: FormHelperService,
    private eventService: EventService
  ) { }

  async ngOnInit() {
    if (this.field.ReloadOn) {
      this.eventService.subscribe(this.field.ReloadOn, (payload) => {
        console.log(payload);
        this.authorityRSN = +payload.value;
        this.getValues();
      });
    } else {
      this.getValuesByFolderType();
    }
  }

  async getValues() {
    const values = await firstValueFrom(this.formHelper.getValidSubTypes(
      {
        authorityRSN: this.authorityRSN,
        folderType: this.folderType
      }));
    this.itemList = values;
  }

  async getValuesByFolderType() {
    console.log(this.folderType);
    const values = await firstValueFrom(this.formHelper.getSubType([this.folderType]));
    this.itemList = values;
  }

  onValueChanged(ev: MatSelectChange) {
    this.subCodeChange.emit(ev.value);
  }
}
