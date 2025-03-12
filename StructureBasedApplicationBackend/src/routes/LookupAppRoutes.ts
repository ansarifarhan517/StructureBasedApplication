import { Router, Request, Response, NextFunction } from "express";
import { GetCountries, GetPincode, GetStates } from "../controllers";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json("Hello From Lookup Route");
});


// router.post('/lookup', AddDoctor)
router.get('/lookup/getCountries', GetCountries);
router.get('/lookup/pincode', GetPincode);
router.get('/lookup/getStates', GetStates);


// router.get('/transaction', GetTransaction)
// router.get('/transaction/:id', GetTransactionById)
export { router as LookupAppRoutes };
