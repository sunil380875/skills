const schoolModel = require("../model/school.model");

class SchoolController {
    async create(req, res) {
        try {
            const schoolData = await schoolModel.create(req.body);

            res.json({
                status: 201,
                data: schoolData
            })
        } catch (error) {
            res.json({ status: 500, message: "Something Went Wrong" })
        }
    }

    async updateAddressByID(req, res) {
        try {
            const { schoolId, addressId } = req.query;
            const { place } = req.body

            const id = schoolId;
            const params = {
                $set: {
                    "address.$[el].place": place
                }
            }

            const options = {
                new: true,
                arrayFilters: [{ "el._id": addressId }]
            }
            const data = await schoolModel.findByIdAndUpdate(
                id,
                params,
                options
            );
            console.log(data);

            res.json({
                status: 200,
                data: data
            })
        } catch (error) {
            console.log(error)
            res.json({ status: 500, message: "Something Went Wrong" })

        }


    }
    async updateAddress(req, res) {
        try {

            const { place, state, country } = req.body;
            const { addressId, schoolId } = req.query;
            const id = schoolId;
            const params = {
                $set: {
                    "address.$[el].state": state,
                    "address.$[el].country": country,
                    "address.$[el].place": place
                }
            }
            const options = {
                new: true,
                arrayFilters: [{ "el._id": addressId }]
            }
            const data = await schoolModel.findByIdAndUpdate(id, params, options);

            res.json({
                status: 200,
                message: "Success",
                data
            })
        } catch (error) {
            res.json({ status: 500, message: error.message })
        }
    }
    async pushUpdate(req, res) {
        try {
            const {schoolId } = req?.query;
            const { place, state, country } = req.body;
            const id = schoolId;
            const params = {
                $push: {
                    address: {
                        place,
                        state,
                        country
                    }
                }
            }
            const options = {
                new:true
            }
            console.log(JSON.stringify(id,params,options))

            const data = await schoolModel.findByIdAndUpdate(id, params, options)

            res.json({
                status: 200,
                message: "Success",
                data: data,

            })
        } catch (error) {
            res.json({ status: 500, message: error.message })
        }
    }
}

module.exports = new SchoolController();