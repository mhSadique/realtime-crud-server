const express = require('express');
const router = express.Router();
const createNewUser = require('../controllers/createNewUser');
const deleteUser = require('../controllers/deleteUser');
const getUsers = require('../controllers/getUsers');
const updateUser = require('../controllers/updateUser');

// return all users
router.get('/', getUsers);

// create new user
router.post('/', createNewUser);

// update existing user
router.put('/:id', updateUser);

// delete user
router.delete('/:id', deleteUser);

module.exports = router;