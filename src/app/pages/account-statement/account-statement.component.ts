import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { ListService } from './list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-statement',
  imports: [RouterModule, CommonModule],
  templateUrl: './account-statement.component.html',
  styleUrl: './account-statement.component.css'
})
export class AccountStatementComponent implements OnInit {
  transactions: any[] = [];
  // pagination
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  constructor(private authService: AuthService, private listService: ListService) {

  }

  ngOnInit(): void {
    this.getAccountData();
  }


  getAccountData() {
    const params: any = {
      page: this.currentPage,
      limit: 10
    }
    this.listService.getAllTransactions(params).subscribe((data: any) => {
      this.transactions = data;
    });
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  // pagination
  totalPages(): number {
    return Math.ceil(this.transactions?.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages()) return;
    this.currentPage = page;
    this.getAccountData();
  }

  logout() {
    this.authService.logout()
  }
}
