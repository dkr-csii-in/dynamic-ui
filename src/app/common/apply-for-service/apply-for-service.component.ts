import {
  AfterContentInit, AfterViewInit, Component, Input, OnChanges,
  OnInit, QueryList, SimpleChanges,
  ViewChild, ViewChildren
} from '@angular/core';
import { FolderData } from 'src/app/dto/folder-data';
import { FormField, FormSettings } from 'src/app/services/data.service';
import { EventService } from 'src/app/services/event.service';
import { TemplateNameDirective } from '../directives/template-name.directive';

@Component({
  selector: 'app-apply-for-service',
  templateUrl: './apply-for-service.component.html',
  styleUrls: ['./apply-for-service.component.css']
})
export class ApplyForServiceComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges {

  dataModel: any;
  data?: FolderData;
  folderType!: string;
  @Input() folderRSN?: number;
  @Input() formSettings?: FormSettings;
  @ViewChildren(TemplateNameDirective) controlTemplates?: QueryList<TemplateNameDirective>;
  @ViewChild('default', { read: TemplateNameDirective }) defaultTemplate!: TemplateNameDirective;

  constructor(private eventService: EventService) { }

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
        this.folderType = this.formSettings.FolderType
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

  onchange(ev: any, fieldName: string, model: FormField) {

    let val = ev;
    if (ev instanceof Event) {
      if (ev.target instanceof HTMLInputElement || ev.target instanceof HTMLTextAreaElement)
        val = ev.target.value;
    }
    this.setValueToModel(this.data, fieldName, val);
    this.eventService.broadcast(model.Template, { fieldName: fieldName, value: val, dataModel: this.data });
    /*const toReload = this.controlTemplates?.filter(item => (item.field?.ReloadOn || []).includes(model.Template));
    toReload?.forEach(item => {
      item.container.clear();
      const type = (new Type(item.field?.Template!))();
      const ref = item.container.createComponent(type);

    });*/
  }

  getTemplate(field: FormField) {
    let templateDirective = this.controlTemplates?.find(c => c.name === field.Template);
    if (!templateDirective) {
      templateDirective = this.controlTemplates?.find(c => c.name === 'default');
    }
    if (!templateDirective) {
      templateDirective = this.defaultTemplate;
    }
    templateDirective.field = field;
    return templateDirective.template;
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

  //resolveComponentByName(name: string): Type<any> {
  //  return null;
  //}
}
