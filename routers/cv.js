const router = require("express").Router();
const CV = require('../models/CV')

router.get('/', async(req, res) => {
    await CV.find({}).then(data => {
        res.json({})
    })
});

//get one cv by user id
router.get('/:userId', async(req, res) => {
    try {
        let userId = req.params.userId;
        await CV.findOne({ "userId": userId }).then(data => {
            return res.json(data)
        })
    } catch (error) {
        res.send(error);
    }
})


//update the cv
router.put(('/update/:userId'), async(req, res) => {
    let docToUpdate = req.params.userId;
    CV.updateOne({ userId: docToUpdate }, {
        $set: {
            userId: docToUpdate,
            fName: req.body.fName,
            lName: req.body.lName,
            phone: req.body.phone,
            address: req.body.address,
            email: req.body.email,
            linkedIn: req.body.linkedIn,
            socialMedia: req.body.socialMedia,
            objective: req.body.objective,
            experiences: req.body.experiences,
            educations: req.body.educations,
            skills: req.body.skills,
            languges: req.body.languges,
            certifications: req.body.certifications,
        },
    }, (error, data) => {
        if (error) {
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

//delete one cv by id
router.delete('/delete/:userId', (req, res) => {
    try {
        let docToDeleteId = req.params.userId;
        CV.deleteOne({ userId: docToDeleteId }, (err) => {
            if (err)
                console.log("An error occured!")
        });
        return res('Success Delete')
    } catch (error) {
        console.log("An error occured!")
        res.send(error);
    }
});

//save cv route
router.post('/add/:id', async(req, res) => {
    let id = req.params.id;
    let newCV = CV({
        userId: id,
        fName: req.body.fName,
        lName: req.body.lName,
        phone: req.body.phone,
        address: req.body.address,
        email: req.body.email,
        linkedIn: req.body.linkedIn,
        socialMedia: req.body.socialMedia,
        objective: req.body.objective,
        experiences: req.body.experiences,
        educations: req.body.educations,
        skills: req.body.skills,
        languges: req.body.languges,
        certifications: req.body.certifications,
    }).save().then(data => {
        console.log(data)
        return res.json(data)
    })

})

module.exports = router;