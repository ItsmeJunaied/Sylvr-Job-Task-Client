import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    return (
        <div className=" flex min-h-screen bg-gradient-to-tr from-blue-800 to-purple-700">


            {/* login text */}
            <div className=" bg-white w-1/2 border-r-4 rounded-r-full text-center flex justify-center items-center">
                    <h1 className=" text-center text-5xl lg:text-left font-bold ">Sign Up now!</h1>
            </div>


            {/* login Input Fields */}
            <div className="  w-1/2 flex justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body" >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" {...register("Name" , { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className=" text-red-600">Name required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("Email" , { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.name && <span className=" text-red-600">Email required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("Password" , { required: true })} placeholder="password" className="input input-bordered" />
                            {errors.name && <span className=" text-red-600">Password required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                    </div>
                    <div>
                        <p className="mb-10 text-center"><small>Already Have Account? <Link className="link link-primary" to={'/login'}>LogIn</Link></small></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;