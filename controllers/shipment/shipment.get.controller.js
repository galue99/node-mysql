import db from "../../database.js";

const Shipment = db.Shipment;
const Load = db.Load;
const Truck = db.Truck;
const User = db.User;
const Product = db.Product;

const ShipmentGetController = async (req, res) => {
	try {
		const options = {};

		options.include = [{
			model: Truck,
			as: 'truck'
		},
    {
      model: Load,
      as: 'load',
      include: { // Nest the Product inside Load
        model: Product,
        as: 'product'
      }
    },
		{
			model: User,
      as: 'trucker'
		}];

		const shipments = await Shipment.findAll(options);

		res.json(shipments);
	} catch (error) {
		console.error('Error while retrieving the shipments:', error);
		res.status(500).json({
			error: 'Error while retrieving the shipments'
		});
	}
}

export default ShipmentGetController;
