import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const {createUser}=useContext(AuthContext);

    const handleSignup=data=>{
        console.log(data);

        createUser(data.email, data.password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=> console.log(error));
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 px-5'>
                <h2 className='text-2xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>

                <div className='form-control w-full '>
                        <label className="label"><span className="label-text">Your Name</span></label>
                        <input {...register("name", {required:'Name is required'})} type='text' placeholder="Name" className='input input-bordered w-full max-w-xs' />
                    </div>

                    <div className='form-control w-full '>
                        <label className="label"><span className="label-text">Your Email</span></label>
                        <input {...register("email", { required: true })} type='email' placeholder="Email" className='input input-bordered w-full max-w-xs' />
                    </div>

                    <div className='form-control w-full '>
                        <label className="label"><span className="label-text">Your Password</span></label>
                        <input {...register("password", { required:'Password is required', 
                        minLength:{value:6, message:'Pasword must be 6 digit long'}
                    })} type='password' placeholder="Password" className='input input-bordered w-full max-w-xs' />
                        <label className="label"><span className="label-text">Forgot Your Password ?</span></label>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <input className='btn mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 w-full' type="submit" />
                </form>
                <p>All ready have an Account ? <Link className='text-rose-600' to={'/login'}>Please Login</Link> </p>

                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-ghost">Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;