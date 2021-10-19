module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("post", {
    post_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    post_title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    post_content: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    post_file: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    post_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    post_author: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
  });

  return Post;
};
