export interface BillInput {
    amount: number;
    dueDate: string;
    paymentDate: string;
    installments?: number;
}
