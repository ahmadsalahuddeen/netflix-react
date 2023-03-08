import React, {useEffect, useState} from "react";
import './RowPost.css'
import {  imageUrl } from "../../constants/constants";
import axios from '../../axios'

function RowPost(props) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
      
    axios.get(props.url).then(response =>{

setMovies(response.data.results)
    }).catch(err => {
        alert("Network error")
    })
    }, [])





    
  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="posters">
        {movies.map((obj)=>{

            return (
        <img className={props.isSmall ? 'smallPoster' : 'poster'}
         src={`${imageUrl+obj.backdrop_path}`} alt="" />
            )    
    })}
        
      </div>
    </div>
  );
}

export default RowPost;
