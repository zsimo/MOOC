var repoFactory = function () {

    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            if (this.taskRepo) {
                console.log('Retrieving from cache');
                return this.taskRepo;
            } else {
                this.taskRepo = require('./taskRepository')();
                // config -- 
                return this.taskRepo;
            }

        }
        if (repoType === 'user') {
            var userRepo = require('./userRepository')();
            return userRepo;
        }
        if (repoType === 'project') {
            var projectRepo = require('./projectRepository')();
            return projectRepo;
        }
    }
};
// As a special case, for the new operator only, JavaScript simplifies the grammar
// by allowing the parenthesis to be omitted if there are no arguments in the function call
// see: https://stackoverflow.com/questions/3034941/can-we-omit-parentheses-when-creating-an-object-using-the-new-operator
module.exports = new repoFactory;