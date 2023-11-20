const User = require('./User');
const Post = require('./Post');



User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})


// 
Post.belongsTo(User, {
  foreignKey: 'Post_id',
  onDelete: 'SET NULL',
})


// User.belongsToMany(Post, 
//   { through: {model: Post}, foreignKey: "name" }, 
//   );
// ;


module.exports = { User, Post}