import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/ApiService/api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css'],
  providers: [DatePipe],
})
export class EditCustomerComponent implements OnInit {
  editCustomerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<EditCustomerComponent>,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.editCustomerForm = this.fb.group({
      description: new FormControl('', Validators.required),
      InsertDate: new FormControl(),
      Call_Location: new FormControl(''),
      project: new FormControl(''),
      Employee: new FormControl(''),
      Call_Type: new FormControl(''),
      Done: new FormControl(false),
      id: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.setFormControls(this.data);
  }

  setFormControls(item: any) {
    debugger;

    // Format the date using DatePipe
    let formattedDate = this.datePipe.transform(item.InsertDate, 'yyyy/MM/dd');

    this.editCustomerForm.controls['id'].setValue(item.id);
    this.editCustomerForm.controls['description'].setValue(item.description);
    this.editCustomerForm.controls['InsertDate'].setValue(formattedDate);
    this.editCustomerForm.controls['Call_Location'].setValue(
      item.Call_Location
    );
    this.editCustomerForm.controls['project'].setValue(item.project);
    this.editCustomerForm.controls['Employee'].setValue(item.EntryEmployee);
    this.editCustomerForm.controls['Call_Type'].setValue(item.Call_Type);
    this.editCustomerForm.controls['Done'].setValue(item.Done);
  }

  save() {
    debugger
    const editedData = this.editCustomerForm.value;
    const customerId = this.data.id; // Assuming 'id' is the property containing the customer ID

    this.api.updateCustomerData(editedData).subscribe(
      (response) => {
        console.log('Customer updated successfully.', response);
        this.dialogRef.close(editedData); // Close the dialog if the update is successful
      },
      (error) => {
        console.error('Error updating customer:', error);
        // Handle error if needed
      }
    );
  }

  cancel() {
    this.dialogRef.close();
  }
}
