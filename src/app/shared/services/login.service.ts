import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedIn = false;
  public information;
  public registeredUsers = [{
    email: 'test@test.nl',
    name: 'admin'
  }];

  public logIn(userInfo) {
    const foundUser = this.registeredUsers.find((user) => userInfo.email === user.email);
    if (foundUser) {
      this.loggedIn = true;
      this.information = foundUser;
      return true;
    }

    return false;

  }

  public logOut() {
    this.loggedIn = false;
  }

  public register(userInfo) {
    this.registeredUsers.push(userInfo);
  }
}
