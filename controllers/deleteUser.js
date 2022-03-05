const { usersCollection, ObjectId } = require("../mongoDb/mongoDb");

const deleteUser = async (req, res) => {
    const userId = req.params.id;
    const query = { _id: ObjectId(userId) };
    const result = await usersCollection.deleteOne(query);
    if (result.deletedCount === 1) {
        res.send(result);
    }
}

module.exports = deleteUser;