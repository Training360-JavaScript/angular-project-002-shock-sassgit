import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  template: `
    <button (click)="onUserClicked()" class="btn" [class]="btnClass">
    <app-icon [icon]="icon"></app-icon>
  {{ text }}
  </button>
  `,
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Input() icon: string = 'fa-pen';
  @Input() btnClass: string = 'btn-info';
  @Input() text: string = '';
  @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  onUserClicked(): void {
    this.clicked.emit(true);
  }

  ngOnInit(): void {
  }

}
