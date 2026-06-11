import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-component.component.html',
  styleUrl: './profile-component.component.css'
})
export class ProfileComponentComponent {

  profile = {

    fullName: '',

    email: '',

    phone: '',

    notifications: true,

    smsAlerts: false

  };

  ngOnInit() {

    const currentUser = JSON.parse(
      localStorage.getItem('currentUser') || '{}'
    );

    this.profile.fullName =
      currentUser.firstName +
      ' ' +
      currentUser.lastName;

    this.profile.email =
      currentUser.email;

  }

  saveProfile() {

    alert(
      'Profile Updated Successfully'
    );

  }

}