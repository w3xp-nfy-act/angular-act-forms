import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Book, Thumbnail } from '../interfaces/book';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-example',
    templateUrl: './form-example.component.html',
    styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit, OnChanges {
    bookForm: FormGroup;
    @Output() submitBook = new EventEmitter<Book>();

    @Input() book: Book;
    @Input() editing = false;

    constructor(private fb: FormBuilder) { }

    submitForm() {
        const formValue = this.bookForm.value;
        const authors = formValue.authors.filter(author => author);
        const thumbnails = formValue.thumbnails.filter(thumbnail => thumbnail.url);

        const isbn = this.editing ? this.book.isbn : formValue.isbn;

        const newBook: Book = {
            ...formValue,
            isbn,
            authors,
            thumbnails
        };

        this.submitBook.emit(newBook);
        this.bookForm.reset();
    }

    ngOnInit() {
        this.initForm();
    }

    ngOnChanges() {
        this.initForm();
        this.setFormValues(this.book);
    }

    private initForm() {
        if ( this.bookForm ) {
            return;
        }

        this.bookForm = this.fb.group({
            title: ['', Validators.required],
            subtitle: [''],
            isbn: [{
                value: '',
                disabled: this.editing
            }, [
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(13)
            ]],
            description: [''],
            authors: this.buildAuthorsArray(['']),
            thumbnails: this.buildThumbnailsArray([
                { title: '', url: '' }
            ]),
            published: [new Date()]
        });
    }

    private setFormValues(book: Book) {
        this.bookForm.patchValue(book);

        this.bookForm.setControl(
            'authors',
            this.buildAuthorsArray(book.authors)
        );

        this.bookForm.setControl(
            'thumbnails',
            this.buildThumbnailsArray(book.thumbnails)
        );
    }

    private buildAuthorsArray(values: string[]): FormArray {
        return this.fb.array(values, Validators.required);
    }

    private buildThumbnailsArray(values: Thumbnail[]): FormArray {
        return this.fb.array(
            values.map(t => this.fb.group(t))
        );
    }

    get authors(): FormArray {
        return this.bookForm.get('authors') as FormArray;
    }

    get thumbnails(): FormArray {
        return this.bookForm.get('thumbnails') as FormArray;
    }

    addAuthorControl() {
        this.authors.push(this.fb.control(''));
    }

    removeAuthorControl() {
        this.authors.removeAt(this.authors.length - 1);
    }

    addThumbnailControl() {
        this.thumbnails.push(
            this.fb.group({url: '', title: ''})
        );
    }

    removeThumbnailControl() {
        this.thumbnails.removeAt(this.thumbnails.length - 1);
    }
}
