const { Model, DataTypes } = require('sequelize');

class Listas extends Model{
    static init(connection){
        super.init({
Status: DataType.Boolean,
lista: DataType.string,
        }, {
            sequelize: connection
        })
    }
}
module.exports = Listas