import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-popup-table-settings',
  templateUrl: './popup-table-settings.component.html',
  styleUrls: ['./popup-table-settings.component.sass']
})
export class PopupTableSettingsComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [],
      count: [null, [Validators.required, Validators.pattern('\d')]],
      number: [],
      type: []
    });
  }

  onSubmit(e) {
    console.log(e);

    console.log(this.form.value);
  }

}
