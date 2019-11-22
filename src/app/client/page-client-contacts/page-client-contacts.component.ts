import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IUiGroupSelectorItem} from "@app/ui/ui-group-selector/meta";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-client-contacts',
  templateUrl: './page-client-contacts.component.html',
  styleUrls: ['./page-client-contacts.component.sass']
})
export class PageClientContactsComponent implements OnInit {
  form: FormGroup;
  confirmOptions: IUiGroupSelectorItem[] = [
    {
      title: 'Отправить SMS',
      value: 'SMS'
    }/*,
    {
      title: 'Связаться с диспетчером',
      value: 'CALL'
    }*/
  ];

  constructor(private _fb: FormBuilder,
              private _router: Router) {
  }

  ngOnInit() {
    this.form = this._fb.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      confirmType: [this.confirmOptions[0]]
    });

    this.form.valueChanges.subscribe(console.log)
  }

  submit(e: Event) {
    e.preventDefault();
    if (this.form.invalid) return;

    this._router.navigateByUrl('/confirm');
  }

}
