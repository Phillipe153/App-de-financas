module.exports = (sequelize, DataTypes) => {
  const receita = sequelize.define('receita', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fonte: DataTypes.STRING,
    valor: DataTypes.INTEGER,
  }, {
    timestamps: true,
    // createdAt: 'Criado_em',
    // updatedAt: 'Modificado_em',
    tableName: 'receita',
    underscored: false,
  });



    return receita;
  };
