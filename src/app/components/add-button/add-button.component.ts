import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {

  constructor() { }

  @Input() btnName:string
  @Input() route:string

  ngOnInit(): void {
  }

}
