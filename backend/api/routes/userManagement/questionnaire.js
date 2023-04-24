const express = require("express");
const router = express.Router();
const userSchema = require("../../../models/user");
const checkAuth = require("../../../middleware/check-auth");

router.post("/", checkAuth, async (req, res, next) => {
    try {

        const userId = req.userData.userId;
        const { deliveryDate, DOB, weight, height, NoOfChildren, gender,userType } = req.body;
        // find the user in the database
        const user = await userSchema.findById(userId);
        user.DOB = DOB;
        user.deliveryDate = deliveryDate;
        user.weight = weight;
        user.height = height;
        user.NoOfChildren = NoOfChildren;
        user.gender = gender,
        user.userType=userType
        await user.save();
        res.status(200).json({ message: 'User updated successfully' })
    } catch (error) {
        // pass the error to the error handling middleware
        next(error);
    }
});

module.exports = router;
