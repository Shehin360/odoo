import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  userData = {
    name: '',
    location: '',
    skillsOffered: ['Cooking', 'Gardening', 'Programming'],
    skillsWanted: ['Photography', 'Painting'],
    availability: 'weekends',
    profile: 'Public',
    profilePhoto: 'assets/default-profile.png'
  };

  saveProfile() {
    // Implement save functionality
    console.log('Saving profile:', this.userData);
  }

  discardChanges() {
    // Implement discard functionality
    console.log('Discarding changes');
  }
}
