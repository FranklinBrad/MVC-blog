const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    comment_body: {
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
    modelName: "comment",
  }
);

module.exports = Comment;