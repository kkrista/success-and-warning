import { Component, OnInit } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-alert',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.css']
})
export class InfoAlertComponent implements OnInit {
  faInfo = faInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
