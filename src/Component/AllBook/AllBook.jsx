import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const AllBook = ({ bok }) => {
    // book 
    const {bookId, Book_image, bookName,rating,author,category,publisher,tags } = bok;
    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <div className="p-8 bg-[#e9eaea] m-8 rounded-xl">
                    <Link to={`/book/${bookId}`}>
                <figure>
                    <img className="w-full  h-64" src={Book_image} alt="" />
                </figure>
                </Link>
                </div>
                
                <div className="card-body">
                <div className="card-actions gap-4">
                        <div className="badge py-2 font-medium px-4 bg-slate-100 text-[#4cd137]">{publisher}</div>
                        <div className="badge  font-medium py-2 px-4 bg-slate-100 text-[#4cd137]">{tags.slice(1)}</div>
                    </div>
                    <h2 className="card-title">
                        {bookName}                 
                    </h2>
                    <p>By: {author}</p>
                    <hr  className="border-dashed border-w-[4px]"/>
                    <div className="card-actions justify-between">
                        <div className=" ">{category}</div>
                        <div className="flex justify-center items-center">{rating} <CiStar /> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBook;