const db = require("../../models");

const postVideo=async (req, res) => {
    const data = req.body;
  try {
    const result = await db.Video.create(data);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
}

const getVideo= async (req, res) => {
    try {
      const video = await db.Video.findAll();
      res.send(video);
    } catch (err) {
      res.send(err);
    }
  }

  const getVideoByID=async (req, res) => {
    id=req.params.id
  try {
    const video = await db.Video.findAll({
      where: {
        videoID: id,
      }
    })
    res.send(video);
  } catch (err) {
    res.send(err);
  }
}

const deletebyID= async (req, res) => {
    id=req.params.id
  try {
    const video = await db.Video.findAll({
      where: {
        videoID: id,
      }
    })
    if(video){
        const result=await db.Video.destroy({
            where: {
                videoID: id,
              }
        })
    }
    res.send(result);
  } catch (err) {
    res.send(err);
  }
}

const updateVideo=async (req, res) => {
    id=req.params.id
  try {
    const video = await db.Video.findAll({
      where: {
        videoID: id,
      }
    })
    if(video){
        const newVideo=req.body;
        const updatedVideo={...video,...newVideo}
       const up = await db.Video.update(updatedVideo)
          res.send(up);
    }
  } catch (err) {
    res.send(err);
  }
}

  module.exports={getVideo,postVideo,getVideoByID,deletebyID,updateVideo}