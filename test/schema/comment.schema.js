const Joi = require('frisby').Joi;

const commentSchema = {
    postId: Joi.number(),
    id: Joi.number(),
    name: Joi.string(),
    email: Joi.string().email(),
    body: Joi.string(),
}

module.exports = commentSchema;

