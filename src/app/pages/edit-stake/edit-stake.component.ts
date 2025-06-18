import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-edit-stake',
  imports: [RouterModule],
  templateUrl: './edit-stake.component.html',
  styleUrl: './edit-stake.component.css'
})
export class EditStakeComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  logout() {
    this.authService.logout()
  }
}
