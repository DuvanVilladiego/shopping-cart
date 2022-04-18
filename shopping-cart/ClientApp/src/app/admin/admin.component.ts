import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {

  getLocation() {
    return window.location.href;
  }

  redirectToListItems() {
    window.location.href = this.getLocation() + '/list-full-item-data';
  }
}
