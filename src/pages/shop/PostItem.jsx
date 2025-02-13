import React from 'react'
import { useParams, Link } from 'react-router'

// CSS
import './shop.scss'

const PostItem = () => {
    const params = useParams()
    const { id } = params;  

  return (
    <div>
        <h1>Post item</h1>
    </div>
  )
}

export default PostItem