import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-unsettled-bets',
  imports: [RouterModule],
  templateUrl: './unsettled-bets.component.html',
  styleUrl: './unsettled-bets.component.css'
})
export class UnsettledBetsComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout()
  }
}
