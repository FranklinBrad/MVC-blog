const User = require('./User');
const Post = require('./Post');
const Comment =require('./comment')



User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})


// 
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
})

User.hasMany(Comment, {
  foreignKey:'user_id',

})

Comment.belongsTo(User, {
  foreignKey:'user_id',
  onDelete:'SET NULL'
})

Post.hasMany(Comment, {
  foreignKey:'post_id',
  onDelete:'SET NULL'
})
Comment.belongsTo(Post, {
  foreignKey:'post_id'
})

// User.belongsToMany(Post, 
//   { through: {model: Post}, foreignKey: "name" }, 
//   );
// ;


module.exports = { User, Post, Comment}