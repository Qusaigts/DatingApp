import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  model: any = {}; //object of the data binding from form Data
  //loggedIn = false; //to store loggedIn Status of the user, this line removed in video 58 to unsubscribe.
  //CurrentUser$ : Observable<User | null> = of(null); //this line added in video 58, this removed because we can use accountService directly in template

  constructor(public accountService: AccountService){}

  ngOnInit(): void {

    //this.getCurrentUser(); //removed in video 58 to unsubscribe.
    //this.CurrentUser$ = this.accountService.currentUser$; //this removed because we can use accountService directly in template
  }

  /*getCurrentUser() {
    this.accountService.currentUser$.subscribe({
      next: user => this.loggedIn = !!user,
      error: error => console.log(error)
    })
  }*/

  login()
  {
    this.accountService.login(this.model).subscribe(
      {
        next: response => {
          console.log(response);
        },
        error: error => console.log(error)
      }
    );
  }

  logout()
  {
    this.accountService.logout();
  }

}
