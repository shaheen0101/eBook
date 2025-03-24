import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { Book } from '../models/book';
import { BookService } from '../../services/book.service';
import { AuthService } from '../../services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  user:any;
  private destroy$ = new Subject<void>();

  constructor(private router: Router, private bookService: BookService, private authService: AuthService) {
    this.authService.userInfo$.subscribe((user)=>{
      this.user = user;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
   this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getAllBooks(this.user.id).subscribe({
      next:(books:Book[])=>{
        this.books = books;
        this.bindProgress();
      }, error:()=>{
        alert('Something went wrong');
      }
    })
  }

  bindProgress(){
    this.books.forEach((book)=>{
      const currentPage = Number(localStorage.getItem(`book-${book?.id}-page`)) || 1;
      book.progress =currentPage == 1 ? '0' : ((currentPage / book.pages) * 100).toFixed(2);
    })
  }

  openBook(id: number) {
    this.router.navigate([`/ebooks/${id}`]);
  }
}
