import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { PrintService } from 'src/app/Services/PrintService/print.service';
import { FilterService } from 'src/app/Services/FilterService/filter.service';
import { ExportService } from 'src/app/Services/ExportService/export.service';
import { SearchService } from 'src/app/Services/SearchService/search.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/Services/ApiService/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddCustomerComponent } from '../Components/customer-data/add-customer/add-customer.component';
import { EditCustomerComponent } from '../Components/customer-data/edit-customer/edit-customer.component';

@Component({
  selector: 'app-phone-calls',
  templateUrl: './phone-calls.component.html',
  styleUrls: ['./phone-calls.component.css'],
})
export class PhoneCallsComponent {
  displayedColumns: string[] = [
    'UpdateEmployee',
    'InsertDate',
    'EntryEmployee',
    'JobTitle',
    'description',
    'homeLocation',
    'name',
  ]; // 'id',
  // this.dataSource = new MatTableDataSource(yourDataArray);

  columns = [
    { header: 'name', visible: true },
    { header: 'homeLocation', visible: true },
    { header: 'description', visible: true },
    { header: 'JobTitle', visible: true },
    { header: 'EntryEmployee', visible: true },
    { header: 'InsertDate', visible: true },
    { header: 'UpdateEmployee', visible: true },
    { header: 'UpdateDate', visible: true },
    { header: 'SalesEmp', visible: true },
    { header: 'AgentSrc', visible: true },
    { header: 'AgentDescription', visible: true },
    { header: 'edit', visible: true },
    { header: 'delete', visible: true },
  ]; // 'id',
  dataSource: any;
  FilterTable: boolean = false;
  customerFilter: FormGroup;
  constructor(
    private dialog: MatDialog,
    private print: PrintService,
    private filter: FilterService,
    private Export: ExportService,
    private Search: SearchService,
    private cdr: ChangeDetectorRef,
    private api: ApiService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.customerFilter = this.fb.group({
      Filters: [''],
    });
  }

  fetchAndPrintData(): void {
    this.print.print();
  }

  dataToExport: any; //which have all the data in the table
  exportData(): void {
    const fileName = 'exported_data';
    this.Export.downloadCsv(this.dataToExport, fileName);
  }

  filterTable() {
    if (this.FilterTable == false) {
      this.FilterTable = true;
      if (
        this.customerFilter.controls['customerFilter'].value === !null ||
        this.customerFilter.controls['customerFilter'].value === !undefined
      ) {
        let filterValue = this.customerFilter.controls['customerFilter'].value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
    } else {
      this.FilterTable = false;
    }
  }

  refresh() {
    this.cdr.detectChanges();
  }

  openAddRowPopup(): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      //getdata again
    });
  }

  openEditPopup(item: any) {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      width: '600px',
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with result:', result);
    });
  }

  openDelete(item: any) {
    this.api.delete('' + item).subscribe(
      (response: any) => {
        const message = response.message || 'تم الحذف بنجاح';

        this.snackBar.open(message, 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      },
      (error: any) => {
        // Handle error if needed
        console.error('Error deleting item:', error);
      }
    );
  }

  toggleColumnVisibility(column: any) {
    debugger;
    column.visible = !column.visible;
  }
}
function isNullOrUndefined(value: any) {
  throw new Error('Function not implemented.');
}

