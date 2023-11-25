import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";



const SignUp = () => {
  const { register,handleSubmit,formState: {errors}} = useForm()

  const onSubmit = data => {
    console.log(data);
  }
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
               
                <input type="text" {...register("name",{required:true})} placeholder="name" name="name" className="input text-white input-bordered" required />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", {required: true})}  placeholder="email" name="email" className="input text-white input-bordered" required />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {required: true, minLength:6, maxLength:20})} placeholder="password" name="password" className="input text-white input-bordered" required />
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn  bg-orange-600">Login</button>
                <p className='m-4 text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Log In</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;