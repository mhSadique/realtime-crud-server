const { usersCollection } = require("../mongoDb/mongoDb");

const getUsers = async (req, res) => {
    const cursor = usersCollection.find({});
    const users = await cursor.toArray();
    res.send(users);
};

module.exports = getUsers;