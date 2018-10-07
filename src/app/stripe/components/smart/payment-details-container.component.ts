import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { PaymentProviderService } from '../../payment-provider.service';
import { PaymentService } from './../../payment.service';

const style = {
  base: {
    iconColor: '#666ee8',
    color: '#31325f',
    fontWeight: 400,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '15px',
    '::placeholder': {
      color: '#aab7c4'
    },
    ':-webkit-autofill': {
      color: '#666ee8'
    }
  }
};

@Component({
  selector: 'app-payment-details-container',
  templateUrl: './payment-details-container.component.html',
  styleUrls: ['./payment-details-container.component.css']
})
export class PaymentDetailsContainerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cardElement')
  cardElement: ElementRef;

  @ViewChild('cardErrors')
  cardErrors: ElementRef;

  @ViewChild('submitButton')
  submitButton: ElementRef;

  @ViewChild('paymentForm')
  paymentForm: ElementRef;

  card: any;
  cardHandler = this.onCardChange.bind(this);
  formSubmissionHandler = this.onFormSubmit.bind(this);
  error: string;

  constructor(
    private cd: ChangeDetectorRef,
    private readonly paymentProviderService: PaymentProviderService,
    private readonly paymentService: PaymentService
  ) {}

  ngAfterViewInit() {
    this.card = this.paymentProviderService.elements.create('card', { style });
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
    (this.paymentForm.nativeElement as HTMLElement).addEventListener('submit', this.formSubmissionHandler);
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.paymentService.saveCard(this.card);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onCardChange({ error }) {
    const errors = this.cardErrors.nativeElement as HTMLElement;
    if (error) {
      errors.textContent = error.message;
      errors.classList.add('visible');
    } else {
      error = null;
      errors.classList.remove('visible');
    }

    this.submitButton.nativeElement.disabled = false;
    this.cd.detectChanges();
  }
}
