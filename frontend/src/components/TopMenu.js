import React, { useEffect, useState } from 'react'
import { register, signin } from '../services'
import { Redirect } from 'react-router-dom'
//import $ from "jquery";



export default function TopMenu( props, { item } ) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [redirectLogin, setRedirectLogin] = useState(false)
    const [loginStatus, setLoginStatus] = useState(false)
    const [loginUser, setLoginUser] = useState()


    useEffect(() => {
        console.log( props )
        const userString = sessionStorage.getItem("customer")
        if ( userString ) {
            const obj = JSON.parse( userString );
            setLoginUser(obj)
            setLoginStatus(true)
        }else {
            setRedirectLogin(true)
        }
    }, [])

    function fncRegister() {

        const params = {
            name: name.split(" ")[0],
            surname: name.split(" ")[1],
            email: email,
            password: password
        }
        register(params).then( res => {
                
                const customer = res.data.customer[0]
                const stCustomer = JSON.stringify(customer)
                sessionStorage.setItem('customer', stCustomer)
                setRedirect(true)
        })
    }


    function fncSingIn () {
        const params = {
            email: email,
            password: password,
        }
        signin(params).then( res => {
            const status = res.data.status
            if ( status === true) {
                const customer = res.data.customer[0]
                const stCustomer = JSON.stringify(customer)
                sessionStorage.setItem('customer', stCustomer)
                //$("#signup").modal("hide");
                setRedirect(true)
            }
        })
    }

    return (
        <div className="container">
            { redirect && <Redirect to="/profile" /> }
            { redirectLogin && <Redirect to="/" /> }
            <nav className="navbar navbar-light navbar-expand-md sticky-top bg-white">
                <div className="container-fluid"><a className="navbar-brand" href="/">Camilerim</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><a className="nav-link active" href="/">Anasayfa</a></li>
                            <li className="nav-item"><a className="nav-link" href="/mosqueSearch">Cami Ara</a></li>
                            <li className="nav-item"><a className="nav-link" href="/aboutUs">Hakkımızda</a></li>
                            { loginStatus == true && 
                            <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="!#">Profil </a>
                                <div className="dropdown-menu"><a className="dropdown-item" href="!#">Çıkış Yap</a></div>
                            </li>
                            }
                        </ul>

                        { loginStatus == false && 
                            <ul className="nav navbar-nav ml-auto">
                                    <li className="nav-item"><a className="nav-link active" ><button className="btn btn-outline-primary" data-toggle="modal" data-target="#signup" type="button">Log In</button></a></li>
                                    <li className="nav-item"><a className="nav-link active" ><button className="btn btn-primary" data-toggle="modal" data-target="#signin" type="button">Sign Up</button></a></li>
                            </ul>
                        }

                        { loginStatus == true && 
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item"> <a href="/profile">{ loginUser.name }  { loginUser.surname }</a>  </li>
                            </ul>
                        }

                    </div>
                </div>
            </nav>
            <div className="modal fade" role="dialog"  id="signup">
                <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Sign In</h4><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="text-primary input-group-text"><i className="fa fa-envelope-o"></i></span></div><input onChange={ (evt) => setEmail(evt.target.value)} className="form-control" type="email" required="" placeholder="Email" />
                                        <div className="input-group-append"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="text-primary input-group-text"><i className="fa fa-lock"></i></span></div><input onChange={ (evt) => setPassword(evt.target.value)} className="form-control" type="password" required="" placeholder="Password" />
                                        <div className="input-group-append"></div>
                                    </div>
                                </div>
                                <div className="form-group"><button  onClick={ fncSingIn }  className="btn btn-primary btn-lg text-white" style={{ width:'100%' }}  type="button">Log in</button></div>
                            
                            <hr style={{ backgroundColor: '#bababa'}}  />
                            <p className="text-center">Or&nbsp;<a className="text-decoration-none" href="!#">Forget password</a></p>
                            <p className="text-center">Don't have an account? &nbsp;<a className="text-decoration-none" data-dismiss="modal" data-toggle="modal" data-target="#signin" href="!#">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" role="dialog"  id="signin">
                <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Sign Up Now</h4><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center"><button className="btn btn-primary text-left" style={{ width:'100%', }}  type="button"><i className="fa fa-facebook"></i>&nbsp; Continue with Facebook</button></div>
                            <div className="text-center mt-2"><button className="btn btn-light text-left border-dark" style={{ width:'100%', }} type="button"><i className="fa fa-google"></i>&nbsp; Continue with Google</button></div>
                            <div className="mt-4">
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="text-primary input-group-text"><i className="fa fa-user-o"></i></span></div><input onChange={ (evt) => setName(evt.target.value) } className="form-control" type="text" required="" placeholder="Full Name" />
                                        <div className="input-group-append"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="text-primary input-group-text"><i className="fa fa-envelope-o"></i></span></div><input onChange={ (evt) => setEmail(evt.target.value) } className="form-control" type="email" required="" placeholder="Email" />
                                        <div className="input-group-append"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="text-primary input-group-text"><i className="fa fa-lock"></i></span></div><input onChange={ (evt) => setPassword(evt.target.value) } className="form-control" type="password" required="" placeholder="Password" />
                                        <div className="input-group-append"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check"><input className="form-check-input" type="checkbox" id="formCheck-1" required="" checked="" /><label className="form-check-label" for="formCheck-1">I agree all the terms and conditions.</label></div>
                                </div>
                                <div className="form-group"><button onClick={ fncRegister } className="btn btn-primary btn-lg text-white" style={{ width:'100%', }}  type="button">Sign Up</button></div>
                            </div>
                            <hr style={{ backgroundColor: '#bababa'}} />
                            <p className="text-center">Already have an Account?&nbsp;<a className="text-decoration-none" data-dismiss="modal" data-toggle="modal" data-target="#signup" href="#">Log In</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
