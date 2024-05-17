import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
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
    this.authService.logout();
    //this.isAuth=false;
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }


}
