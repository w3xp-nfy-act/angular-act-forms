import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { ReactiveFormComponent, FormMarkdownComponent } from '.';
import { SharedModule } from '../../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormExampleComponent} from "./components/form-example.component";
import {FormMessagesComponent} from "./components/form-messages.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
      ReactiveFormComponent,
      FormMarkdownComponent,
      FormExampleComponent,
      FormMessagesComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        MarkdownModule.forChild(),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule
    ],
  exports: [ReactiveFormComponent, FormMarkdownComponent]
})
export class ReactiveFormModule { }