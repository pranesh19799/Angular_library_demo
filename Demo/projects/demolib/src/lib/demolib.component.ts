import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'lib-demolib',
  templateUrl: './demolib.component.html',
  styleUrls: ['./demolib.component.css']
})
export class DemolibComponent implements OnInit {

  @Input() label:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
