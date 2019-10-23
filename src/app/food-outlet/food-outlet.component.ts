import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-food-outlet',
    templateUrl: 'food-outlet.component.html',
    styleUrls: ['./food-outlet.component.scss']
})

export class FoodOutletComponent implements OnInit {

    foodOutletForm: FormGroup;

    constructor(private router: Router) { }

    ngOnInit() {
        this.foodOutletForm = new FormGroup({
            name: new FormControl('',[Validators.required]),
            contact: new FormControl('', [Validators.required]),
            address: new FormControl('', [Validators.required])
        });
    }

    onSubmit() {
        if(this.foodOutletForm.valid) {
            this.router.navigate(['/'])
        } else {
            console.log('invalid form');
        }
    }
}