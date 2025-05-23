// import React from 'react';

// const Cards = ({ card }) => {
//     return (
//         <div className="max-w-screen-2xl mx-auto px-4 py-4">
//             <div className="card bg-base-100 w-full sm:w-96 mx-auto shadow-sm p-5 ">
//                 <figure>
//                     <img className="hover:scale-110 transition-transform duration-300"
//                         src={card.image}
//                         alt="Product" width='300px' />
//                 </figure>
//                 <div className="card-body">
//                     <h2 className="card-title">
//                         {card.title}
//                         <div className="badge badge-secondary">NEW</div>
//                     </h2>
//                     <p>A card component has a figure, a body part, and inside body there are title and actions parts.</p>
//                     <div className="card-actions justify-between mt-2">
//                         <div className="badge badge-outline">${card.price}</div>
//                         <div className="badge badge-outline">Products</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cards;
// import React from 'react';

// const Cards = ({ card }) => {
//     return (
//         <div className="max-w-screen-2xl mx-auto px-4 py-4">
//             <div className="card bg-base-100 w-full sm:w-96 mx-auto shadow-sm p-5 h-full flex flex-col">
//                 <figure>
//                     <img className="hover:scale-110 transition-transform duration-300"
//                         src={card.image}
//                         alt="Product"
//                         width='300px' />
//                 </figure>
//                 <div className="card-body flex flex-col justify-between flex-grow">
//                     <h2 className="card-title">
//                         {card.title}
//                         <div className="badge badge-secondary">NEW</div>
//                     </h2>
//                     <p>A card component has a figure, a body part, and inside body there are title and actions parts.</p>
//                     <div className="card-actions justify-between mt-2">
//                         <div className="badge badge-outline">${card.price}</div>
//                         <div className="badge badge-outline">Products</div>
//                         <div className="badge btn bg-red-600 text-white badge-outline">Delete</div>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cards;
// import React from 'react';
// import axios from 'axios';

// const Cards = ({ card, onDelete }) => {

//     const handleDelete = async () => {
//         try {
//             await axios.delete(`http://localhost:8080/${card._id}`)// Adjust base URL if needed
//             onDelete(card._id); // Notify parent to update UI
//         } catch (error) {
//             console.error("Failed to delete book", error);
//         }
//     };

//     return (
//         <div className="max-w-screen-2xl mx-auto px-4 py-4">
//             <div className="card bg-base-100 w-full sm:w-96 mx-auto shadow-sm p-5 h-full flex flex-col">
//                 <figure>
//                     <img className="hover:scale-110 transition-transform duration-300"
//                         src={card.image}
//                         alt="Product"
//                         width='300px' />
//                 </figure>
//                 <div className="card-body flex flex-col justify-between flex-grow">
//                     <h2 className="card-title">
//                         {card.title}
//                         <div className="badge badge-secondary">NEW</div>
//                     </h2>
//                     <p>A card component has a figure, a body part, and inside body there are title and actions parts.</p>
//                     <div className="card-actions justify-between mt-2">
//                         <div className="badge badge-outline">${card.price}</div>
//                         <div className="badge badge-outline">Products</div>
//                         <div 
//                             className="badge btn bg-red-600 text-white badge-outline cursor-pointer"
//                             onClick={handleDelete}
//                         >
//                             Delete
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cards;





import React from 'react';
import axios from 'axios';

const Cards = ({ card, onDelete }) => {

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/book/${card._id}`);
            onDelete(card._id); // notify parent to remove from UI
        } catch (error) {
            console.error("Failed to delete book", error);
        }
    };

    return (
        <div className="p-2">
            <div className="card  bg-base-100 w-full sm:w-96 mx-auto shadow-sm p-5 h-full flex flex-col">
                <figure>
                    <img 
                        className="hover:scale-110 transition-transform duration-300"
                        src={card.image}
                        alt="Product"
                        width="300px"
                    />
                </figure>
                <div className="card-body flex flex-col justify-between flex-grow">
                    <h2 className="card-title">
                        {card.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>
                        A card component has a figure, a body part, and inside body there are title and actions parts.
                    </p>
                    <div className="card-actions justify-between mt-2">
                        <div className="badge badge-outline">${card.price}</div>
                        <div className="badge badge-outline">Products</div>
                        <div
                            className="badge btn bg-red-600 text-white badge-outline cursor-pointer"
                            onClick={handleDelete}
                        >
                            Delete
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
