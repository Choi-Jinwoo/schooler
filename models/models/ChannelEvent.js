module.exports = function (sequelize, DataTypes) {
    const ChannelEvent = sequelize.define("ChannelEvent", {
        id: { 
            type : DataTypes.INTEGER(45),
            field: 'id',
            allowNull : false,
            primaryKey : true,
            autoIncrement : true,
        },
        channel_id: {
            field: 'channel_id',
            type : DataTypes.INTEGER(45),
            allowNull : false
        },
        title: {
            field: 'title',
            type : DataTypes.STRING(45),
            allowNull : false,
        },
        start_date: { 
            field: 'start_date',
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            field: 'end_date',
            type : DataTypes.DATE,
            allowNull : false
        },
        author: {
            field: 'autor',
            type : DataTypes.STRING(45),
            allowNull : false
        }
    });

    ChannelEvent.associate = (models) => {
        models.ChannelEvent.belongsTo(models.Channel, {
            foreignKey : "channel_id"
        })
    }
    
    return ChannelEvent;
}