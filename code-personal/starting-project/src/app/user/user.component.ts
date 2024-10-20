import {Component, computed, EventEmitter, input, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() selectedUser = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }


  onSelectUser() {
    this.selectedUser.emit(this.id);
  }
}
