import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/Models/Customer.Model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:7225';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  getCustomersData() {
    return this.http.get(this.apiUrl + '/api/employees');
  }

  deleteCustomer(id: string): Observable<any> {
    let url = `${this.apiUrl}/api/employees/${id}`;
    return this.http.delete(url);
  }

  updateCustomerData(updatedData: any): Observable<any> {
    debugger
    let url = `${this.apiUrl}/api/employees/`;
    return this.http.put(url,updatedData);
  }

  InsertCustomerData(Insertedata: any): Observable<any> {
    debugger
    let url = "${this.apiUrl}/api/employees/";
    return this.http.post(url, Insertedata);
  }

  get<T>(endpoint: string): Observable<T> {
    let url = `${this.apiUrl}/${endpoint}`;
    return this.http.get<T>(url, { headers: this.getHeaders() });
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    let url = `${this.apiUrl}/${endpoint}`;
    return this.http.post<T>(url, data, { headers: this.getHeaders() });
  }

  put<T>(endpoint: string, data: any): Observable<T> {
    let url = `${this.apiUrl}/${endpoint}`;
    return this.http.put<T>(url, data, { headers: this.getHeaders() });
  }

  delete<T>(endpoint: string): Observable<T> {
    let url = `${this.apiUrl}/${endpoint}`;
    return this.http.delete<T>(url, { headers: this.getHeaders() });
  }
}
