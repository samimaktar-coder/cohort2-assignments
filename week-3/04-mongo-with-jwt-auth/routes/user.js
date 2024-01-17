const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({ username, password }).then(() => {
        res.json({ msg: 'User created successfully.' });
    });

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({ username, password });

    if (user) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({ token });
    } else {
        res.json({ msg: "User doesn't exists." });
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({ courses });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;
    User.updateOne({ username }, {
        $push: {
            purchasedCourses: courseId
        }
    }).then(() => {
        res.json({ msg: 'Course purchased successfully.' });
    });

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({ username: req.username });

    const courses = await Course.find({
        _id: {
            $in: user.purchasedCourses
        }
    });

    res.json({ courses });
});

module.exports = router;