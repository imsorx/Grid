import { WebsocketService } from "./../../services/websocket.service";
import { flyin } from "./../../Animation/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chatwin",
  templateUrl: "./chatwin.component.html",
  styleUrls: ["./chatwin.component.scss"],
  animations: [flyin],
})
export class ChatwinComponent implements OnInit {
  container: HTMLElement;
  messages = [
    { from: "sender", ms: "Hello!", time: "12:30" },
    {
      from: "user",
      ms: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "12:45",
    },
    {
      from: "user",
      ms: "In ac nibh in nisi ultrices vulputate.",
      time: "01:00",
    },
    {
      from: "sender",
      ms: "Nam eget risus non lorem rhoncus porta.",
      time: "01:30",
    },
    {
      from: "user",
      ms: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "12:45",
    },
    {
      from: "user",
      ms: "In ac nibh in nisi ultrices vulputate.",
      time: "01:00",
    },
    {
      from: "sender",
      ms: "Nam eget risus non lorem rhoncus porta.",
      time: "01:30",
    },
  ];

  onEnter(value: string) {
    let message = {
      from: <string>null,
      ms: <string>null,
      time: <string>null,
    };
    const t = new Date().toLocaleTimeString();
    message.from = "user";
    message.ms = value;
    message.time = t;
    this.messages.push(message);
    console.log(this.messages);
  }
  constructor() {}
  ngOnInit() {}
  ngAfterViewChecked() {
    this.container = document.getElementById("msgbox");
    this.container.scrollTop = this.container.scrollHeight;
  }
  ngOnDestroy() {}
}
