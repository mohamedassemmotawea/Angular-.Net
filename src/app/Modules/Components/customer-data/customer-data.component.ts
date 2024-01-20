import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { PrintService } from 'src/app/Services/PrintService/print.service';
import { FilterService } from 'src/app/Services/FilterService/filter.service';
import { ExportService } from 'src/app/Services/ExportService/export.service';
import { SearchService } from 'src/app/Services/SearchService/search.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'src/app/Services/ApiService/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/Models/Customer.Model';

interface ApiResponse {
  message: string;
  // Other properties if applicable
}

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CustomerDataComponent implements OnInit {
  displayedColumns: string[] = [
    'delete',
    'edit',
    'AgentDescription',
    'AgentSrc',
    'SalesEmp',
    'UpdateDate',
    'UpdateEmployee',
    'InsertDate',
    'EntryEmployee',
    'JobTitle',
    'description',
    'homeLocation',
    'name',
  ]; // 'id',

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
  dataSource: Customer[] = [];
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

  ngOnInit(): void {
    this.getCustomersData();
  }

  fetchAndPrintData(): void {
    this.print.print();
  }

  dataToExport: any;
  exportData(): void {
    const fileName = 'exported_data';
    debugger
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

  getCustomersData() {
    this.api.getCustomersData().subscribe((response: any) => {
      this.dataSource = response;
      this.dataToExport = response;
    });
  }

  openAddRowPopup(): void {
    const dialogRef = this.dialog.open(AddCustomerComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getCustomersData();
    });
  }

  openEditPopup(item: any) {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      width: '600px',
      data: item,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getCustomersData();
    });
  }

  deleteCustomer(item: any): void {
    const confirmation = window.confirm(
      'Are you sure you want to delete this item?'
    );

    if (confirmation) {
      this.api.deleteCustomer(item.id).subscribe(
        () => {
          this.getCustomersData();
          console.log('Customer deleted successfully.');
        },
        (error) => {
          console.error('Error deleting customer:', error);
        }
      );
    }
  }

  toggleColumnVisibility(column: any) {
    column.visible = !column.visible;
  }
}
