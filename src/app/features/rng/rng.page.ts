import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PagePage } from 'src/app/page/page.page';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonRow, IonInput } from '@ionic/angular/standalone';

@Component({
	selector: 'app-rng',
	templateUrl: './rng.page.html',
	styleUrls: ['./rng.page.scss'],
	standalone: true,
	imports: [IonicModule, CommonModule, FormsModule, PagePage,
		IonInput, IonGrid, IonRow, IonCol,
		IonCard, IonCardContent, IonCardHeader, IonCardTitle,
	]
})
export class RngPage implements OnInit {

	min:number=0;
	max:number=100;

	output:string="";

	constructor() { }

	ngOnInit() {}

	Generate(){
		this.output = (Math.random()*(this.max-this.min)+this.min).toFixed(0);
	}

}
