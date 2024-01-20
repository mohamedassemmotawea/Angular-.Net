import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TechnicalTask-UI';
  index = 3;
  visits: boolean = false;
  PhoneCalls: boolean = false;
  CustomerData: boolean = false;
  AgentOrders: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.index = 3;
    this.tabChanged(this.index);
    this.cdr.detectChanges();
  }

  tabChanged(index: number) {
    if (index === 0) {
      this.CustomerData = true;
    }
    if (index === 1) {
      this.PhoneCalls = true;
    }
    if (index === 2) {
      this.visits = true;
    }
    if (index === 3) {
      this.AgentOrders = true;
    }

    // Handle tab change logic if needed
    console.log('Tab changed to index:', index);
  }
}
