import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button-group',
  template: `
    <div class="btn-group">
      <app-action-button 
        [btnClass]="'btn-info'"
        [icon]="'fa-eye'"
        (clicked)="onSelectButtonClick()" ></app-action-button>
      <app-action-button 
        [btnClass]="'btn-secondary'"
        [icon]="'fa-refresh'"
        (clicked)="onUpdateButtonClick()" ></app-action-button>
      <app-action-button 
        [btnClass]="'btn-danger'"
        [icon]="'fa-trash'"
        (clicked)="onDeleteButtonClick()" ></app-action-button>
    </div>
  `,
  styleUrls: ['./action-button-group.component.scss']
})
export class ActionButtonGroupComponent implements OnInit {

  @Output() selectClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() updateClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deleteClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  onSelectButtonClick(): void {
    this.selectClick.emit(true);
  }

  onUpdateButtonClick(): void {
    this.updateClick.emit(true);
  }

  onDeleteButtonClick(): void {
    this.deleteClick.emit(true);
  }


  ngOnInit(): void {
  }

}
