import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Project';
  showMenu: boolean = false;
  darkModeActive:boolean=false;


  modeToggleSwitch()
  {
    this.darkModeActive= !this.darkModeActive;
  }
  toggleMenu() {
    this.showMenu = !this.showMenu;
 }

}
