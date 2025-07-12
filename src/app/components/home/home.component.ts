import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface UserProfile {
  id: number;
  name: string;
  profilePhoto: string;
  skillsOffered: string[];
  skillsWanted: string[];
  rating: number;
  maxRating: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchQuery: string = '';
  selectedAvailability: string = 'All';
  currentPage: number = 1;
  totalPages: number = 7;
  
  userProfiles: UserProfile[] = [
    {
      id: 1,
      name: 'Marc Demo',
      profilePhoto: 'assets/images/profile-placeholder.jpg',
      skillsOffered: ['Java Script', 'Python'],
      skillsWanted: ['React', 'Graphic designer'],
      rating: 3.4,
      maxRating: 5
    },
    {
      id: 2,
      name: 'Michell',
      profilePhoto: 'assets/images/profile-placeholder.jpg',
      skillsOffered: ['Java Script', 'Python'],
      skillsWanted: ['React', 'Graphic designer'],
      rating: 2.5,
      maxRating: 5
    },
    {
      id: 3,
      name: 'Joe Wills',
      profilePhoto: 'assets/images/profile-placeholder.jpg',
      skillsOffered: ['Java Script', 'Python'],
      skillsWanted: ['React', 'Graphic designer'],
      rating: 4.0,
      maxRating: 5
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(): void {
    // Implement search functionality
    console.log('Searching for:', this.searchQuery);
  }

  onAvailabilityChange(): void {
    // Implement availability filter
    console.log('Availability changed to:', this.selectedAvailability);
  }

  sendRequest(userId: number): void {
    // Implement request functionality
    console.log('Request sent to user:', userId);
    // Show success message or redirect to login if not authenticated
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  getStarArray(rating: number): boolean[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating));
  }
}
