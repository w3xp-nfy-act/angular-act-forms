import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-input',
    styleUrls: ['./form-view.component.scss'],
    templateUrl: './form-view.component.html'
})

export class FormComponent implements OnInit {

    formData = {
        username: '',
        password: ''
    };

    @ViewChild('myForm', {static: false}) myForm: NgForm;

    ngOnInit() {
        console.log('test');
    }

    submitForm() {
        console.log(this.formData);

        this.myForm.reset();
    }
}