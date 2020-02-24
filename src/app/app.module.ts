import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import {
  NotificationService,
} from './shared/services';

import {
    FormModule,
} from './examples/01-template-forms-example/form.module';

import {
    ReactiveFormModule
} from './examples/02-reactive-forms-example/form.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    FormModule,
    ReactiveFormModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MarkdownModule.forRoot(),
    routing
  ],
  providers: [
    appRoutingProviders,
    NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
