import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'lib-btn',
  templateUrl: './demobtn.component.html',
  styleUrls: ['./demolib.component.css']
})
export class DemobtnComponent implements OnInit {

  @Input() label:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
