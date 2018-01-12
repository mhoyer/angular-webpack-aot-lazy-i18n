import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@Component({
    selector: 'x-foo',
    template: `<h2>This is a foo<h2>`
})
export class FooComponent {}

export const fooRoutes: Routes = [
    { path: '', component: FooComponent },
];

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(fooRoutes) ],
    declarations: [FooComponent]
})
export class FooModule { }
