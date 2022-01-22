import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  userList: User[] = this.userService.list;

  currentUser: User = new User();

  constructor(
    private userService: UserService
  ) { 
    
  }

  onSelectClick(dataRow: User): void {
    this.currentUser = dataRow;
  }
  onUpdateClick(dataRow: User): void {
    this.userService.updateUser(dataRow);
  }
  onDeleteClick(dataRow: User): void {
    this.userService.removeUser(dataRow);
    this.currentUser = new User();
  }

}
