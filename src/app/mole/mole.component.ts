import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mole',
  templateUrl: './mole.component.html',
  styleUrls: ['./mole.component.css']
})
export class MoleComponent implements OnInit {
  @Input() active = false;
  constructor() { }

  ngOnInit(): void {
  }

}
