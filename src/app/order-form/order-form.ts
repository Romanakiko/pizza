import {Component, inject, OnDestroy, OnInit, signal} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {OrderService} from './order.service';
import {Subscription, tap} from 'rxjs';
import {Order} from './order';

@Component({
  selector: 'app-order-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './order-form.html',
  styleUrl: './order-form.scss'
})
export class OrderForm implements OnDestroy, OnInit {

  subscriptions: Subscription[] = [];
  orderService = inject(OrderService);
  confirmationMsg = signal<string | null>(null);

  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    if(this.orderForm.get('name')) {
      this.subscriptions.push(this.orderForm.get('name')?.valueChanges.pipe(tap(name => {
        if(name?.includes('.')) {
          this.orderForm.get('name')?.patchValue(name.replace('.', ''));
        }
      })).subscribe() ?? new Subscription());
    }
  }

  onSubmit() {
    let order: Order = {
      name: this.orderForm.get('name')?.value ?? '',
      address: this.orderForm.get('address')?.value ?? '',
      phone: this.orderForm.get('phone')?.value ?? '',
    }
    this.subscriptions.push(this.orderService.createOrder(order).pipe(
      tap({
        next: (newOrder) => {
          this.confirmationMsg.set(`Спасибо за заказ, ${newOrder.name}, ваш заказ уже в пути до адреса ${newOrder.address} !`);
        },
        error: (err) => {
          this.confirmationMsg.set('К сожалению не удалось составить заказ, пожалуйста попробуйте снова')
        }
      })).subscribe());
  }

  closeMsg(): void {
    this.confirmationMsg.set(null);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
