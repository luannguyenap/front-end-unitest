import { describe, it, expect, vi, beforeEach } from 'vitest';
import { PaymentService } from '../../services/payment.service';
import { Order } from '../../models/order.model';
import { PaymentMethod } from '../../models/payment.model';

describe('PaymentService', () => {
  let paymentService: PaymentService;

  beforeEach(() => {
    paymentService = new PaymentService();
    vi.restoreAllMocks();
  });

  // 1. Tests for buildPaymentMethod
  describe('buildPaymentMethod', () => {
    it('should include all payment methods for totalPrice <= 300,000', () => {
      const result = paymentService.buildPaymentMethod(200000);
      expect(result).toBe('credit,paypay,aupay');
    });

    it('should exclude AUPAY for totalPrice > 300,000', () => {
      const result = paymentService.buildPaymentMethod(400000);
      expect(result).toBe('credit,paypay');
    });

    it('should exclude PAYPAY and AUPAY for totalPrice > 500,000', () => {
      const result = paymentService.buildPaymentMethod(600000);
      expect(result).toBe('credit');
    });

    it('should return only CREDIT if PAYPAY and AUPAY are removed', () => {
      const result = paymentService.buildPaymentMethod(700000);
      expect(result).toBe('credit');
    });
  });

  // 2. Tests for payViaLink
  describe('payViaLink', () => {
    it('should open the correct payment URL in a new tab', () => {
      // Mock the window object
      global.window = Object.create({});
      const openSpy = vi.fn();
      global.window.open = openSpy;
  
      const order: Order = { 
        id: 'order123', 
        items: [], 
        totalPrice: 1000, 
        paymentMethod: PaymentMethod.CREDIT
      };
  
      paymentService.payViaLink(order);
  
      expect(openSpy).toHaveBeenCalledWith(
        'https://payment.example.com/pay?orderId=order123',
        '_blank'
      );
    });
  });
});