const m	= require('mongoose');

m.Promise = global.Promise;

// DB connection
const conn = m.createConnection('mongodb+srv://dbUser:dbUserPassword@cluster0-mully.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });

// User model
const UserSchema = new m.Schema({
        "login": {
            "type": "string"
        },
        "password": {
            "type": "string"
        }
    }, {"collection": "users"}
);

//Post model
const PostSchema = new m.Schema({
        "title": {
            "type": "string"
        },
        "categories": {
            "type": "string"
        },
        "content": {
            "type": "string"
        }
    }, {"collection": "posts"}
);


const User = conn.model( 'User', UserSchema );
const Post = conn.model( 'Post', PostSchema );

module.exports.User = User;
module.exports.Post = Post;