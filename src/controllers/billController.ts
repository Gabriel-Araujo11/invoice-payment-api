import { Request, Response } from 'express';
import { calculateBillValues } from '../services/billService';
import { billSchema } from '../schema/billSchema';

export const calculateBill = (req: Request, res: Response): void => {
    try {
        const validated = billSchema.parse(req.body);
        const data = calculateBillValues(validated);
        res.status(200).json(data);
    } catch (error: any) {
        if (error.name === 'ZodError') {
            res.status(400).json({ error: error.errors });
            return;
        }
        res.status(500).json({ error: 'Internal server error' });
    }
};
