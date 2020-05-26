import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParams) => {
        if (queryParams && queryParams.returnUrl) {
          this.returnUrl = queryParams.returnUrl;
        } else {
          this.returnUrl = '/';
        }
      }
    );
  }

  successCallback() {
    this.router.navigate([this.returnUrl]);
  }
}
