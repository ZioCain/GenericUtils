import { Component, inject, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
	selector: 'app-page',
	templateUrl: './page.page.html',
	styleUrls: ['./page.page.scss'],
	standalone: true,
	imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent],
})
export class PagePage implements OnInit {
	@Input("title") title:string = "";
	constructor() { }

	ngOnInit() {}
}
