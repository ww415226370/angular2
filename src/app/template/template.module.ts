import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateComponent }           from './template.component';
import { TemplateSyntaxComponent } from  './template-syntax/template-syntax.component';
import { LifecycleHooksComponent } from  './lifecycle-hooks/lifecycle-hooks.component';
import { LifecycleHooksTestComponent } from  './lifecycle-hooks/lifecycle-hooks-test.component';
import { ComponentInteractionComponent } from  './lifecycle-hooks/component-interaction.component';
import { CountdownTimerComponent } from './lifecycle-hooks/countdown-timer.component';
import { StyleComponent } from './component-styles/style.component';

import { TemplateRoutingModule }       from './template-routing.module';
import { HighlightDirective }      from '../directives/high-light.directive';
import { appUnlessDirective }      from '../directives/app-unless.directive';

@NgModule({
    imports: [
    	CommonModule,
    	FormsModule,
        TemplateRoutingModule
    ],
    declarations: [
        TemplateComponent,
        TemplateSyntaxComponent,
        StyleComponent,
        LifecycleHooksComponent,
        LifecycleHooksTestComponent,
        ComponentInteractionComponent,
        CountdownTimerComponent,
        HighlightDirective,
        appUnlessDirective
    ]
})

export class TemplateModule {}
