import { Component, OnInit } from '@angular/core';
import { FoodDeliveryService } from '../app.service';

@Component({
    selector: 'app-receipt',
    templateUrl: 'receipt.component.html',
    styleUrls: ['./receipt.component.scss']
})

export class ReceiptComponent implements OnInit {

    public selections = [
        { users: [], foodOutlets: []}
    ];

    constructor(private foodDelivery: FoodDeliveryService) { }

    ngOnInit() {
        this.selections[0].foodOutlets = [ ...this.foodDelivery.getFoodOutlets() ];
        this.selections[0].users = [...this.foodDelivery.getUsers() ];
    }
}