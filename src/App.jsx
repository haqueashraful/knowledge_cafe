import { useState } from "react";
import Bookmarks from "./component/Bookmarks/Bookmarks";
import Cards from "./component/Cards_container/Cards";
import Header from "./component/Header/Header";

function App() {

  const [bookMarkHandle, setBookMarkHandle] = useState([])
  const [readed, setReaded] = useState(0)

  const handleBookMark = (card) =>{
    console.log("bookmark CLicked", card)

    const newMarked = [...bookMarkHandle, card]
    setBookMarkHandle(newMarked);
  }

  const handleRead = (card) =>{
    console.log("first", card)
    const read = card.reading_time + readed
    setReaded(read)

    setBookMarkHandle(bookMarkHandle.filter(bookmark => bookmark.id !== card.id));
  }

  return (
    <div className=" mx-28">
      <Header />
      <div className="divider"></div>
      <div className="flex justify-center w-full gap-4">
        <div className="w-2/3">
          <Cards handleBookMark={handleBookMark} handleRead={handleRead}/>
        </div>
        <div className=" w-1/3">
          <Bookmarks bookMarkHandle={bookMarkHandle} readed={readed} />
        </div>
      </div>
    </div>
  );
}

export default App;
