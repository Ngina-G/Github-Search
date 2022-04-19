import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  username: string = '';
  @Output() newSearch: EventEmitter<any> = new EventEmitter();
  showProfileModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(username: string): void {
    if (username.length > 1) {
      username = username.replace(/\s/g, '').trim().toLocaleLowerCase();
      this.newSearch.emit(username);
      this.username = '';
    }
  }

}
