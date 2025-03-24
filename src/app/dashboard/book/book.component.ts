import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BookService } from '../../services/book.service';
import { Book } from '../models/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit, OnDestroy{
  bookContent = 'Loading...';
  currentPage = 1;
  book: Book | null = null;
  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    const bookId = Number(this.route.snapshot.paramMap.get('id'));
    this.readBook(bookId);    
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  readBook(bookId:number){
    this.bookService.readBook(bookId).subscribe({
      next:(book)=>{
        this.book=book;
        this.currentPage = Number(localStorage.getItem(`book-${this.book?.id}-page`)) || 1;
        this.loadPageContent();
      }, error: () =>{

      }
    })
  }

  loadPageContent() {
    localStorage.setItem(`book-${this.book?.id}-page`, this.currentPage.toString());
    this.bookContent = this.book?.perPageContent ? this.book?.perPageContent[this.currentPage] : '';
  }

  nextPage() {
    if (this.currentPage < (this.book?.pages || 1)) {
      this.currentPage++;
      this.loadPageContent();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPageContent();
    }
  }

  goBack() {
    this.router.navigate(['/ebooks']);
  }
}
