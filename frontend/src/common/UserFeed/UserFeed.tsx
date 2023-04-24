import React from 'react'
import Sidenavbar from '../Sidenavbar/Sidenavbar'
import Feed from './FeedComponent/Feed'

const UserFeed = () => {
  return (
    <div className='md:grid grid-cols-3 '>
      <div className=''>
        <Sidenavbar/>
      </div>
      <div className=''>
      <Feed/>
      <Feed/>
      <Feed/>
      <Feed/>
      </div>
      <div className=''/>
    </div>
  )
}

export default UserFeed
