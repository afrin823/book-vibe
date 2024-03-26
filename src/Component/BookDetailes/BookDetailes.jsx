import { useLoaderData, useParams } from "react-router-dom";


const BookDetailes = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
  
    const book = books.find(book => book.bookId === bookId);
    console.log(book);
    return (
        <div className="mt-8 w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full  bg-slate-100 rounded-xl">
            <img className="w-full  mx-auto p-8" src={book.Book_image} alt="" />
        </div>
        <div className="cols-span-1">
            <h2 className="text-4xl font-bold mb-1">{book.bookName}</h2>
            <h3 className="text-xl mb-2">By: {book.author}</h3>
            <hr />
            <h2 className="text-xl my-2 font-bold">{book.category}</h2>
            <hr />
            <p className="my-2 text-justify"><span className="font-bold">Review:</span> {book.review}</p>
            <div className="flex mt-2 my-3"><span className="font-bold">Tag</span> 
                 <div className="card-actions gap-4">
                        <div className="badge py-2 font-medium px-4 bg-slate-100 text-[#4cd137]">{book.tags.slice(1)}</div>
                        <div className="badge  font-medium py-2 px-4 bg-slate-100 text-[#4cd137]">{book.tags.slice(1)}</div>
                    </div>
            </div>
            <hr />
            <div className="my-2">
                <h2>Number of Pages: <span className="font-bold">{book.totalPages}</span> </h2>
                <h2>Publisher:<span className="font-bold">{book.publisher}</span></h2>
                <h2>Year of Publishing: <span className="font-bold">{book.yearOfPublishing}</span></h2>
                <h2>Rating: <span className="font-bold">{book.rating}</span></h2>

            </div>
        </div>
        </div>
        </div>
    );
};

export default BookDetailes;