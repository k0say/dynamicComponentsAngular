import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  @Input() user//: {id: number, name: string, email: string};

  constructor() { }

  ngOnInit(): void {
  }

}
