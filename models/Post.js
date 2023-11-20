const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model {}

Post.init(
  {
    post_title: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true

      },
      post_body: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    
          },
    user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: "User",
            key: "id",
            unique: false
          },
      },

  },

  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: 'Post'
  }
);

module.exports = Post;