import { Request, Response } from 'express';
import { calculateBillValues } from '../services/billService';

export function calculateBill(req: Request, res: Response) {
    try {
        const data = calculateBillValues(req.body);
        res.status(200).json(data);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
}
