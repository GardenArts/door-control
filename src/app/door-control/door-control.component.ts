import { Component } from '@angular/core';

@Component({
  selector: 'app-door-control',
  templateUrl: './door-control.component.html',
  styleUrls: ['./door-control.component.scss']
})
export class DoorControlComponent {
  // Objekt für den Zustand jeder Tür (offen oder geschlossen)
  doors = {
    oben: false,
    unten: false,
    workspace: false
  };

  // Funktion zum Umschalten des Zustands der Tür
  toggleDoor(door: keyof typeof this.doors): void {
    // Zustand der Tür umschalten
    this.doors[door] = !this.doors[door];

    // Wenn die Tür geöffnet wird, soll sie sich nach 3 Sekunden automatisch schließen
    if (this.doors[door]) {
      setTimeout(() => {
        this.doors[door] = false;
      }, 3000); // 3000 Millisekunden = 3 Sekunden
    }
  }
}




/* import { Component } from '@angular/core';

@Component({
  selector: 'app-door-control',
  templateUrl: './door-control.component.html',
  styleUrls: ['./door-control.component.scss']
})
export class DoorControlComponent {

} */
