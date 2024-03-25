import { useEffect, useState } from "react";
import AllBook from "../AllBook/AllBook";

const BookList = () => {

    const [book, setBook] = useState([]);

    useEffect(() =>{
        fetch('Data/Data.json')
        .then(res => res.json())
        .then(data => setBook(data));
    }, [])

    return (
        <div>
            <div>
            <h1 className="text-4xl font-bold text-center">Books: {book.length}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    book.map(bok => <AllBook key={bok.bookId} bok={bok}></AllBook>)
                }
            </div>
        </div>
    );
};

export default BookList;