import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
  constructor(private User: UserService) {}
  users?: string[];
  onSetToActive(id: number) {
    this.User.onSetToActive(id);
  }
  ngOnInit() {
    this.users = this.User.inactiveUsers;
  }
}
