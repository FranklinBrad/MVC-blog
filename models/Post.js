const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    post_body: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
   
  },

  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: "Post",
  }
);

module.exports = Post;
