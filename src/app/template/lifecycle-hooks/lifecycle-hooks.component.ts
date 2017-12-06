import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownTimerComponent }  from './countdown-timer.component';

@Component({
	templateUrl: './lifecycle-hooks.component.html',
	styleUrls: ['./lifecycle-hooks.component.css']
})

export class LifecycleHooksComponent implements AfterViewInit {
	outIndex: number = 0;
	show: boolean = true;
	messages: String;

	addIndex() {
		this.outIndex++;
	}

	message(msg: String){
		this.messages = msg;
	}

	agreed = 0;
  	disagreed = 0;
  	voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
 
  	onVoted(agreed: boolean) {
    	agreed ? this.agreed++ : this.disagreed++;
  	}

  	@ViewChild(CountdownTimerComponent)
	private timerComponent: CountdownTimerComponent;
	 
	seconds() { return 0; }
	
	ngAfterViewInit() {
	    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
	    // but wait a tick first to avoid one-time devMode
	    // unidirectional-data-flow-violation error
	    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
	}

	start() { this.timerComponent.start(); }
	stop() { this.timerComponent.stop(); }
}