import {Component, OnInit} from '@angular/core';
import {firebase} from 'firebaseui-angular';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authenticated-menu',
  templateUrl: './authenticated-menu.component.html',
  styleUrls: ['./authenticated-menu.component.css']
})
export class AuthenticatedMenuComponent implements OnInit {
  open = false;
  firebaseUser: firebase.User = null;


  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.authService.getFirebaseUser().subscribe(
      (firebaseUser) => {
        this.firebaseUser = firebaseUser;
      }
    );
  }

  onLogout() {
    this.authService.logout().then(() => {
    });
  }

}
