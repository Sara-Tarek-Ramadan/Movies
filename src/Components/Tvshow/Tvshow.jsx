import axios from 'axios';
import React ,{useState ,useEffect } from 'react'
import { Link } from 'react-router-dom';
let mediaType = 'tv'
export default function Movies() {
  const [tv , setTv ] = useState([]);
  let numbers = new Array(10).fill(1).map((el , index)=> index+1 )

  async function getApiTrending(page){
    let {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=09b639ab0b2b1b51b00568871d53f9fe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
    setTv(data.results);
  }
  useEffect(()=>{
    getApiTrending(1)
  },[])
  
  return <>
  
    <div className='row'>
        {tv.map((item , index)=>
            <div key={index} className='col-md-3 my-3'>
                <Link className='text-decoration-none' to={`/ItemDetails/${item.id}/${mediaType}`}>
                    {item.poster_path? <img src={'https://image.tmdb.org/t/p/w500'+item.poster_path} className='w-100' alt="poster path" />
                    :<img src={'https://image.tmdb.org/t/p/w500'+item.profile_path} className='w-100' alt="poster path" />
                    }        
                    <h3 className='text-center text-white h5 mt-1'>{item.title} {item.name}</h3>
                </Link>
            </div>
        )}
    </div>
    <nav aria-label="Page navigation example" className='d-flex justify-content-center'>
        <ul className="pagination">
            {numbers.map((page)=><li key={page} className="page-item" onClick={()=>{getApiTrending(page)}}><Link className="page-link">{page}</Link></li>)}
                
        </ul>
    </nav>
  </>
}
