import { Component } from '@angular/core';

@Component({
    selector: 'app-form-markdown',
    template: `
    <markdown [src]="'./assets/md/reactive-forms.md'"></markdown>
    `
})

export class FormMarkdownComponent {}