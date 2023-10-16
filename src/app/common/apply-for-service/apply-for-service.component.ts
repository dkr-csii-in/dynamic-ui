import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit, QueryList, SimpleChanges, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { FolderData } from 'src/app/dto/folder-data';
import { FormSettings } from 'src/app/services/data.service';
import { TemplateNameDirective } from '../directives/template-name.directive';

@Component({
  selector: 'app-apply-for-service',
  templateUrl: './apply-for-service.component.html',
  styleUrls: ['./apply-for-service.component.css']
})
export class ApplyForServiceComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges {

  dataModel: any;
  data?: FolderData;
  @Input() folderRSN?: number;
  @Input() formSettings?: FormSettings;
  @ViewChildren(TemplateNameDirective) controlTemplates?: QueryList<TemplateNameDirective>;
  @ViewChild('default', { read: TemplateRef }) defaultTemplate!: TemplateRef<any>;

  ngOnInit() {

  }

  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (!this.folderRSN) {
        this.data = new FolderData();
      }
      this.dataModel = {};
      if (this.formSettings) {
        const fields = this.formSettings.FieldGroups.flatMap(item => item.Fields);
        fields.forEach(item => {
          const fieldName = item.BackingField.replace('.', '_');
          this.dataModel[fieldName] = undefined;
        });
      }
    }, 100);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
  }

  onchange(ev: any, fieldName: string) {

    let val = ev;
    if (ev instanceof Event) {
      if (ev.target instanceof HTMLInputElement || ev.target instanceof HTMLTextAreaElement)
        val = ev.target.value;
    }
    console.log(val, fieldName);
    this.setValueToModel(this.data, fieldName, val);
  }

  getTemplate(name: string) {
    let temp = this.controlTemplates?.find(c => c.name === name)?.template;
    if (!temp) {
      temp = this.defaultTemplate;
    }
    return temp;
  }

  setValueToModel(obj: any, path: string, value: any) {
    let schema = obj;
    var pList = path.split('_');
    var len = pList.length;
    for (var i = 0; i < len - 1; i++) {
      var elem = pList[i];
      if (!schema[elem]) schema[elem] = {}
      schema = schema[elem];
    }

    schema[pList[len - 1]] = value;
  }
}
