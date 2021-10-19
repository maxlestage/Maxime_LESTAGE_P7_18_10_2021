module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comment", {
    comment_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    comment_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    comment_author: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Comment;
};
