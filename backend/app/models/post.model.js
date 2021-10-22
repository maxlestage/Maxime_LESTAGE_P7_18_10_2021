module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('post', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        file: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    });

    return Post;
};
// author: {
//   type: DataTypes.INTEGER,
//   allowNull: false,
//   defaultValue: false,
// },
