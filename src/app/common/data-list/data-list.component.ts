import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  @Input() dataList: User[] = [new User()];
  @Output() selectClick: EventEmitter<User> = new EventEmitter<User>();
  @Output() updateClick: EventEmitter<User> = new EventEmitter<User>();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter<User>();
  
  keys: string[] = ['id', 'name', 'email', 'address', 'active'];

  constructor() { }

  onSelectClick(dataRow: User): void {
    this.selectClick.emit(dataRow);
  }
  onUpdateClick(dataRow: User): void {
    this.updateClick.emit(dataRow);
  }
  onDeleteClick(dataRow: User): void {
    this.deleteClick.emit(dataRow);
  }


  ngOnInit(): void {
  }

}
