import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'intro',
		pathMatch: 'full',
	},
	{
		path: 'intro',
		loadComponent: () => import('./features/intro/intro.page').then(m => m.IntroPage)
	},
	{
		path: 'proportions',
		loadComponent: () => import('./features/proportions/proportions.page').then(m => m.ProportionsPage)
	},
	{
		path: 'cointoss',
		loadComponent: () => import('./features/cointoss/cointoss.page').then(m => m.CointossPage)
	},
  {
    path: 'rng',
    loadComponent: () => import('./features/rng/rng.page').then( m => m.RngPage)
  },
];
