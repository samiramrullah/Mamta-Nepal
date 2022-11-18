import React from 'react'
import Feed from './FeedComponent/Feed'

const UserFeed = () => {
  return (
    <div className='md:grid grid-cols-3 pt-32'>
      <div className=''></div>
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
