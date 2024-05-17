import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.css'
})
export class SidenavListComponent {
  @Output() sidenavToggle = new EventEmitter();
  isAuth: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authSubscription = this.authService.authChange.subscribe(authStatus =>{
      this.isAuth = authStatus
    });
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }


  onLogout(){
    this.onToggleSidenav()
    this.authService.logout();
    this.isAuth=false;
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
