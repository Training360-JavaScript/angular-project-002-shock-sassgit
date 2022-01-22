import { User } from 'src/app/model/user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  template: `
  <div>
    <input [(ngModel)]="data[key]" style="width: 100px;" >
  </div>
  `,
  styleUrls: ['./data-cell.component.scss']
})
export class DataCellComponent implements OnInit {

  @Input() data: User = new User();
  @Input() key: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
