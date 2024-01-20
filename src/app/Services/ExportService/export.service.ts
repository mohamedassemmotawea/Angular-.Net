import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  // Generate CSV content from an array of objects
  generateCsv(data: any[], fileName: string): string {
    debugger
    const header = Object.keys(data[0]).join(',') + '\n';
    const rows = data.map(obj => Object.values(obj).join(',') + '\n');
    return header + rows.join('');
  }

  // Trigger the download of a CSV file
  downloadCsv(data: any[], fileName: string): void {
    debugger
    const csvContent = this.generateCsv(data, fileName);
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName + '.csv';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  }
}
