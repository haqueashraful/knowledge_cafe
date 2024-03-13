
import Cart from "./Cart";

const Bookmark = ({bookMarkHandle}) => {
    console.log(bookMarkHandle)
    return (
        <div className=" bg-[#1111110D] p-2 space-y-2 rounded-lg">
            <h2>Bookmarked Blogs : {bookMarkHandle.length}</h2>
            {
                bookMarkHandle.map((data, ind) => <Cart data={data} key={ind} ind={ind}/>)
            }
        </div>
    );
};

export default Bookmark;