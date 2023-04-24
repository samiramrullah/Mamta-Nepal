const express = require('express')
const router = express.Router();
const checkAuth = require('../../../middleware/check-auth')
const postScheme = require('../../../models/Post/post')
const userSchema=require('../../../models/user')

router.post('/', checkAuth, async (req, res, next) => {
    try {
        const userId = req.userData.userId;
        const { content, image } = req.body;
        if (!content || !image) return res.status(400).json({ message: 'Invalid Data' });
        const post = new postScheme({
            author: userId,
            content: content,
            image: image
        })
        await post.save()
        // Add the post ID to the user's posts array
        const user = await userSchema.findById(userId);
        user.posts.push(post._id);
        await user.save();
        res.status(201).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})
module.exports = router;