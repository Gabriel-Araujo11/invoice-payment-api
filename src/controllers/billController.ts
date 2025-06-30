import { Request, Response } from 'express';
import { calculateBillValues } from '../services/billService';
import { billSchema } from '../schema/billSchema';

export function calculateBill(req: Request, res: Response) {
    try {
        const validated = billSchema.parse(req.body);
        const data = calculateBillValues(validated);
        return res.status(200).json(data);
    } catch (error: any) {
        if (error.name === 'ZodError') {
            return res.status(400).json({ error: error.errors });
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
}
