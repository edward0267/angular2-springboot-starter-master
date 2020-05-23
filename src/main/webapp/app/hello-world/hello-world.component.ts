import { Component, OnInit } from '@angular/core';
import {HelloWorldService} from "./hello-world.service";


@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  providers: [HelloWorldService]

})
export class HelloWorldComponent implements OnInit {

private testString : string;
  constructor(private service:HelloWorldService) {
  }

  ngOnInit() {
 this.service.helloWorldGet().subscribe(testString => this.testString = testString);
  }


}
