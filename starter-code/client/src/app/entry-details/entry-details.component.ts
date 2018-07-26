import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from '../services/journal.service';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {

  // whichEntry: any;

  theActualEntry: any;

  constructor(private theRoute: ActivatedRoute, 
    private myService: JournalService) { }

    ngOnInit() {
      this.theRoute.params
        .subscribe((params) => {
          this.myService.getOneEntry(params['id'])
          .subscribe((theEntryFromService)=>{

            this.theActualEntry = theEntryFromService
            console.log(this.theActualEntry)
          })   
        });
    }
  
  }
