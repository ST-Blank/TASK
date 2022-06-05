const express=require('express')
const router=express.Router()
const {getVideo,postVideo,getVideoByID, deletebyID, updateVideo} = require('../controller/videoController')
const { getVideoList, postVideoList } = require('../controller/videoListController')


//Video
router.post('/',postVideo)
router.get('/',getVideo)
router.get('/:id',getVideoByID)
router.delete('/:id',deletebyID)
router.put('/:id',updateVideo)

//VideoList
router.get('/:id/videoList',getVideoList)
router.post('/:id/videoList',postVideoList)



module.exports=router