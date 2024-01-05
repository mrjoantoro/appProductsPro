import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent  implements OnInit {
  @Input() label!: String;
  @Input() type!: String;
  @Input() placeholder!: String;
  @Input() icon!: String;
  
  constructor() { }

  ngOnInit() {

  }

}
