import React, { useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProviders';
import Swal from 'sweetalert2'

const Login = () => {
  
    const [disable, setDisable] = useState(true)

    const {signIn} = useContext(AuthContext);

    useEffect( () =>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
          const user = result.user
          console.log(user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "user loging successful",
            showConfirmButton: false,
            timer: 1500
          });
        })
    }

    const handleValidateCaptcha = (e) =>{
        const user_captcha_value = e.target.value
        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }


return (
     <>
     <Helmet>
     <title>Unique Tech | Login </title>
     </Helmet>
       <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center  md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login</h1>
          </div>
          <div className="card  shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input bg-white input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input bg-white input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
            <LoadCanvasTemplate />
            </label>
            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type captcha" className="input  text-white input-bordered" required />
            
          </div>
          <div className="form-control mt-6">
            <input disabled={disable} className="btn bg-orange-600" type="submit" value="Login" />
          </div>
        </form>
        <p className='m-4 text-center'>New to Unique Tech? <Link className='text-orange-600 font-bold' to="/signup">Sign UP</Link></p>
      </div>
    </div>
  </div>
     </>
);
};

export default Login;