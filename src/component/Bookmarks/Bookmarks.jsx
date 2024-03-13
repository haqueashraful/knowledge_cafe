import Bookmark from "./Bookmark";

const Bookmarks = ({bookMarkHandle, readed}) => {
    return (
        <div className="">
            <div className=" bg-[#6047EC1A] border border-[#6047EC] rounded-lg p-2 mb-5">
                <h2>Spent on read: {readed} min</h2>
            </div>  
            <div>
                <Bookmark bookMarkHandle={bookMarkHandle} />
            </div>
        </div>
    );
};

export default Bookmarks;