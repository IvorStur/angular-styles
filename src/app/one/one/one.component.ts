import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  bool: boolean = false;
  farba: string;
  constructor() {}

  ngOnInit() {}

  farba(): void {
    if (this.bool == false) {
      this.farba = 'green';
    } else {
      this.farba = 'purple';
    }
  }

  zmenBool(): void {
    this.bool = !this.bool;
  }
}
