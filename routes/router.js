import express from 'express';
import ShipmentCreateController from "../controllers/shipment/shipment.create.controller.js";
import ShipmentGetController from "../controllers/shipment/shipment.get.controller.js";

const router = express.Router();


router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/shipment', ShipmentGetController );
router.post('/shipment', ShipmentCreateController);


export default router;
