const frisby = require('frisby');
const Joi = frisby.Joi;
const postSchema = require('./schema/post.schema');
const commentSchema = require('./schema/comment.schema');

describe('Posts', () => {
    var response = frisby.get('http://jsonplaceholder.typicode.com/posts');

    it('Should return all posts', (done) => {
            response.expect('status', 200)
            .expect('jsonTypes', '*', postSchema)
            .done(done);
    });

    describe('First Post', () => {
        it('Should Have comments', (done) => {
            response.then((res) => {
                    let postId = res.json[0].id;

                    return frisby.get('http://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
                        .expect('status', 200)
                        .expect('json', '*', {
                            postId: postId
                        })
                        .expect('jsonTypes', '*', commentSchema);
                }).done(done);
        });
    });
});