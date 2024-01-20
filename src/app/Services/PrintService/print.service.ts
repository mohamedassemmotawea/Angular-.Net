
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrintService {
  private apiUrl = 'your_print_api_endpoint';

  constructor(private http: HttpClient) {}

  // fetchDataForPrint(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }

  print(): void {
    debugger
    window.print();
  }

  // print(data: any): void {
  //   // Logic to print the data
  //   console.log('Printing data:', data);
  // }
}