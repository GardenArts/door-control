import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  history = [
    { token: 'adminToken', date: new Date().toLocaleString(), door: 'Obere Tür' },
    { token: 'userToken', date: new Date().toLocaleString(), door: 'Untere Tür' }
  ];
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back(); // Funktion zum Zurückkehren zur vorherigen Seite in der Historie
  }
}

/* import { Component, OnInit } from '@angular/core';

interface LoginHistory {
  token: string;
  date: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: LoginHistory[] = [];

  constructor() {}

  ngOnInit(): void {
    // Abrufen der Login-Historie aus localStorage
    const storedHistory = localStorage.getItem('loginHistory');
    if (storedHistory) {
      this.history = JSON.parse(storedHistory);
    }
  }
}

 */
/* import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

}
 */