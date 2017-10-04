const frisby = require('frisby');
const Joi = frisby.Joi;
const postSchema = require('./schema/post.schema');
const commentSchema = require('./schema/comment.schema');

describe('Posts', () => {

    it('Should return all posts', (done) => {
        frisby.get('http://jsonplaceholder.typicode.com/posts').expect('status', 401)
        .expect('jsonTypes', '*', postSchema)
        .done(done);
    });

    it('Should return all posts 233', (done) => {
        frisby.get('http://jsonplaceholder.typicode.com/posts').expect('status', 500)
        .expect('jsonTypes', '*', postSchema)
        .done(done);
    });

    describe('First Post', () => {
        it('Should Have comments', (done) => {
            frisby.get('http://jsonplaceholder.typicode.com/posts').then((res) => {
                let postId = res.json[0].id;

                return frisby.get('http://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
                .expect('status', 200)
                .expect('json', '*', {
                    postId: postId
                })
                .expect('jsonTypes', '*', commentSchema);
            }).done(done);
        });

        it('Should return all posts 4', (done) => {
            frisby.get('http://jsonplaceholder.typicode.com/posts').expect('status', 200)
            .done(done);
        });

        it('Should return all posts 5', (done) => {
            frisby.get('http://jsonplaceholder.typicode.com/posts').expect('status', 999)
            .done(done);
        });
    });
});