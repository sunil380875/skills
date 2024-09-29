const catModel = require("../model/cat.model");

class CatController {

    async create(req, res) {
        try {
            const cat = await catModel.create({
                name: "jerry",
                breed: "British"
            })

            res.json({
                status: 201, message: "success", data: cat
            })
        } catch (error) {
            res.json({ status: 500, message: error.message })
        }
    }
    async getIndian(req, res) {
        try {

            const cat = await catModel.find()

           
            res.json({
                status: 201, message: "success",data:cat
            })
        } catch (error) {
            res.json({ status: 500, message: error.message })

        }
    }
}


module.exports = new CatController()