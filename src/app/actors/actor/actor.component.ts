import { Actor } from '../../interfaces/actor';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
})
export class ActorComponent implements OnInit {
  @Input() actor?: Actor;
  constructor() {}

  ngOnInit(): void {}
}
