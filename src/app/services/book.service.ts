import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Book } from '../dashboard/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = "api/book";
  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  options = { headers: this.headers };
  books:Book[] = [
    { id: 1, title: 'JavaScript', author: 'Jone',category:'Computer Science', pages: 10,
      perPageContent:[
          "In my younger and more vulnerable years my father gave me some advice...",
          "Reserving judgments is a matter of infinite hope...",
          "I was within and without, simultaneously enchanted and repelled...",
          "When he was nearly thirteen, my brother Jem got his arm badly broken...",
          "You never really understand a person until you consider things from his point of view...",
          "Mockingbirds don’t do one thing but make music for us to enjoy...",
          "It was a bright cold day in April, and the clocks were striking thirteen...",
          "Big Brother is Watching You...",
          "War is peace. Freedom is slavery. Ignorance is strength..."
        ]
     },
    { id: 2, title: 'Angular Learning', author: 'Jack Lee',category:'Technology', pages: 10,
      perPageContent:[
        "In my younger and more vulnerable years my father gave me some advice...",
        "Reserving judgments is a matter of infinite hope...",
        "I was within and without, simultaneously enchanted and repelled...",
        "When he was nearly thirteen, my brother Jem got his arm badly broken...",
        "You never really understand a person until you consider things from his point of view...",
        "Mockingbirds don’t do one thing but make music for us to enjoy...",
        "It was a bright cold day in April, and the clocks were striking thirteen...",
        "Big Brother is Watching You...",
        "War is peace. Freedom is slavery. Ignorance is strength..."
      ]
     },
    { id: 3, title: '1984', author: 'George',category:'History', pages: 10,
    perPageContent:[
      "In my younger and more vulnerable years my father gave me some advice...",
      "Reserving judgments is a matter of infinite hope...",
      "I was within and without, simultaneously enchanted and repelled...",
      "When he was nearly thirteen, my brother Jem got his arm badly broken...",
      "You never really understand a person until you consider things from his point of view...",
      "Mockingbirds don’t do one thing but make music for us to enjoy...",
      "It was a bright cold day in April, and the clocks were striking thirteen...",
      "Big Brother is Watching You...",
      "War is peace. Freedom is slavery. Ignorance is strength..."
    ] },
    { id: 4, title: 'The Art of Programming', author: 'Jacob',category:'Computer Science', pages: 10,
      perPageContent:[
        "In my younger and more vulnerable years my father gave me some advice...",
        "Reserving judgments is a matter of infinite hope...",
        "I was within and without, simultaneously enchanted and repelled...",
        "When he was nearly thirteen, my brother Jem got his arm badly broken...",
        "You never really understand a person until you consider things from his point of view...",
        "Mockingbirds don’t do one thing but make music for us to enjoy...",
        "It was a bright cold day in April, and the clocks were striking thirteen...",
        "Big Brother is Watching You...",
        "War is peace. Freedom is slavery. Ignorance is strength..."
      ]
     }
  ]; 

  constructor(private http: HttpClient) {}

  getAllBooks(userId: string){    
    return of(this.books);
  }

  readBook(bookId:number){
    const book= this.books.find(book => book.id === bookId) || null;
    return of(book);
  }
}
