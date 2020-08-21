import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { time } from 'console';

class Toast {

  title: string;
  type: string;
  content: string;
  dismissed = false;
  percent = 100;

  constructor(type: string, content: string) {
    this.type = type;
    this.title = type.toUpperCase();
    this.content = content;
    this.startTimer(3000);
  }

  startTimer(duration: number) {
    var timer = duration;

    setInterval(() => {
      this.percent -= (100 / duration) * 100;
      timer -= 100;
      if (timer <= 0) {
        this.dismissed = true;
        this.percent = 100;
        return;
      }
    }, 100);
  }
}


@Component({
  selector: 'toasts',
  templateUrl: 'toast.component.html',
  styleUrls: ['toast.component.scss']
})

export class ToastComponent implements OnInit {

  toasts: Toast[] = [];

  constructor(private global: GlobalService) { }

  ngOnInit(): void {
    this.global.notification$.subscribe((data: { type, data }) => {
      let toast = new Toast(data.type, data.data);
      this.toasts.push(toast);
      setTimeout(() => toast.dismissed = true,5000)
    })
  }

}
