import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrderType} from '../../../../../../core/model/order.model';
import {CreateOrderUser} from '../../../../../../core/service/order.service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss']
})
export class DeliveryFormComponent implements OnInit {
  @Output() submitForm: EventEmitter<{ user: CreateOrderUser, note: string, type: OrderType }> = new EventEmitter<{ user: CreateOrderUser; note: string, type: OrderType }>();

  form: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      // contactInfo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9\\-\\+]{9,15}$')]],
      firstName: [''],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      note: [''],
      acceptance: [false, Validators.requiredTrue]
    }, {
      updateOn: 'submit'
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitForm.emit({
        type: OrderType.DELIVERY,
        user: {
          firstName: this.form.get('firstName').value,
          lastName: this.form.get('lastName').value,
          email: this.form.get('email').value,
          telephone: this.form.get('phone').value,
          address: this.form.get('address').value,
        },
        note: this.form.get('note').value
      });
    }
  }

  resetValidation(field: string): void {
    this.form.get(field)?.setErrors(null);
  }
}
