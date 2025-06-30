import { differenceInDays, parseISO } from 'date-fns';
import { BillInput } from '../types/BillInput.types';

export function calculateBillValues(input: BillInput) {
    const { amount, dueDate, paymentDate } = input;

    const due = parseISO(dueDate);
    const payment = parseISO(paymentDate);

    const daysOverdue = Math.max(differenceInDays(payment, due), 0);

    const fine = daysOverdue > 0 ? amount * 0.02 : 0;
    const interest = daysOverdue > 0 ? amount * 0.00033 * daysOverdue : 0;
    const updatedAmount = amount + fine + interest;

    return {
        originalAmount: amount,
        daysOverdue,
        fine: parseFloat(fine.toFixed(2)),
        interest: parseFloat(interest.toFixed(2)),
        updatedAmount: parseFloat(updatedAmount.toFixed(2)),
    };
}
