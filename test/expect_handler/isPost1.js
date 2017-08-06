var frisby = require('frisby');

frisby.addExpectHandler('isPost1', (response) => {
    let json = response._body;

    expect(json.id).toBe(1);
    expect(json.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
});