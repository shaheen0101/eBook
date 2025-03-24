import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BookComponent } from './dashboard/book/book.component';
import { authGuard } from './core/auth.guard';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'ebooks', component: DashboardComponent, canActivate: [authGuard] },
    { path: 'ebooks/:id', component: BookComponent, canActivate: [authGuard] },
    { path: '', component: DashboardComponent, canActivate: [authGuard], pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
  ];