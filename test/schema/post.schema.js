const Joi = require('frisby').Joi;

const postSchema = {
    userId: Joi.number(),
    id: Joi.number(),
    title: Joi.string(),
    body: Joi.string()
}

module.exports = postSchema;

