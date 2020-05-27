import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {


  closewindow() {
    const window = this.electron.remote.getCurrentWindow();
    window.close();
  }
  minwindow(){
    const window = this.electron.remote.getCurrentWindow();
    window.minimize();
  }
  signout(){
    this.router.navigateByUrl('/');
  }

  getroute(){
    if (this.router.url === '/entry/login' || this.router.url === '/chat' || this.router.url === '/entry/signup') {
      return false;
    }
    return true;
  }
  constructor(private electron: ElectronService, private router: Router) {
  }

  ngOnInit() {
  }

}
