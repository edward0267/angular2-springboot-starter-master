import { Component, OnInit } from '@angular/core';
import {HelloHellService} from "./hello-hell.service";

@Component({
  selector: 'app-hello-hell',
  templateUrl: './hello-hell.component.html',
  styleUrls: ['./hello-hell.component.css'],
  providers: [HelloHellService]
})
export class HelloHellComponent implements OnInit {


  private testString : string;
  constructor(private service: HelloHellService) {
  }

  ngOnInit() {
    this.service.helloHellGet().subscribe(testString => this.testString = testString);
  }


}
