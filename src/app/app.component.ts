import { DataService } from './data.service';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Component, ComponentFactoryResolver, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  private _counter = 0;
  data: any;

  constructor(private cfr: ComponentFactoryResolver, private dataService: DataService) {
    this.dataService.getData$().subscribe(val => {
      this.data = val;
    });
  }

  add() {
    console.log(this.data[this._counter]);
    const cf = this.cfr.resolveComponentFactory(DynamicComponent)
    const componentRef = this.container.createComponent(cf);
    componentRef.instance.user = this.data[this._counter];
    this._counter++;
  }
}
