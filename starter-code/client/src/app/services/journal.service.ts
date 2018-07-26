import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JournalService {


  constructor(private http: Http) { }

  getEntries() {

    return this.http.get('http://localhost:3000/api/journal-entries')
    .map((res)=> res.json());

  }

}
