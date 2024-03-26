import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../../Utility/utility";

const Listed_Books = () => {
    const books = useLoaderData();

    const [collectBook, setCollectBook] = useState([]);
    const [displayBook, setDisplayBook] = useState([]);

    const handelBookFilter = filter => {
        if (filter === 'Sort By') {
            setDisplayBook(collectBook);
        }
        else if (parseFloat(filter) === 4.6) {
            const rattingBooks = collectBook.filter(bok => bok.rating === 4.6);
            setDisplayBook(rattingBooks);
        } else if (parseFloat(filter) === 431) {
            const numberOfPages = collectBook.filter(bok => bok.totalPages === 431);
            setDisplayBook(numberOfPages);
        } else if (parseFloat(filter) === 2023) {
            const publishYear = collectBook.filter(bok => bok.yearOfPublishing === 2023);
            setDisplayBook(publishYear);
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
                        <li onClick={() => handelBookFilter('431')}><a>Number of Pages</a></li>
                        <li onClick={() => handelBookFilter('2023')}><a>Publish Year</a></li>
                    </ul>
                </details>
            </div>

            <div>
                {displayBook.map(bok => (
                    <div key={bok.bookId} className="card card-side bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Book" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{bok.author}</h2>
                            <h2 className="card-title">{bok.bookName}</h2>
                            <p>{bok.bookName}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Read</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Listed_Books;
