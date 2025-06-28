import { BillInput } from "../types/BillInput.types";

export function calculateBillValues(input: BillInput) {
    return {
        originalAmount: input.amount,
        daysOverdue: 0,
        fine: 0,
        interest: 0,
        updatedAmount: input.amount,
    };
}
