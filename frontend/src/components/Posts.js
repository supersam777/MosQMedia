import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { mosqueListGuestuser } from '../services'

function Posts() {

  const [result, setResult] = useState([])
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    mosqueListGuestuser().then( res => {
      //console.log( res.data)
      if ( res.data.result !== undefined ) {
        setResult( res.data.result )
      }
      
    })
  }, [])



  const clickDetail = ( index ) => {
    const item = result[index]
    const stItem = JSON.stringify(item)
    localStorage.setItem("item", stItem)
    setRedirect(true)
  }

    return (
        <div className="container" style={{marginBottom:10}} >
          { redirect && <Redirect to={"/detail"} />} 
        <div className="container">
          <div className="row">

          { result.map( (item, index) => {
            return (
              <div key={index} className="col-sm-3">
                  <figure className="snip1527" >
                    <img class="img-fluid" src={item.image} /> 
                    <figcaption>
                      <div className="date"><span className="day">{item.build_date}</span></div>
                      <h4>{item.title}</h4>
                      <p>
                      {item.detail}
                      </p>
                    </figcaption>
                    <a onClick={ () => clickDetail( index ) } href=""></a>
                  </figure>
                </div>
              )
          } ) }

            
            
            
            
          </div>
        </div>
        </div>
    )
}

export default Posts
