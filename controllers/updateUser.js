const { usersCollection, ObjectId } = require("../mongoDb/mongoDb");

const updateUser = async (req, res) => {
    const userId = req.params.id;
    const changedStatus = req.body;
    const filter = { _id: ObjectId(userId) };
    const updatedStatus = { $set: changedStatus };
    const result = await usersCollection.updateOne(filter, updatedStatus);
    res.json(result);
}

module.exports = updateUser;