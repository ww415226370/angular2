import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TemplateComponent }           from './template.component';
import { TemplateSyntaxComponent } from  './template-syntax/template-syntax.component';
import { LifecycleHooksComponent } from  './lifecycle-hooks/lifecycle-hooks.component';
import { StyleComponent } from './component-styles/style.component';


const adminRoutes: Routes = [
    {
        path: '',
        component: TemplateComponent,
        children: [
            { path: 'template-syntax', component: TemplateSyntaxComponent },
            { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
            { path: 'component-styles', component: StyleComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class TemplateRoutingModule {}
