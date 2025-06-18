import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profit-lose',
  imports: [RouterModule],
  templateUrl: './profit-lose.component.html',
  styleUrl: './profit-lose.component.css'
})
export class ProfitLoseComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout()
  }
}
