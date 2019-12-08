import { Component, OnInit } from '@angular/core';
import { Portal } from '@angular/cdk/portal';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players = [
    {name: 'ali', status:'lanchar'},
  {name:'aasim', status :'portable'},
  {name:'hassan' ,status: 'portable'}


  ]

  constructor() { }

  ngOnInit() {
  }

}
