import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  @ViewChild('loginModal') loginModal!: ElementRef;
  email: string = "11xplayofficiall@gmail.com";
  loginform!: FormGroup
  submitted: boolean = false;
  private mockUsername = 'admin@gmail.com';
  private mockPassword = 'admin@123';
  constructor(private fb: FormBuilder, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {

  }
  ngOnInit(): void {
    this.loginFormIntialize()
  }


  loginFormIntialize() {
    this.loginform = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submitLoginform(): boolean {
    this.submitted = true;
    if (this.loginform.invalid) return false;
    const username = this.loginform.get('username')?.value;
    const password = this.loginform.get('password')?.value;
    if (username === this.mockUsername && password === this.mockPassword) {
      if (isPlatformBrowser(this.platformId)) {
        const fakeToken = 'mock-jwt-token-12345';
        localStorage.setItem('token', fakeToken);
        this.closeModal()
        this.router.navigate(['/dashboard']);
      }
      return true;
    }
    if (username !== this.mockUsername) {
      alert('Invalid username');
    } else if (password !== this.mockPassword) {
      alert('Invalid password');
    }
    return false;
  }



  openModal() {
    const modalEl = this.loginModal?.nativeElement;
    if (modalEl) {
      modalEl.style.display = 'block';
      modalEl.classList.add('show', 'd-block');
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      if (!document.querySelector('.modal-backdrop')) {
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop fade show';
        document.body.appendChild(backdrop);
      }
    }
  }

  closeModal() {
    if (this.loginModal?.nativeElement) {
      this.loginModal.nativeElement.style.display = 'none';
      this.loginModal.nativeElement.classList.remove('show', 'd-block');
      // Restore body scroll
      document.body.classList.remove('modal-open');
      document.body.style.overflow = ''; // Restore scroll
      // Remove any leftover backdrop
      document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    }
  }



}
