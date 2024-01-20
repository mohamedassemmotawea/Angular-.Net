import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/ApiService/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
  providers: [DatePipe],
})
export class AddCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<AddCustomerComponent>,
    private datePipe: DatePipe,
  ) {
    this.customerForm = this.fb.group({
      description: new FormControl('', Validators.required),
      InsertDate: new FormControl(new Date()),
      Call_Location: new FormControl(''),
      project: new FormControl(''),
      Employee: new FormControl(''),
      Call_Type: new FormControl(''),
      Done: new FormControl(false),
      id: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  save() {
    debugger
    let InsertData = this.customerForm.value;
    this.api.InsertCustomerData(InsertData).subscribe(
      (response) => {
        console.log('Customer Inserted successfully.', response);
        this.dialogRef.close(InsertData);
      },
      (error) => {
        console.error('Error Adding customer:', error);
        // Handle error if needed
      }
    );
  }

  cancel() {
    this.dialogRef.close();
  }
}
