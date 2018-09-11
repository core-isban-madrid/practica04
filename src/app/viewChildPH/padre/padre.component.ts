import { Component, OnInit, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  @ViewChild(HijoComponent) hijo: HijoComponent;
  textoPadre: string;


  constructor() { }

  ngOnInit() {
    //this.textoPadre = this.hijo.texto; devuelve undefined
    // console.log(this.textoPadre);
  }

  ngAfterViewInit() {
    this.textoPadre = this.hijo.texto;
    console.log(this.textoPadre);
  }



}
