import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mail, paperPlane, heart, archive, trash, warning, bookmark, calculator, swapHorizontal, apps } from 'ionicons/icons';

interface Page{
	title:string;
	url:string;
	icon:string;
}

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	standalone: true,
	imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet],
})
export class AppComponent {
	public appPages:Page[] = [
		{title: "Proportions", url: "proportions", icon: "calculator"},
		{title: "CoinToss", url: "cointoss", icon: "swap-horizontal"},
		{title: "Random Number Generator", url: "rng", icon: "apps"},
	];
	constructor() {
		addIcons({ calculator, swapHorizontal, apps });
	}
}
