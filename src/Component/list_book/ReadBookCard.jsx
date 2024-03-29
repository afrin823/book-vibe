import { CiLocationOn } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ReadBookCard = ({items}) => {
    const navigate =  useNavigate()
    const  {rating, category,Book_image,bookName,author,tags,yearOfPublishing,publisher,totalPages,bookId} = items;
   
    return (
        <div>
             <div>
            <div>
               
                    <div   className="card card-side bg-base-100 shadow-xl gap-3 mb-4">
                        <div className="w-56 p-4 m-6 bg-slate-200 rounded-xl">
                            <figure><img className="w-44" src={ Book_image} alt="Book" /></figure>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{ bookName}</h2>
                            <p>By: { author}</p>
                            <p>{ bookName}</p>
                            <div className="flex">
                            <p>Tag <span className="px-4 py-1 text-[#4cd137] bg-slate-100 rounded-full font-medium">{tags[0]}</span> <span className="px-4 py-1 text-[#4cd137] bg-slate-100 rounded-full font-medium">{ tags[1]}</span></p>
                            <p className="flex justify-start items-center"><CiLocationOn /> Year of Publishing: { yearOfPublishing}</p>
                            </div>
                            <div className="flex justify-start gap-4 itmes-center">
                                <div className="flex gap-2 justify-center items-center">
                                    <FaUsers /> <p>Publisher: { publisher}</p>
                                </div>
                                <div className="flex gap-2 justify-center items-center">
                                    <IoDocumentSharp /> <p>Page: { totalPages}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-start gap-3 items-center">
                                <span className="px-4 py-1 text-[#3498db] bg-slate-100 rounded-full">Category: {category}</span>

                                <span className="px-4 py-1 bg-[#fce2bf] text-[#ffa202] rounded-full">Rating: {rating}</span>
                                <button   className="btn bg-[#4cd137] text-white rounded-full">View Details</button>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
        </div>
    );
};

export default ReadBookCard;