import { Component, OnInit } from '@angular/core';
// First and foremost we'll include our authentication service
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: Object;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  getProfile() {
    this.userProfile = JSON.parse(localStorage.getItem('profile'));
  }

}
