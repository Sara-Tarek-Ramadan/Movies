import React from 'react'
import { Link } from 'react-router-dom'
export default function MediaItem({item}) {
  return (<>
    <div className='col-md-2 my-3'>
      <Link className='text-decoration-none' to={`/ItemDetails/${item.id}/${item.media_type}`}>
       <div className="position-relative">
       {item.poster_path? <img src={'https://image.tmdb.org/t/p/w500'+item.poster_path} className='w-100' alt="poster path" />
        :<img src={'https://image.tmdb.org/t/p/w500'+item.profile_path} className='w-100' alt="poster path" />
        }        
        <h3 className='text-center text-white h5 mt-1'>{item.title} {item.name}</h3>
        {item.vote_average?<div className="vote p-1 position-absolute top-0 end-0">{item.vote_average.toFixed(1)}</div>:''}

       </div>
      </Link>
    </div>
  </>
  )
}
