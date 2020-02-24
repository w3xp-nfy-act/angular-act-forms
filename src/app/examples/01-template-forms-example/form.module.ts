import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { FormComponent, FormMarkdownComponent } from '.';
import { SharedModule } from '../../shared/shared.module';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      FormComponent,
      FormMarkdownComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      MarkdownModule.forChild(),
      FormsModule
  ],
  exports: [FormComponent, FormMarkdownComponent]
})
export class FormModule { }