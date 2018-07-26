import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journal.service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  journal: any;
  constructor(private journals: JournalService) { }

  ngOnInit() {}

  getEntries() {
    this.journals.getEntries()
    .subscribe((journal)=> this.journal = journal)
  }

}
