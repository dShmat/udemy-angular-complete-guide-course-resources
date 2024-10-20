import {Component, computed, signal} from '@angular/core';

import {DUMMY_USERS} from '../dummy-users';

const RANDOM_INDEX = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[RANDOM_INDEX]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  /*
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }
  */

  onSelectUser() {
    const RANDOM_INDEX = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[RANDOM_INDEX]);
  }
}
