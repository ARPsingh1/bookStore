import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {
    const navigate = useNavigate();
    const {       //react hook form install
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            // fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        // await axios.post('http://localhost:8080/user/login', userInfo)
        await axios.post('https://bookstore-uv14.onrender.com/user/login', userInfo)
        
            .then((res) => {
                // console.log(res.data)
                if (res.data) {
                    toast.success('Login Successfully');
                    // document.getElementById('my_modal_3').close();
                    navigate('/')
                    setTimeout(() => {
                        window.location.reload()
                    },1000);
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
        <>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById('my_modal_3').close()}
                        >
                            ✕
                        </button>
                        {/* if there is a button in form, it will close the modal */}

                        <h1 className="text-4xl text-center mb-5">Login</h1>
                        <div className="flex flex-col gap-10 px-6">
                            <div>
                                <label className="input w-full">
                                    <input type="email" placeholder='enter your emial' className="grow" {...register("email", { required: true })} />
                                </label>
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div>
                                <label className="input w-full">
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="grow" {...register("password", { required: true })}
                                    />
                                </label>
                                {errors.password && <span className="text-red-600">This field is required</span>}
                            </div>

                        </div>
                        <div className="flex flex-row items-center justify-around mt-6 ">

                            <div className="flex">

                                <button className="btn bg-pink-700 hover:bg-pink-900 mt-3">login</button>
                            </div>
                            <div className="flex"><p>Not registered? <Link to='signup' className="text-blue-600 underline" href="">Signup</Link></p></div>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default Login
