import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditCustomerComponent } from './Modules/Components/customer-data/edit-customer/edit-customer.component';
import { AddCustomerComponent } from './Modules/Components/customer-data/add-customer/add-customer.component';
import { CustomerDataComponent } from './Modules/Components/customer-data/customer-data.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PhoneCallsComponent } from './Modules/phone-calls/phone-calls.component';
import { AgentOrdersComponent } from './Modules/agent-orders/agent-orders.component';
import { VisitsComponent } from './Modules/visits/visits.component';
import { SharedModule } from './sharedModule/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    CustomerDataComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    PhoneCallsComponent,
    AgentOrdersComponent,
    VisitsComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatDialogModule,
    MatToolbarModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatMenuModule,
    FormsModule,
    MatSnackBarModule,
    SharedModule,
    MatTabsModule,
    ReactiveFormsModule,
    DatePipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
