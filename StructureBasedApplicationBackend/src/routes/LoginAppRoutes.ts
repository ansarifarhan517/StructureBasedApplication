import { Router, Request, Response, NextFunction } from "express";
import { GetLabels, GetStructure } from "../controllers/LoginAppControllers";
// import { GetCountries, GetPincode, GetStates } from "../controllers/LookupAppControllers";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json("Hello From Lookup Route");
});


router.post('/framework/structure', GetStructure)
router.get('/framework/label', GetLabels)


// router.get('/transaction', GetTransaction)
// router.get('/transaction/:id', GetTransactionById)
export { router as LoginAppRoutes };
