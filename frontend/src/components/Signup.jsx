import React from 'react';
import { Link, Navigate,useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        // await axios.post('http://localhost:8080/user/signup', userInfo)
        await axios.post('https://bookstore-uv14.onrender.com/user/signup', userInfo)
            .then((res) => {
                // console.log(res.data)
                if (res.data) {
                    toast.success('Signup Successfully!');
                    navigate('/');
                    window.location.reload()
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))

            }).catch((err) => {
                if (err.response) {

                    console.log(err.response.data.message);
                    toast.error("Error : " + err.response.data.message)
                    // alert("Error : " + err.response.data.message)
                }
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900 ">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md relative">
                <h1 className="text-4xl text-center mb-6 font-bold">Signup</h1>
                <form onSubmit={handleSubmit(onSubmit)} Navigate='/'>
                    <Link to='/'> <button className="btn btn-sm btn-circle btn-ghost absolute top-0 right-0">✕</button></Link>
                    <div className="flex flex-col gap-5">
                        <div className="">

                            <label className="input w-full">
                                <input
                                    type="text"
                                    placeholder="Enter your Name"
                                    className="grow"
                                    {...register("fullname", { required: true })} />
                            </label>
                            {errors.text && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="">

                            <label className="input w-full">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="grow"
                                    {...register("email", { required: true })} />
                            </label>
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div>
                            <label className="input w-full">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="grow"
                                    {...register("password", { required: true })} />
                            </label>
                            {errors.password && <span className="text-red-600">This field is required</span>}
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between mt-6">
                        <button className="btn bg-pink-700 hover:bg-pink-900 text-white px-6">Signup</button>
                        <p>
                            have an accound?{' '}
                            <button className="text-blue-600 underline" onClick={() => document.getElementById('my_modal_3').showModal()}>
                                Login
                            </button>
                        </p>
                    </div>
                </form>
                <Login />
            </div>
        </div>
    );
};

export default Signup;
