import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ebook-store';
  user:any;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.userInfo$.subscribe((user)=>{
      this.user= user;
    })
  } 

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
