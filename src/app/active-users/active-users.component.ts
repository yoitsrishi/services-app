import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
  constructor(private User: UserService) {}
  users?: string[];
  onSetToInactive(id: number) {
    this.User.onSetToInactive(id);
  }
  ngOnInit() {
    this.users = this.User.activeUsers;
  }
}
