import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JournalService {

newEntry:any = {
  title: String,
  content: String
}

  constructor(private http: Http) { }

  getEntries() {

    return this.http.get('http://localhost:3000/api/journal-entries')
    .map((res)=> res.json());

  }

  addEntry(newEntry) {
    return this.http.post('http://localhost:3000/api/journal-entries', newEntry)
    .map((res)=> res.json());

  }

  getOneEntry(theIdOfTheEntry) {

    return this.http.get('http://localhost:3000/api/journal-entries/'+theIdOfTheEntry)
    .map((res)=> res.json());

  }
}
