import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonicModule } from '@ionic/angular';
import { PagePage } from 'src/app/page/page.page';
// import { IonCol, IonGrid, IonInput, IonRow } from '@ionic/angular/standalone';

@Component({
	selector: 'app-proportions',
	templateUrl: './proportions.page.html',
	styleUrls: ['./proportions.page.scss'],
	standalone: true,
	imports: [IonicModule, CommonModule, FormsModule, PagePage,
		// IonInput, IonGrid, IonRow, IonCol,
	]
})
export class ProportionsPage implements OnInit {
	@ViewChild("x1") x1:IonInput;
	@ViewChild("x2") x2:IonInput;
	@ViewChild("y1") y1:IonInput;
	@ViewChild("y2") y2:IonInput;
	constructor(){}

	ngOnInit(){}

	Calculate(output:IonInput, v1:number, v2:number, v3:number){
		if(v3 === 0) return;
		output.value = v1*v2/v3;
	}

}
