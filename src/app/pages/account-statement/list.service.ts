import { Injectable } from '@angular/core';
import { TRANSACTIONS } from '../../json-data/data';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }
  getAllTransactions(params:any): Observable<any> {
    // return of(TRANSACTIONS);
    return this.http.get('https://6787b44ec4a42c916107e5c7.mockapi.io/accounts/accounts-details',{params:params});
  }
}
