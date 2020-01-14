const Post = require('../models/Post');


module.exports = {
async store(req, res) {
    const post = await Post.findById(req.params.id);
//    if( post.likes >= 1) {
//         post.likes -= 1;
//    } else {
//         post.likes += 1;
//    }

 post.likes += 1;

    await post.save();
    req.io.emit('like', post);
   return res.json(post)
 }
};