import { useEffect, useState } from "react";
import ServiceBook from "../ServiceBook";


const Services = () => {
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch('Data/Data.json')
            .then(res => res.json())
            .then(data => setBook(data));
    }, [])
    return (
        <div>
            <div>
                <div className="hero p-8 bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Book Service</h1>
                            <p className="py-6">In the Realm of Shadows is a dark and atmospheric thriller that plunges readers into a world of mystery, suspense, and supernatural intrigue.</p>
                            <button className="btn bg-[#4cd137] text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    book.map(bok => <ServiceBook key={bok.bookId} bok={bok}></ServiceBook>)
                }
            </div>
        </div>
    );
};

export default Services;