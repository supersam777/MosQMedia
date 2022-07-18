import React, { useEffect, useRef, useState } from 'react'
import Footer from './components/Footer'
import TopMenu from './components/TopMenu'
import { mosqueCreate, mosqueList, mosqueDelete } from './services'
import GoogleMapReact from 'google-map-react';


export default function Profile() {


    const [cid, setCid] = useState("")
    const [title, setTitle] = useState("")
    const [detail, setDetail] = useState("")
    const [build_date, setBuild_date] = useState("")
    const [image, setImage] = useState("")
    const [address, setAddress] = useState("")
    const [mosqueArr, setMosqueArr] = useState([])
    const [center, setCenter] = useState({ lat: 37.7363665, lng: 38.2369792 })
    const [zoom, setZoom] = useState(11)

    const [draggable, setDraggable] = useState(false)
    const [lat, setLat] = useState(37.7363665)
    const [lng, setLng] = useState(38.2369792)


    useEffect(() => {
       effect()
    }, [])

    const effect = () => {
        const userString = sessionStorage.getItem("customer")
        if ( userString ) {
            const obj = JSON.parse( userString );
            setCid(obj.cid)
            const params = {
                "cid": obj.cid
            }
            mosqueList(params).then( res => {
                setMosqueArr(res.data.result)
            })
        }
    }



    const fncSendMosque = () => {
        
        const params = {
            "cid": cid,
            "title": title,
            "detail": detail,
            "build_date": build_date,
            "image": image,
            "address": address,
            "latlon": JSON.stringify(center),
        }

        mosqueCreate(params).then( res => {
           const status = res.data.status
           if ( status === true ) {
                setTitle("")
                setDetail("")
                //alert("Camii Eklendi")
                effect()
           }
        })
        
    }


    function handleImageChange(e) {
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
         // file: file,
         // base64: reader.result
          console.log(reader.result)
          setImage(reader.result)
          //this.handleSubmit()
        };
      }

    const deleteMosque = (mid) => {
        const params = {
            "mid": mid
        }
        mosqueDelete(params).then( res => {
            const status = res.data.status
           if ( status === true ) {
                effect()
           }
        })
    }



    const createMapOptions = (maps) => 
    {
        return {
            panControl: false,
            mapTypeControl: false,
            scrollwheel: false,
            styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
        }
    }

   const _onChange = ({center, zoom}) => {
        setCenter(center);
        setZoom(zoom);
        console.log(center)
      }

     function onCircleInteraction(childKey, childProps, mouse) {
        // function is just a stub to test callbacks
        setDraggable(false)
        setLat(mouse.lat)
        setLng(mouse.lng)
     }

   function onCircleInteraction3(childKey, childProps, mouse) {
        setDraggable(true)
        console.log('onCircleInteraction called with', childKey, childProps, mouse);
        
      }

    return (
        <>
             <TopMenu item="Profile" />
             <div id="animatedTextHeading"></div>
                <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Cami Ekle</h3>

                            <div class="form-group">
                                <input value={title}  onChange={ (evt)=> setTitle(evt.target.value)  }  type="text" className="form-control" placeholder="Camii Adı" />
                            </div>
                            <div class="form-group">
                                <textarea  value={detail}   onChange={ (evt)=> setDetail(evt.target.value) }  placeholder="Camii Hakkında" className="form-control" ></textarea>
                            </div>

                            <div class="form-group">
                                <input  onChange={ (evt)=> setBuild_date(evt.target.value)  }   type="date" className="form-control" placeholder="Yıl" />
                            </div>

                            <div class="form-group">
                                <input onChange={e => handleImageChange(e)}   type="file" className="form-control-file" placeholder="Resim" />
                            </div>

                            <div class="form-group">
                                <textarea  onChange={ (evt)=> setAddress(evt.target.value) }  placeholder="Camii Adresi" className="form-control" ></textarea>
                            </div>

                            


                            
                            
                            <button onClick={fncSendMosque} type="submit" class="btn btn-primary">Submit</button>

                    </div>
                    <div className="col">
                    <GoogleMapReact
                                options={createMapOptions}
                                bootstrapURLKeys={{ key: "AIzaSyD5TrePAAcFPpDgtk6QUScVqaqVGYHN6U4" }}
                                defaultCenter={center}
                                defaultZoom={zoom}
                                onChange={_onChange}

                                onChildMouseDown={onCircleInteraction}
                                onChildMouseUp={onCircleInteraction3}

                                onChildClick={() => console.log('child click')}
                                onClick={() => console.log('mapClick')}

                                >

                                <div 
                                    className="place" 
                                    lat={lat} 
                                    lng={lng}>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                            </GoogleMapReact>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                <div className="col-sm-12">
                        <h3>Cami Listesi</h3>

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Mid</th>
                                <th scope="col">Cami</th>
                                <th scope="col">Detay</th>
                                <th scope="col">Resim</th>
                                <th scope="col">Sil</th>
                                </tr>
                            </thead>
                            <tbody>

                                { mosqueArr.map( (item, index) => {
                                    return (
                                    <tr key={index}>
                                        <th>{item.mid}</th>
                                        <td>{item.title}</td>
                                        <td>{item.detail}</td>
                                        <td> <img src={item.image} className="img-thumbnail" style={{ width:'100px', }} /> </td>
                                        <td> <button onClick={ () => deleteMosque(item.mid) } type="button" className="btn btn-danger">Sil</button> </td>
                                    </tr>
                                    )
                                })}
                                
                            </tbody>
                            </table>


                    </div>
                </div>
                </div>

             <Footer />
        </>
    )
}
