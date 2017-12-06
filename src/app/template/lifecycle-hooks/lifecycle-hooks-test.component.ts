import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import {
  	OnChanges,
  	OnInit,
  	DoCheck,
  	AfterContentInit,
  	AfterContentChecked,
  	AfterViewInit,
  	AfterViewChecked,
  	OnDestroy
} from '@angular/core';

@Component({
    selector: 'lifecycle-hooks-test',
	  template: `
        <div>组件生命周期</div>
        <span>{{index}}<span>
    `
})

export class LifecycleHooksTestComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy{
    private _index = null;

    @Input() index: number;
    // @Input()
    // set index(index: number){
    //     this._index = index;
    // }


    // get index(): number {
    //     return this._index;
    // }

    @Output() onMessage = new EventEmitter<any>();


    constructor() {
        console.log('第一执行');
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        console.log('OnChanges');//当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在ngOnInit()之前。
        console.log(changes)
    }

    ngOnInit() {
        console.log('OnInit');//在第一轮ngOnChanges()完成之后调用，只调用一次。
        this.onMessage.emit('子组件已创建');
    }

    ngDoCheck() {
        console.log('DoCheck');//在每个Angular变更检测周期中调用，ngOnChanges()和ngOnInit()之后。
    }

    ngAfterContentInit() {
        console.log('AfterContentInit');//当把内容投影进组件之后调用。第一次ngDoCheck()之后调用，只调用一次。只适用于组件。
    }

    ngAfterViewInit() {
        console.log('AfterViewInit');//初始化完组件视图及其子视图之后调用。第一次ngAfterContentChecked()之后调用，只调用一次。只适合组件
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');//每次做完组件视图和子视图的变更检测之后调用。ngAfterViewInit()和每次ngAfterContentChecked()之后调用。只适合组件。
    }

    ngOnDestroy() {
        console.log('OnDestroy');//销毁
        this.onMessage.emit('子组件已销毁');
    }

}