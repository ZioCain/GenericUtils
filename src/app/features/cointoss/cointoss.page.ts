import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PagePage } from 'src/app/page/page.page';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonLabel } from '@ionic/angular/standalone';

@Component({
	selector: 'app-cointoss',
	templateUrl: './cointoss.page.html',
	styleUrls: ['./cointoss.page.scss'],
	standalone: true,
	imports: [IonicModule, CommonModule, FormsModule, PagePage,
		IonCard, IonCardHeader, IonCardContent, IonLabel, IonButton
	]
})
export class CointossPage implements OnInit {
	result: string = "<none>";

	constructor() { }

	ngOnInit() {}

	TossCoin(){
		this.result = "* flipping... *";
		setTimeout(()=>{
			this.result = Math.random()<.5? "HEADS":"TAILS";
		}, 500);
	}

}
