const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({ username, password }).then(() => {
        res.json({ msg: 'User created successfully.' });
    });
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}).then(courses => {
        res.json({ courses: courses });
    });
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    User.updateOne({ username: req.headers.username }, {
        $push: {
            purchasedCourses: courseId
        }
    }).then(() => {
        res.json({ msg: 'Course purchased successfully.' });
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({ username: req.headers.username });

    const courses = await Course.find({
        _id: {
            $in: user.purchasedCourses
        }
    });

    res.json({ courses: courses });
});

module.exports = router;