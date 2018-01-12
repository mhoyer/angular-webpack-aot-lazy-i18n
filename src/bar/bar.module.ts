import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@Component({
    selector: 'x-bar',
    template: `<h2>This is a bar<h2>`
})
export class BarComponent {}

export const barRoutes: Routes = [
    { path: '', component: BarComponent },
];

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(barRoutes) ],
    declarations: [BarComponent],
})
export class BarModule { }
