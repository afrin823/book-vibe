import { useEffect, useState } from "react";
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
        else if (filter === 4.6) {
            const rattingBooks = collectBook.filter(bok => bok.rating === 4.6);
            setDisplayBook(rattingBooks)

        } else if (filter === 431) {
            const numberOfPages = collectBook.filter(bok => bok.totalPages === 431);
            setDisplayBook(numberOfPages);
        } else if (filter === 2023) {
            const publishYear = collectBook.filter(bok => bok.yearOfPublishing === 2023);
            setDisplayBook(publishYear);
        }
    }


    useEffect(() => {
        const storeBooksIds = getStoredBookApplication();
        if (books.length > 0) {
            // const bookCollection = books.filter(bok => storeBooksIds.includes(bok.bookId))
            const bookCollection = [];
            for (const bookId of storeBooksIds) {
                const bok = books.find(bok => bok.bookId === bookId);
                if (bok) {
                    bookCollection.push(bok);
                }
            }
            setCollectBook(bookCollection);
            setDisplayBook(bookCollection);
            // console.log(books,storeBooksIds,bookCollection);
        }
    }, [books])
    return (
        <div>
            <div className="w-full bg-slate-200 p-8 rounded-xl">
                <h2 className="text-5xl font-bold text-center">Book</h2>
            </div>
            <div className="text-center my-8 ">
                <details className="dropdown ">
                    <summary className="m-1 btn bg-[#4cd137] text-white text-xl">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handelBookFilter('Sort By')}><a>Sort By</a></li>
                        <li onClick={() => handelBookFilter(4.6)}><a>Ratting</a></li>
                        <li onClick={() => handelBookFilter(431)}><a>Number of Page</a></li>
                        <li onClick={() => handelBookFilter(2023)}><a>Publush Year</a></li>
                    </ul>
                </details>
            </div>

            {/* <ul>
                {
                    displayBook.map(bok => <li key={bok.bookId} >
                        <span>{bok.rating} {bok.totalPages}: {bok.bookClick}: {bok.yearOfPublishing}</span>
                    </li>)
                }
            </ul> */}
            <div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New movie is released!</h2>
                        <p>Click the button to watch on Jetflix app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>

    );
};

export default Listed_Books;