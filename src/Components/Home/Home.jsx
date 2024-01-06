import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem';

export default function Home() {
const [movies, setMovies] = useState([]);
const [tv, setTv] = useState([]);
const [person, setPerson] = useState([]);

async function getTrending(mediaItem,callback){
let {data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaItem}/week?api_key=09b639ab0b2b1b51b00568871d53f9fe`)
callback(data.results)
console.log('====================================');
console.log(data.results);
console.log('====================================');
}
useEffect(()=>{
  getTrending('movie',setMovies)
getTrending('tv',setTv)
getTrending('person',setPerson)
},[])
  return <>
    {movies?<>
     <div className="row  py-3">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className='brdr w-25 mb-3'></div>
            <h2 className='text-capitalize '>trending <br /> movies <br /> right now</h2>
            <p className='text-capitalize text-gray fs-5'>top trending movie by week</p>
            <div className="brdr w-100 mt-3"></div>
          </div>
        </div>
              {movies.slice(0,10).map((item , index)=> <MediaItem key={index} item={item} />)}
      </div>
      <div className="row py-3">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className='brdr w-25 mb-3'></div>
            <h2 className='text-capitalize '>trending <br /> tv <br /> right now</h2>
            <p className='text-capitalize text-gray fs-5'>top trending tv by week</p>
            <div className="brdr w-100 mt-3"></div>
          </div>
        </div>
              {tv.slice(0,10).map((item , index)=> <MediaItem key={index} item={item} />)}
      </div>

       <div className="row  py-3">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <div className='brdr w-25 mb-3'></div>
            <h2 className='text-capitalize '>trending <br /> people <br /> right now</h2>
            <p className='text-capitalize text-gray fs-5'>top trending people by week</p>
            <div className="brdr w-100 mt-3"></div>
          </div>
        </div>
              {person.slice(0,10).map((item , index)=> <MediaItem key={index} item={item} />)}
      </div>
    </>:<>
    <div className="row">
      <div className="col-4">
        <div>
        <div className="card bg-main" aria-hidden="true">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#252b3b"></rect></svg>
           <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a className="btn btn-primary disabled placeholder col-6"></a>
          </div>
      </div>
      </div>
      </div>
       <div className="col-4">
        <div>
        <div className="card bg-main" aria-hidden="true">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#252b3b"></rect></svg>
           <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a className="btn btn-primary disabled placeholder col-6"></a>
          </div>
      </div>
      </div>
      </div>
       <div className="col-4">
        <div>
        <div className="card bg-main" aria-hidden="true">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#252b3b"></rect></svg>
           <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a className="btn btn-primary disabled placeholder col-6"></a>
          </div>
      </div>
      </div>
      </div>
       <div className="col-4">
        <div>
        <div className="card bg-main" aria-hidden="true">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#252b3b"></rect></svg>
           <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a className="btn btn-primary disabled placeholder col-6"></a>
          </div>
      </div>
      </div>
      </div>
       <div className="col-4">
        <div>
        <div className="card bg-main" aria-hidden="true">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#252b3b"></rect></svg>
           <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a className="btn btn-primary disabled placeholder col-6"></a>
          </div>
      </div>
      </div>
      </div>
       <div className="col-4">
        <div>
        <div className="card bg-main" aria-hidden="true">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#252b3b"></rect></svg>
           <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a className="btn btn-primary disabled placeholder col-6"></a>
          </div>
      </div>
      </div>
      </div>
    </div>
    </>}
  
  </>
}
