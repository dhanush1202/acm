import React, {useEffect} from 'react'
import "./Preloader.css"
import { preLoaderAnim } from '../animations'


const PreLoader = ()=> {
    useEffect(()=>{
        preLoaderAnim()
    },[])
  return (
    <div className="preloader">
        <div className="texts-container">
            <span>A</span>
            <span>C</span>
            <span>M</span>
            
        </div>

    </div>
  )
}

export default PreLoader;