import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

    ordersList = []; //all orders
    ordersByEmail = [];
    
    @Input() email: string;


  constructor(public AppService: AppService) { }

    ngOnInit() {
      this.AppService.getOrders().subscribe(
        response => {
            this.ordersList = response.orders;
        }
        /*
        this.AppService.getOrders().subscribe(
        response => {
            this.ordersList = response.orders.filter(
                order => order.email == this.email
            );
        }
         */
        
      );

    }

    



}
