import { Modal, ConfigProvider } from 'antd'

import { FaRegPlayCircle } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'

import { useRef, useState } from 'react'

import Triangle from './Triangle'

import video from '../../videos/video.mp4'
import poster_img from '../../images/video-player/preview.jpg'
import DividerYellow from '../shared/DividerYellow'

const VideoPlayer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const videoRef = useRef(null)

  const showModal = () => {
    setIsModalOpen(true)
    videoRef.current.play()
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    videoRef.current.pause()
    setIsModalOpen(false)
  }

  return (
    <div className="bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark">
      <Triangle />
      <div className='py-36'>
      <DividerYellow />
        <div className="flex justify-center py-10">
          <h2 className="uppercase text-white text-4xl font-black py-10">
            Watch Our trailer on <span className="text-yelloww">youtube</span>
          </h2>
        </div>

        <div className="flex justify-center">
          <div onClick={showModal} className="max-w-complete relative">
            <img src={poster_img} alt="" />
            <div className="absolute flex justify-center w-full h-full top-0 items-center">
              <FaRegPlayCircle size={100} className="text-white" />
            </div>
          </div>
        </div>
        <ConfigProvider
          theme={{
            token: {
              colorBgBase: 'rgba(0, 0, 0, 0.5)',
            },
          }}
        >
          <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            centered={true}
            width={'1400px'}
            closeIcon={<RxCross2 size={20} className="text-gray-500" />}
          >
            <video
              poster={poster_img}
              controls
              ref={videoRef}
              className="pt-5 px-5"
            >
              <source src={video} type="video/mp4" />
            </video>
          </Modal>
        </ConfigProvider>
      </div>
      <div className='border-t border-white/30 w-full'></div>
    </div>
  )
}

export default VideoPlayer
