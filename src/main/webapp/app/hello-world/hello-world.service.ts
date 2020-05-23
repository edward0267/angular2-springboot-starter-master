import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class HelloWorldService {

  private helloworld: string = "/helloworld";

  constructor(private http: Http) { }

  helloWorldGet(): Observable<string> {
    return this.http.get(this.helloworld).map((resp: Response) => resp.text());

  }


}
