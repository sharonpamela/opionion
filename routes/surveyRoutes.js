const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const survey = mongoose.model('surveys');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')
module.exports = app => {

    app.post('./api/surveys', requireLogin, requireCredits, (req, res) => {
        const { title, subject, body, recipients } =  req.body;

        const survey = new survey ({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email =>  { return {email: email.trim()}}),
            _user: req.user.id,
            dateSent: Date.now()
        });
        const mailer = new Mailer(survey, surveyTemplate(survey));
    });
};