import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core'
import { CallService } from '../../../services/call.service';

@Component({
    selector: 'call-component',
    templateUrl: 'call.component.html',
    styleUrls: ['call.component.scss']
})

export class CallComponent implements AfterViewInit {

    @ViewChild('userVideo') userVid: ElementRef;
    constraint = {
        video: true,
        audio: true
    }
    constructor(private callService: CallService) { }

    ngAfterViewInit() {
        window.navigator.mediaDevices.getUserMedia(this.constraint).then(
            stream => {
                this.userVid.nativeElement.srcObject = stream;
            }
        )
    }
    endCall(){
        this.callService.endCall();
    }
}