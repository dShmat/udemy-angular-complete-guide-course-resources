import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({ required: true }) user!: {
    id: string,
    name: string,
    avatar: string
  };
  @Output() selectedUser = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }


  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }
}
