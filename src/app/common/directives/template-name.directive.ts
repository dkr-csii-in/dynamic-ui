import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[templateName]'
})
export class TemplateNameDirective {
  @Input('templateName') name: string = '';
  template: TemplateRef<any>;
  constructor(template: TemplateRef<any>) {
    this.template = template;
  }

}
