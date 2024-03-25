import { CiStar } from "react-icons/ci";

const AllBook = ({ bok }) => {
    const { Book_image, bookName,rating,author } = bok;
    return (
        <div>
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <div className="m-8">
                <figure><img className="w-full h-64" src={Book_image} alt="" /></figure>
                </div>
                
                <div className="card-body">
                <div className="card-actions gap-4">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                    <h2 className="card-title">
                        {bookName}                 
                    </h2>
                    <p>By: {author}</p>
                    <hr  className="border-dashed border-w-[4px]"/>
                    <div className="card-actions justify-between">
                        <div className=" ">Fiction</div>
                        <div className="flex justify-center items-center">{rating} <CiStar /> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBook;