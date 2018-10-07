import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { PaymentProviderService } from '../../payment-provider.service';

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

  constructor(private cd: ChangeDetectorRef, private readonly paymentProviderService: PaymentProviderService) {}

  ngAfterViewInit() {
    this.card = this.paymentProviderService.elements.create('card', { style });
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
    (this.paymentForm.nativeElement as HTMLElement).addEventListener('submit', this.formSubmissionHandler);
  }

  private onFormSubmit(event) {
    event.preventDefault();

    this.paymentProviderService.stripe.createToken(this.card).then(function(result) {
      if (result.error) {
        // Inform the user if there was an error.
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        // Send the token to your server.
        // stripeTokenHandler(result.token);
        debugger;
      }
    });
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

  async onSubmit(form: any) {
    const { token, error } = await this.paymentProviderService.stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // ...send the token to the your backend to process the charge
    }
  }
}
