import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {Router} from '@angular/router';
import {ReservationService} from '@app/_services/reservation/reservation.service';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {map, take} from 'rxjs/operators';
import {MomentHelperService} from '@app/_services/moment-helper/moment-helper.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {IRestaurantTable, RestaurantTableStatusEnum} from '@interfaces/restaurant-table.interface';

@Component({
  selector: 'app-page-client-reservation',
  templateUrl: './page-client-reservation.component.html',
  styleUrls: ['./page-client-reservation.component.sass']
})
export class PageClientReservationComponent implements OnInit, AfterViewInit, OnDestroy {
  form: FormGroup;
  daysLength = 14;
  timeOptions = [];
  days = [];
  queryDaysMonth = moment();

  tables$: Observable<IRestaurantTable[]> = this._reservationS.tables$
    .pipe(map((items: IRestaurantTable[]) => items.filter(item => item.status !== RestaurantTableStatusEnum.BLOCKED)));

  constructor(private _fb: FormBuilder,
              private _router: Router,
              private _momentHelper: MomentHelperService,
              private _reservationS: ReservationService) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      table: [{value: null, disabled: true}, [Validators.required]],
      guests: [5, [Validators.required]],
      date: [null, Validators.required],
      time: [null, [Validators.required]],
      wishes: []
    });

    this.getDays(true);

    this.form.controls.date.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(data =>
        this._reservationS
          .getReservationTime(moment(data).format('YYYY-MM-DD'))
          .pipe(take(1))
          .subscribe((time: any) => {
            this.timeOptions = time.items;
            this.getTables();
          })
      );

    this.form.controls
      .time
      .valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((e) => {
        this.form.controls.table[!e ? 'disable' : 'enable']();
        setTimeout(() => this.getTables(), 0);
      });

    this.form.controls
      .guests
      .valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((e) => {
        setTimeout(() => this.getTables(), 0);
      });
  }

  getTables() {
    let timecode = moment(this.form.value.date.value * 1000).format('YYYY-MM-DD');
    if (this.form.value.time) {
      timecode += 'T' + this.form.value.time.title + ':00';
    }
    this._reservationS.getReservationTables({timecode, num_guests: this.form.value.guests})
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  getDays(intial = true) {
    this._reservationS.getReservationDays(this.queryDaysMonth.format('YYYY-MM'))
      .pipe(
        take(1),
        untilDestroyed(this)
      )
      .subscribe(
        (days: any) => {
          this.days = [...this.days, ...this._momentHelper.cutFromToday(days.items, this.daysLength)];
          this.form.patchValue({date: this.days[0]});
          if (this.days.length < this.daysLength) {
            this.queryDaysMonth.add(1, 'months');
            this.getDays();
          }
        }
      );
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

  ngOnDestroy() {
  }
}
