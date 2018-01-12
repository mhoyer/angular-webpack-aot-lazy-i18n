import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// entry component
@Component({
    selector: 'x-main',
    template: `
    <nav>
        <a routerLink="/bar" routerLinkActive="active">BarModule</a>
        <a routerLink="/foo" routerLinkActive="active">FooModule</a>
    </nav>
    <router-outlet></router-outlet>
`})
export class MainComponent {}

// root routes
export const mainRoutes: Routes = [
    { path: '', redirectTo: 'bar', pathMatch: 'full' },
    { path: 'bar', loadChildren: './bar/bar.module#BarModule' },
    { path: 'foo', loadChildren: './foo/foo.module#FooModule' }
];

// entry module
@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot(mainRoutes, { useHash: true, enableTracing: false }) ],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
export class MainModule { }
