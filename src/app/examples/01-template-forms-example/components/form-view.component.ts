import {Component, OnInit, ViewChild} from '@angular/core';
import { LoadingService } from '../../../shared/services/loading.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-input',
    styleUrls: ['./form-view.component.scss'],
    templateUrl: './form-view.component.html'
})

export class FormComponent implements OnInit {

    constructor(public loadingService: LoadingService) { }

    formData = {
        username: '',
        password: ''
    };

    @ViewChild('myForm', {static: false}) myForm: NgForm;

    ngOnInit() {
        console.log('Form-Component 01: ngOnInit');

        this.loadingService.hideLoader();
    }

    submitForm() {
        console.log(this.formData);
        
        this.myForm.reset();
    }
}