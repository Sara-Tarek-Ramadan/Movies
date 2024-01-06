import axios from 'axios';
import React , {useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function ItemDetails() {
    let {id , mediaType } = useParams();
  const [details , setDetails ] = useState({});

  async function getApiTrending(mediaType , id){
    
    let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=09b639ab0b2b1b51b00568871d53f9fe&language=en-US`)
    setDetails(data);
  }
  useEffect(()=>{
    getApiTrending(mediaType , id)
  },[])
  return <>
  <div className="row">
  <div className="col-md-4">
    {details.poster_path ? <img src={'https://image.tmdb.org/t/p/w500'+details.poster_path} className='w-100' alt="poster path" />:<img src={'https://image.tmdb.org/t/p/w500'+details.profile_path} className='w-100' alt="poster path" />}
  </div>
  <div className="col-md-8 d-flex justify-content-center align-items-center">
    <div>
      <h2> {details.name} {details.title} </h2>
      {details.overview ? <p> {details.overview} </p> :  <p> {details.biography} </p>}
      {details.vote_average}
    <div>
      <button className='d-inline-block btn btn-info my-3'>download now</button>
    </div>

    </div>
  </div>
</div>
  </> 
}
