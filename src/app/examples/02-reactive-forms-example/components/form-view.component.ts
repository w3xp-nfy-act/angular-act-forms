import {Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../shared/services/loading.service';
import {Book, Thumbnail} from "../interfaces/book";

@Component({
    selector: 'app-input',
    styleUrls: ['./form-view.component.scss'],
    templateUrl: './form-view.component.html'
})

export class ReactiveFormComponent implements OnInit {
    book: Book;

    constructor(public loadingService: LoadingService) { 
        this.book = {
            isbn: '1234567890',
            title: 'Book title',
            authors: ['Author #1', 'Author #2', 'Author #3'],
            published: new Date(2018, 5, 6),
            subtitle: 'Book subtitle',
            rating: 4.5,
            thumbnails: [{
                url: 'https://www.newsfactory.de/pu_nfy/images/logo.png',
                title: 'logo'
            }],
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        };
    }

    ngOnInit() {
        console.log('Form-Component 02: ngOnInit');

        this.loadingService.hideLoader();
    }

    createBook(book: Book) {
       console.log('Create book event');
    }

    updateBook(book: Book) {
        console.log('Update book event');
    }
}