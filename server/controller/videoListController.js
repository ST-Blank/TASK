const db = require("../../models");

const getVideoList=async (req, res) => {
    id=req.params.id
    try {
      const video = await db.Video.findAll({
        where: {
          videoID: id,
        }
      })
      if(video)
      {
    const result = await db.VideoList.findAll({
        where:{
            videoID:id,
        }
    });
      res.send(result);
      }
      
    } catch (err) {
      res.send(err);
    }
  }

  const postVideoList=async (req, res) => {
    id=req.params.id
    try {
      const video = await db.Video.findAll({
        where: {
          videoID: id,
        }
      })
      if(video){
          const data = req.body;
          data.videoID=id
      const result = await db.VideoList.create(data);
      res.send(result);
      }
    } catch (err) {
      res.send(err);
    }
  }

  module.exports={getVideoList,postVideoList}