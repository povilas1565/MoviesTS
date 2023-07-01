import { Component, Input, OnInit } from '@angular/core';
import { Actor } from '../interfaces/actor';
@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
})
export class ActorsComponent implements OnInit {
  @Input() actors?: Actor[] = [];

  constructor() {}

  ngOnInit(): void {}
}
