const Event = require('../../modules/event')

module.exports = function (router) {
    router.get('/event', function (req, res) {
        Event.find().exec()
            .then(docs => res.status(200)
                .json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding event',
                    error: err
                }))
    })
    router.get('/event/:id', function (req, res) {
        console.log(req.params.id)

        Event.findById(req.params.id).exec()
            .then(docs => res.status(200)
                .json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding event',
                    error: err
                }))
    })




    router.post('/event', function (req, res) {
        let event = new Event(req.body)
        console.log(req.body)
        Event.save(function (err, event) {
            if (err) return console.log(err)
            res.status(200).json(user)
        })
    })



}
