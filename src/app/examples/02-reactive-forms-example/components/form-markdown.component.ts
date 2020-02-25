import { Component } from '@angular/core';
import { LoadingService } from '../../../shared/services/loading.service';

@Component({
    selector: 'app-form-markdown',
    template: `
        <markdown [src]="'./assets/md/reactive-forms.md'" (load)="onLoad($event)" (error)="onError($event)"></markdown>
    `
})

export class FormMarkdownComponent {

constructor(public loadingService: LoadingService) { }

public onLoad($event) {
    console.log('Form-Markdown 02:  onLoad')
    
    setTimeout(() => {
        this.loadingService.showLoader();
    }, 0);
}

public onError($event) {
    console.log('Form-Markdown 02: onError');
}

}