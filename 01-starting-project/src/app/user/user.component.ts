import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter();
  @Input({required: true}) selected!: boolean;
  
  get imageUrl() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
   // this.selectedUser = DUMMY_USERS[randomUser];
   this.select.emit(this.user.id);
  }
}
