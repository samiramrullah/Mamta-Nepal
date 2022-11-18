import React from 'react'
import Feed from './FeedComponent/Feed'

const UserFeed = () => {
  return (
    <div className='grid grid-cols-4'>
      <div className=''></div>
      <div className='col-span-2'>
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
