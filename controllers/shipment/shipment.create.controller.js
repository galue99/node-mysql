import db from "../../database.js";

const ShipmentCreateController = async (req, res) => {
  try {

    const {loadId, patente, truckerId} = req.body;

    if (!loadId || !patente || !truckerId) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    const load = await db.Load.findByPk(loadId);

    if (!load) {
      return res.status(400).json({ error: 'Load not found' });
    }

    const trucker = await db.User.findByPk(truckerId);
    if (!trucker) {
      return res.status(400).json({ error: 'Trucker not found' });
    }

    const truck = await db.Truck.findOne({ where: { plate: patente } });
    if (!truck) {
      return res.status(400).json({ error: 'Truck with the provided plate not found' });
    }

    const newShipment = await db.Shipment.create({
      load_id: load.dataValues.id,
      truck_id: truck.dataValues.id,
      trucker_id: trucker.dataValues.id,
      status: 'pending'
    });

    res.status(201).json(newShipment);

  } catch (error) {
    console.error('Error while creating the shipment:', error);
    res.status(500).json({error: 'Error while creating the shipment'});
  }
}

export default ShipmentCreateController;

