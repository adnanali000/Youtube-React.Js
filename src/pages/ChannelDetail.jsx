import React,{useState,useEffect} from 'react'
import {Box} from '@mui/material'
import {Videos,ChannelCard} from '../components'
import {useParams} from 'react-router-dom'
import {FetchFromApi} from '../utils/FetchFromApi'

const ChannelDetail = () => {
  const {id} = useParams();
  const [videos, setVideos] = useState([])
  const [channelDetail, setChannelDetail] = useState(null)

  useEffect(()=>{
    FetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    FetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))

  },[id])

console.log(channelDetail?.brandingSettings?.image?.bannerExternalUrl)

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(244,40,14,0.7791491596638656) 32%, rgba(254,96,111,1) 73%)',
          zIndex:10,
          height:'300px'
        }}
      />

        <ChannelCard channelDetail={channelDetail} marginTop="-112px" />
      </Box>

      <Box display="flex" p={2}>
        <Box sx={{ mr: {sm:'100px'}}} />
        <Videos videos={videos} />
      </Box>

    </Box>
  )
}

export default ChannelDetail