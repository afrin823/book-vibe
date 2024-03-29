import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="p-12 rounded-xl  bg-base-200">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                    <div className="col-span-2 p-20">
                        <h1 className="text-5xl font-bold mb-6">Books to freshen up <br />your bookshelf</h1>
                        <Link to={`/Books`}>
                        <button className="btn w-48 bg-[#4cd137] text-white mt-4 text-lg">View The List</button>
                        </Link>
                    </div>
                    <div className="col-span-1">
                        <img src="https://i.ibb.co/wSgLrZ8/siege-of-terra-echoes-of-eternity-hb.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;