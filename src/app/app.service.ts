import { Injectable } from '@angular/core';

@Injectable()
export class FoodDeliveryService {

    public foodOutlets = [
        { id: 1, name: 'Paradise' },
        { id: 2, name: 'Bawarchi' },
        { id: 3, name: 'Mehfil' },
        { id: 4, name: 'Bahar Cafe' },
        { id: 5, name: 'Shadab' },
    ]

    public users = [
        { id: 1, name: 'Krishna'},
        { id: 2, name: 'Naveen'},
        { id: 3, name: 'Yashwanth'},
        { id: 4, name: 'Rachana'},
        { id: 5, name: 'Manoj'}
    ]
    constructor() { }

    getUsers() {
        return this.users;
    }

    getFoodOutlets() {
        return this.foodOutlets;
    }
}