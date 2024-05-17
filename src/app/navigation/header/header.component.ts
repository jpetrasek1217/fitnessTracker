import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(){}

  ngOnInit(){

  }
  onToggleSidenav(){
    this.sidenavToggle.emit()
  }
}
