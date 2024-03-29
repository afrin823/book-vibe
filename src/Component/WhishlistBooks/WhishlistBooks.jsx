import { useLoaderData } from "react-router-dom";
import ReadBookCard from "../list_book/ReadBookCard";



const WhishlistBooks = () => {
    const books = useLoaderData();

    const wishId = JSON.parse(localStorage.getItem('wishListStore'));
const wishDataArray = books.filter(items=> wishId?.includes(items.bookId));
console.log(wishDataArray);
    return (
        <div>
{
               wishDataArray?.map(items=><ReadBookCard items={items} key={items.bookId} />)

}
        </div>
    );
};

export default WhishlistBooks;