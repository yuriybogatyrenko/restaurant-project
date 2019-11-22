import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {IRestaurantTable, RestaurantTableStatusEnum} from '@interfaces/restaurant-table.interface';
import {map, take} from 'rxjs/operators';
import * as moment from 'moment';
import {ReservationService} from '@app/_services/reservation/reservation.service';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {MomentHelperService} from '@app/_services/moment-helper/moment-helper.service';
import {reservationDuration} from '@app/mokcs/tables';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.sass']
})
export class BookFormComponent implements OnInit, OnDestroy {
  @Input() type: 'CREATE' | 'EDIT' = 'CREATE';

  form: FormGroup;
  daysLength = 14;
  timeOptions = [];
  days = [];
  queryDaysMonth = moment();

  reservationDuration = reservationDuration;

  tables$: Observable<IRestaurantTable[]> = this._reservationS.tables$
    .pipe(map((items: IRestaurantTable[]) => items.filter(item => item.status !== RestaurantTableStatusEnum.BLOCKED)));

  constructor(private fb: FormBuilder,
              private _reservationS: ReservationService,
              private _momentHelper: MomentHelperService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      date: [new Date(), [Validators.required]],
      guests: [5, [Validators.required, Validators.pattern(/d/)]],
      time: [null, [Validators.required]],
      table: [null, [Validators.required]],
      wishes: [],
      duration: [2]
    });

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

    this.getDays();
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

  getDays() {
    this._reservationS.getReservationDays(this.queryDaysMonth.format('YYYY-MM'))
      .pipe(
        take(1),
        untilDestroyed(this)
      )
      .subscribe(
        (days: any) => {
          this.days = this._momentHelper.cutFromToday([...this.days, ...days.items] as any, this.daysLength);
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
  }

  ngOnDestroy() {
  }

}
