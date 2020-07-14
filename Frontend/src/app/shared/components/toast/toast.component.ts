import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

class Toast {
  type: string;
  content: string;
  dismissed: boolean;
  constructor(type: string, content: string) {
    this.type = type;
    this.content = content;
  }
}


@Component({
  selector: 'toasts',
  templateUrl: 'toast.component.html',
  styleUrls: ['toast.component.scss']
})

export class ToastComponent implements OnInit {

  toasts: Toast[] = [];

  constructor(private global: GlobalService) {
  }

  ngOnInit(): void {
    this.global.notification$.subscribe((data: { type, data }) => {
      let toast = new Toast(data.type, data.data);
      this.toasts.push(toast);
    })
  }

}
