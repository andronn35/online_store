const {Basket, Device} = require("../models/models");
const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");

class BasketController {
  async getOne(req, res) {
    const { id } = req.params;
    const basket = await Basket.findOne({ where: { id } });
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.SECRET_KEY);
    return res.json(basket);
  }
  async addDevice(req, res, next) {
    try {
      const { id } = req.params;
      const { deviceId } = req.body;
      const token = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(token, process.env.SECRET_KEY);
      const device = await Device.findOne({ where: { id: deviceId } });
      const basket = await Basket.findOne({ where: { id } });
      basket.basketDevicesList.push(device);

      await Basket.update(
        { basketDevicesList: basket.basketDevicesList },
        { where: { id } }
      );

      return res.json(basket);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BasketController();
