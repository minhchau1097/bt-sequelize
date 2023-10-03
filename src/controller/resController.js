import sequelize from "../models/connect.js";
import initModels from './../models/init-models.js';
let model = initModels(sequelize);


const rateRes = async (req, res) => {
    const { user_id, res_id, amount } = req.body
    let date_rate = new Date();
    let checkRate = await model.rate_res.findAll({
        where: {
            user_id,
            res_id
        }
    })
    if (checkRate.length === 0) {
        await model.rate_res.create({ user_id, res_id, date_rate,amount })
        res.send('rate thành công')
    } else {

        res.send('rate roi')
        return
    }

}
const listRateUser = async (req,res) => {
    const { user_id } = req.body;
    let list = await model.rate_res.findAll({
        where:{
            user_id
        },
        includes: ['users']
    })
    res.send(list)
}
const listRateRes = async (req,res) => {
    const { res_id } = req.body;
    let list = await model.rate_res.findAll({
        where:{
            res_id
        },
        includes: ['restaurant']
    })
    res.send(list)
}

const likeRes = async (req, res) => {
    const { user_id, res_id } = req.body
    let date_like = new Date();
    let checkLike = await model.like_res.findAll({
        where: {
            user_id,
            res_id
        }
    })
    if (checkLike.length === 0) {
        await model.like_res.create({ user_id, res_id, date_like })
        res.send('like thành công')
    } else {

        res.send('like roi')
        return
    }

}


const disLikeRes = async (req, res) => {
    const { user_id, res_id } = req.body
    let userId = await model.like_res.findOne({
        where: {
            user_id,
        }
    })
    if (userId) {

        let resId = await model.like_res.findOne({
            where: {
                res_id,
            }
        })
        if (resId) {
            await model.like_res.destroy({
                where: {
                    like_id: resId.like_id
                }
            })
            res.send('dis like thành công')
        }
    } else {
        res.send('dis like rồi')
        return
    }
}


const listLikeRes = async (req,res) => {
    const { res_id } = req.body;
    let list = await model.like_res.findAll({
        where:{
            res_id
        },
        includes: ['restaurant']
    })
    res.send(list)
}
const listLikeUser = async (req,res) => {
    const { user_id } = req.body;
    let list = await model.like_res.findAll({
        where:{
            user_id
        },
        includes: ['users']
    })
    res.send(list)
}

export { likeRes, disLikeRes, listLikeRes, listLikeUser ,rateRes, listRateRes,listRateUser}