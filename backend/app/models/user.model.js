module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    birthday: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profilePicture: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: false,
    },
    isEnable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  return User;
};
