import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  public courses = [];

  public signUp(course) {
    this.courses.push(course);
  }
}
