import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-multi-market',
  imports: [RouterModule],
  templateUrl: './multi-market.component.html',
  styleUrl: './multi-market.component.css'
})
export class MultiMarketComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void {}


  logout() {
    this.authService.logout()
  }
}
