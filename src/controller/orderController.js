import sequelize from "../models/connect.js";
import initModels from './../models/init-models.js';
let model = initModels(sequelize);

const order = async (req, res) => {
    const { user_id, food_id, amount, code, arr_sub_id } = req.body;
    let checkOrder = await model.orders.findAll({
        where: {
            user_id,
            food_id
        }
    })
    if (checkOrder.length === 0) {
        await model.orders.create({ user_id, food_id, amount, code, arr_sub_id })
        res.send('order thành công')
    } else {

        res.send('order roi')
    }

}
export { order }