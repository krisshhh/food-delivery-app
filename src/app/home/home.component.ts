import { Component, OnInit } from '@angular/core';
import { FoodDeliveryService } from '../app.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    public foodOutlets = []
    public users = [];
    public selections = [
        { users: [], foodOutlets: []}
    ];

    constructor(private foodDelivery: FoodDeliveryService) { }

    ngOnInit() { 
        this.foodOutlets = [ ...this.foodDelivery.getFoodOutlets() ];
        this.users = [...this.foodDelivery.getUsers() ];
        this.selections[0].foodOutlets = [ ...this.foodDelivery.getFoodOutlets() ];
        this.selections[0].users = [...this.foodDelivery.getUsers() ];
    }

    addSelection() {
        this.selections.push({ users: [], foodOutlets: []});
    }

    addUser(selection, user) {
        if (selection.users.find(u => u.id === user.id)) return null
        selection.users.push({ ...user });
    }

    removeUser(selection, selUser) {
        selection.users = selection.users.filter(user => user.id !== selUser.id);
    }

    addFoodOutlet(selection, foodOutlet) {
        if (selection.foodOutlets.find(f => f.id === foodOutlet.id)) return null
        selection.foodOutlets.push({ ...foodOutlet });
    }

    removeFoodOutlet(selection, selFoodOutlet) {
        selection.foodOutlets = selection.foodOutlets
            .filter(foodOutlet => foodOutlet.id !== selFoodOutlet.id);
    }
}