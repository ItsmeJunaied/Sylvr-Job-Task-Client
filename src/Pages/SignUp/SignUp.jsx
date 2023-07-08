
const SignUp = () => {
    return (
        <div className=" flex min-h-screen bg-gradient-to-tr from-blue-800 to-purple-700">


            {/* login text */}
            <div className=" bg-white w-1/2 border-r-4 rounded-r-full text-center flex justify-center items-center">
                    <h1 className=" text-center text-5xl lg:text-left font-bold ">Sign Up now!</h1>
            </div>


            {/* login Input Fields */}
            <div className="  w-1/2 flex justify-center items-center">
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;