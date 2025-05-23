import React from 'react'
// import { useForm } from "react-hook-form"
import { Link, } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:8080/book", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            if (response.ok) {
                alert("Book added successfully!");
                navigate('/')
                console.log(result);
            } else {
                alert("Error: " + result.message);
            }
        } catch (err) {
            console.error("Failed to add book:", err);
            alert("Something went wrong!");
        }
    };

    return (
        <><div className=" h-screen">
            <div className=" w-full sm:w-1/2 m-auto pt-20">
                <div className="flex flex-col  w-full">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="flex flex-col gap-5">
                <h1 className="text-center text-2xl bg-green-600 w-1/2 m-auto">Add Book</h1>
                            <div className="">
                                <label className="input w-full">
                                    <input
                                        type="text"
                                        placeholder="Enter book Name"
                                        className="grow"
                                        {...register("name", { required: true })} />
                                </label>
                                {errors.text && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="">

                                <label className="input w-full">
                                    <input
                                        type="text"
                                        placeholder="Enter your Title"
                                        className="grow"
                                        {...register("title", { required: true })} />
                                </label>
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="">

                                <label className="input w-full">
                                    <input
                                        type="number"
                                        placeholder="Enter title price"
                                        className="grow"
                                        {...register("price", { required: true })} />
                                </label>
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="">

                                <label className="input w-full">
                                    <input
                                        type="text"
                                        placeholder="Enter  category"
                                        className="grow"
                                        {...register("category", { required: true })} />
                                </label>
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div>
                                <label className="input w-full">
                                    <input
                                        type="text"
                                        placeholder="Enter image URL "
                                        className="grow"
                                        {...register("image", { required: true })} />
                                </label>
                                {errors.password && <span className="text-red-600">This field is required</span>}
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-between mt-6">
                            <button className="btn bg-pink-700 hover:bg-pink-900 text-white px-6 w-full">submit</button>

                        </div>
                    </form>

                </div>
             <Link to='/'>
                        <button className="btn mt-5 bg-pink-700 hover:bg-pink-400 px-6 text-lg">Back</button>
                      </Link>
            </div>
        </div>
        </>
    )
}

export default AddBook
