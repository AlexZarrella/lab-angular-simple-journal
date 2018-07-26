import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {



  constructor(private journals: JournalService) { }

  ngOnInit() {

  }
  myEntry:any = {};

  addEntry(){
    this.journals.addEntry(this.myEntry)
    .subscribe((journal)=> {

    })
  

}}
