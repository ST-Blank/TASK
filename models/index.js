const { Sequelize} = require('sequelize');

const sequelize = require('../server/database/connection');
const videoList = require('./videoList.js');
const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Video = require("./video.js")(sequelize, Sequelize);
db.VideoList = require("./videoList.js")(sequelize, Sequelize);
db.Video.hasMany(db.VideoList, { foreignKey: 'videoID'});
db.VideoList.belongsTo(db.Video, {
    foreignKey: 'videoID',
    onDelete: 'CASCADE',
});
module.exports = db;