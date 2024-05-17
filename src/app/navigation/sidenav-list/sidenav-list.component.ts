import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.css'
})
export class SidenavListComponent {
  @Output() sidenavToggle = new EventEmitter();

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }
}
