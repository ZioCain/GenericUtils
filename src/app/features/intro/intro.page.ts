import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PagePage } from 'src/app/page/page.page';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';

@Component({
	selector: 'app-intro',
	templateUrl: './intro.page.html',
	styleUrls: ['./intro.page.scss'],
	standalone: true,
	imports: [IonicModule, CommonModule, FormsModule, PagePage,
		IonCard, IonCardHeader, IonCardTitle
	]
})
export class IntroPage implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
