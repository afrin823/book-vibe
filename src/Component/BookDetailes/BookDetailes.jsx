import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {saveReadBook} from '../../../src/Utility/utility';
import { useEffect, useState } from "react";
const BookDetailes = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
  
    const book = books.find(book => book.bookId === bookId);
    console.log(book);

    const handelApplyBook = () =>{
        saveReadBook(bookId);
        toast('Book Added To Book List')
    }

    let wishListStore =[];
    let saveWishListStore =  JSON.parse(localStorage.getItem("wishListStore"));
    if ( saveWishListStore) {
       
        wishListStore = saveWishListStore;
      }
      const [store2, setStore2] = useState(wishListStore)

      const handleWishList = (id) =>{
        console.log(id);
        const included2 = store2?.find((includedId) => includedId === id); 
        if (included2 ) {
            toast("Already Read otherwise wishListStore already   ")
            
          }else   {
            const updateStore = [id, ...store2];
            setStore2(updateStore);
            toast("Wow  thanks wishListStore  ")
    
            
          } 
    }
    useEffect(() => {
        localStorage.setItem("wishListStore", JSON.stringify(store2));
      }, [ store2]);
    return (
        <div className="mt-8 w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full  bg-slate-100 rounded-xl">
            <img className="w-full  mx-auto p-8" src={book.Book_image} alt="" />
        </div>
        <div className="cols-span-1">
            <h2 className="text-4xl font-bold mb-2">{book.bookName}</h2>
            <h3 className="text-xl mb-3">By: {book.author}</h3>
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
            <div className="my-4">
                <h2>Number of Pages: <span className="font-bold">{book.totalPages}</span> </h2>
                <h2>Publisher:<span className="font-bold">{book.publisher}</span></h2>
                <h2>Year of Publishing: <span className="font-bold">{book.yearOfPublishing}</span></h2>
                <h2>Rating: <span className="font-bold">{book.rating}</span></h2>

            </div>
            <div className="flex gap-4 my-12">
            <button onClick={handelApplyBook} className="btn w-28">Read</button>
            <button onClick={()=>handleWishList(book.bookId)} className="btn w-28 btn-accent text-white">Wishlist</button>
            </div>
        </div>
        </div>
        <ToastContainer />
        </div>
    );
};

export default BookDetailes;