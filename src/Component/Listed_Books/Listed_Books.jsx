import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../../Utility/utility";
// import { FaUsers } from "react-icons/fa";
// import { IoDocumentSharp } from "react-icons/io5";
// import { CiLocationOn } from "react-icons/ci";  
import ReadBookCard from "../list_book/ReadBookCard";
const Listed_Books = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const books = useLoaderData();

    const [collectBook, setCollectBook] = useState([]);
    const [displayBook, setDisplayBook] = useState([]); 

    const handelBookFilter = (filter,page) => {

        if (filter === 'Sort By') {
            setDisplayBook(collectBook);
        }
        else if (parseFloat(filter) === 4.6) {
            const rattingBooks = collectBook.filter(bok => bok.rating === 4.6);
            setDisplayBook(rattingBooks);
        } 
        // else if (parseFloat(filter) === 421) {
        //     const numberOfPages = collectBook.filter(bok => bok.totalPages === 421);
        //     setDisplayBook(numberOfPages);
        // } 
        else if (parseFloat(filter) === 2024) {
            const publishYear = collectBook.filter(bok => bok.yearOfPublishing === 2024);
            setDisplayBook(publishYear);
        }else if(page =="page"){
            const totalPages = collectBook.sort((a,b)=>b.totalPages - a.totalPages);  
            setDisplayBook(totalPages)

        }
    }
    

    useEffect(() => {
        const storeBooksIds = getStoredBookApplication();
        if (books.length > 0) {
            const bookCollection = storeBooksIds.map(bookId =>
                books.find(bok => bok.bookId === bookId)
            ).filter(Boolean);
            setCollectBook(bookCollection);
            setDisplayBook(bookCollection);
        } 
    }, [books])
 
 
    return (
        <div>
            <div className="w-full bg-slate-200 p-8 rounded-xl">
                <h2 className="text-5xl font-bold text-center">Books</h2>
            </div>
            <div className="text-center my-8">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#4cd137] text-white text-xl">Open or Close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handelBookFilter('Sort By')}><a>Sort By</a></li>
                        <li onClick={() => handelBookFilter('4.6')}><a>Rating</a></li>
                        <li onClick={() => handelBookFilter('421',"page")}><a>Number of Pages</a></li>
                        <li onClick={() => handelBookFilter('2024')}><a>Publish Year</a></li>
                    </ul>
                </details>
            </div>

            {/* tab area start */}
            <div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center md:justify-center lg:justify-start flex-nowrap  dark:text-gray-800">
                <Link 
                onClick={() => {
                    setTabIndex(0) 
                }} 
                to=''
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link
                onClick={() => {
                    setTabIndex(1)
                  
                }}
                to={`whish_list`} 
                className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
                
                </div>
                
            </div>
            <Outlet></Outlet>
            {/* tab area end */}
 
 {
    displayBook.map(items=><ReadBookCard items={items} key={items.bookId} />)
 }
        </div>
    );
};

export default Listed_Books;
