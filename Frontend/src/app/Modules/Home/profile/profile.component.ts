import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms';
import { httpService } from '../../../services/http.service';
import { CoreService } from '../../../services/core.service';
import { GlobalService } from '../../../services/global.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponet implements OnInit {

    currentUser: User_details;

    constructor(
        private core: CoreService,
        private global: GlobalService,
        private http: httpService) { }

    updateProfile(form: NgForm) {
        let payload = { _id: this.currentUser._id, ...form.value };
        this.http.updateUser(payload)
            .subscribe(res => this.global.newToast("success", "Profile updated!"), err => this.global.newToast("error", err.error.error));
    }
    closeProfile() {
        this.global.toggleProfile(false);
    }
    ngOnInit() {
        this.currentUser = this.core.currentUser;
    }

}
