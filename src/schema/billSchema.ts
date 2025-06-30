import { z } from 'zod';

export const billSchema = z.object({
    amount: z.number().positive("O valor deve ser maior que 0"),
    dueDate: z.string().refine(date => !isNaN(Date.parse(date)), {
        message: "Data de vencimento inválida",
    }),
    paymentDate: z.string().refine(date => !isNaN(Date.parse(date)), {
        message: "Data de pagamento inválida",
    }),
    installments: z
        .number()
        .int()
        .positive("As parcelas devem ser positivas")
        .optional(),
});

export type BillInput = z.infer<typeof billSchema>;
