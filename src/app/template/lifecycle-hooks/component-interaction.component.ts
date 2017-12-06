import { Component, EventEmitter, Input, Output } from '@angular/core';
 
@Component({
    selector: 'app-voter',
    template: `
        <h4>{{name}}</h4>
        <button (click)="vote(true)"  [disabled]="voted">Agree</button>
        <button (click)="vote(false)" [disabled]="voted">Disagree</button>
        <h2>测试<h2>
    `,
    styles: [':host { display: block;border: 1px solid black;}',':host-context h2 {background-color: #eef;}']
})
export class ComponentInteractionComponent {
    @Input()  name: string;
    @Output() onVoted = new EventEmitter<boolean>();
    voted = false;
   
    vote(agreed: boolean) {
        this.onVoted.emit(agreed);
        this.voted = true;
    }
}