import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {Router} from '@angular/router';
import {reservationDuration, reservationStart} from '@app/mokcs/tables';

@Component({
  selector: 'app-page-client-reservation',
  templateUrl: './page-client-reservation.component.html',
  styleUrls: ['./page-client-reservation.component.sass']
})
export class PageClientReservationComponent implements OnInit, AfterViewInit {
  form: FormGroup;

  timeOptions = reservationStart;
  timeDuration = reservationDuration;

  constructor(private _fb: FormBuilder,
              private _router: Router) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      table: [],
      guests: [5, [Validators.required]],
      date: [moment(), Validators.required],
      time: [null, [Validators.required]],
      wishes: []
    });
  }

  submit(e: Event) {
    e.preventDefault();

    if (this.form.invalid) {
      return;
    }

    this._router.navigateByUrl('/contacts');
  }

  ngAfterViewInit() {
  }

}
