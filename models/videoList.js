module.exports = (sequelize,Sequelize) => {

    const videoList = sequelize.define("VideoList", {
        videoListID: {
            type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
        },
        videoName: {
            type: Sequelize.STRING
        },
        link: {
            type: Sequelize.STRING,
        }
        
    })

    return videoList

}