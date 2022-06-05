module.exports = (sequelize, Sequelize) => {

    const Video = sequelize.define("video", {
        videoID: {
            type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
        },
        videoName: {
            type: Sequelize.STRING,
        },
        active: {
                  type: Sequelize.STRING,
                },
    })

    return Video

}