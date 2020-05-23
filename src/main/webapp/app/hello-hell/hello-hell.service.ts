import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class HelloHellService {

  private hellohell: string = "/hellohell";

  constructor(private http: Http) { }

  helloHellGet(): Observable<string> {
    return this.http.get(this.hellohell).map((resp: Response) => resp.text());

  }

}
