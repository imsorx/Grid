import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalService } from '../../../services/global.service';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponet implements OnInit {

    profileForm: FormGroup;

    constructor(
        private global: GlobalService,
        private auth: AuthService,
        private fb: FormBuilder) { }

    updateProfile() {
        let payload = { _id: this.auth.loggedUser.id, ...this.profileForm.value };
        this.auth.updateUser(payload)
            .subscribe(res => this.global.newToast("success", "Profile updated!"), err => this.global.newToast("error", err.error.error));
    }
    closeProfile() {
        this.global.toggleProfile(false);
    } 

    ngOnInit() {
        this.profileForm = this.fb.group({
            name: [this.auth.loggedUser.name],
            mail: [{ value: this.auth.loggedUser.mail, disabled: true }],
            dsg: [this.auth.loggedUser.dsg]
        })
    }

}
