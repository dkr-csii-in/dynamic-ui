import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormField } from 'src/app/services/data.service';

@Directive({
  selector: '[templateName]'
})
export class TemplateNameDirective {
  @Input('templateName') name: string = '';
  field?: FormField;
  template: TemplateRef<any>;
  container: ViewContainerRef;

  constructor(template: TemplateRef<any>, container: ViewContainerRef) {
    this.template = template;
    this.container = container;
  }
}