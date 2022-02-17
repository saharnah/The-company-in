var express = require('express');
var router = express.Router();
const _ = require('lodash');
const getDomainData = require('../domain/getDomainData');

router.get('/', async (req, res) => {
    try {
        const domainData = await getDomainData(req.query.name);
        return res.send(domainData);
    } catch (error) {
        return res.status(500).send({ error})
    }
});

module.exports = router;
