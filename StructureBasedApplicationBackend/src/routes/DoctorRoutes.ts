import { Router, Request, Response, NextFunction } from "express";
import { AddDoctor } from "../controllers";
// import { CreateVendor, GetVendors, GetVendorById, GetTransaction, GetTransactionById } from "../controllers";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json("Hello From Doctor Route");
});


router.post('/doctor', AddDoctor)
// router.get('/vendors', GetVendors);
// router.get('/vendors/:id', GetVendorById);


// router.get('/transaction', GetTransaction)
// router.get('/transaction/:id', GetTransactionById)
export { router as DoctorRoutes };
