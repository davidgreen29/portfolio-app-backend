const express = require('express');

const router = express.Router();
const contactFormCopy = require('./contactModel')

router.post('/contact', (request, response)=>{
    const contactInfo = new contactFormCopy({
        fullname:request.body.fullname,
        email:request.body.email,
        message:request.body.message
    })
    contactInfo.save()
    .then(data => {
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })
});


module.exports=router;