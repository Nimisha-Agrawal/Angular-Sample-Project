import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
