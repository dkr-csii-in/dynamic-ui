import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from '@angular/material/select';
import { ApplyForServiceComponent } from "./apply-for-service/apply-for-service.component";
import { UlbPickerComponent } from './controls/ulb-picker/ulb-picker.component';
import { ValidSubPickerComponent } from './controls/valid-sub-picker/valid-sub-picker.component';
import { ValidWorkPickerComponent } from './controls/valid-work-picker/valid-work-picker.component';
import { TemplateNameDirective } from './directives/template-name.directive';

@NgModule({
    declarations: [
        ApplyForServiceComponent,
        UlbPickerComponent,
        ValidSubPickerComponent,
        ValidWorkPickerComponent,
        TemplateNameDirective
    ],
    imports: [
        CommonModule,
        FormsModule, MatFormFieldModule, MatInputModule,
        MatCardModule, MatButtonModule, MatMenuModule,
        MatSelectModule
    ],
    providers: [],
    exports: [
        ApplyForServiceComponent
    ]
})
export class SharedModule { }