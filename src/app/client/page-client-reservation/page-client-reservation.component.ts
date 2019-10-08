import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-client-reservation',
  templateUrl: './page-client-reservation.component.html',
  styleUrls: ['./page-client-reservation.component.sass']
})
export class PageClientReservationComponent implements OnInit, AfterViewInit {
  form: FormGroup;

  timeOptions = [
    {
      value: 1,
      title: '11:00'
    },
    {
      value: 1,
      title: '12:00'
    },
    {
      value: 1,
      title: '13:00'
    },
    {
      value: 1,
      title: '14:00'
    },
    {
      value: 1,
      title: '15:00'
    },
    {
      value: 1,
      title: '16:00'
    },
    {
      value: 1,
      title: '17:00'
    },
    {
      value: 1,
      title: '18:00'
    }
  ];

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
