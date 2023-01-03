import { Modal } from 'antd'

import { RxCross2 } from 'react-icons/rx'

import { useState } from 'react'

import Triangle from './Triangle'
// import Player from '../Player'

import video from '../../videos/video.mp4'
import poster_img from '../../images/video-player/preview.jpg'

const VideoPlayer = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark">
      <Triangle />
      <div className="flex justify-center">
        <h2 className="uppercase text-white text-4xl font-black">
          Watch Our trailer on <span className="text-yelloww">youtube</span>
        </h2>
      </div>
      <div className="flex justify-center" onClick={() => setModalOpen(true)}>
        <div className="max-w-complete">
          <video poster={poster_img} className="masking-image w-[100%]">
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <Modal
          centered
          width={1100}
          // destroyOnClose={true}
          footer={null}
          open={modalOpen}
          closeIcon={<RxCross2 size={20} className="text-gray-500" />}
          destroyOnClose={true}
          onCancel={() => {
            setModalOpen(false)
            console.log('Qais')
          }}
        >
          {/* <Player url={video} id={1} poster={poster_img} /> */}
          <p>Qais</p>
        </Modal>
      </div>
    </div>
  )
}

export default VideoPlayer
