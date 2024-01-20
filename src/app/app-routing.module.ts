
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDataComponent } from './Modules/Components/customer-data/customer-data.component';
import { AgentOrdersComponent } from './Modules/agent-orders/agent-orders.component';
import { PhoneCallsComponent } from './Modules/phone-calls/phone-calls.component';
import { VisitsComponent } from './Modules/visits/visits.component';

const routes: Routes = [
  { path: '', redirectTo: '/customer-data', pathMatch: 'full' },
  { path: 'customer-data', component: CustomerDataComponent },
  { path: 'agent-orders', component: AgentOrdersComponent },
  { path: 'phone-calls', component: PhoneCallsComponent },
  { path: 'visits', component: VisitsComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
