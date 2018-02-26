var rl = require('readline');
module.exports = function(question) {
    var rl = require('readline');
    var r = rl.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    return new Promise((resolve, error) => {
        r.question(question + '\n', answer => {
            r.close();
            resolve(answer);
        });
    })
};
