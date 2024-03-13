import { FaBookmark } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Card = ({ card, handleBookMark, handleRead }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = card;

  return (
    <>
      <div className="card w-full bg-base-100 rounded-md">
        <figure>
          <img className="w-full" src={cover} alt={title} />
        </figure>
        <div className="card-body px-0 py-4 space-y-3">
          <div className="flex justify-between items-center">
            <div className=" flex justify-center items-center gap-3">
              <img className=" w-14" src={author_img} alt="" />
              <div>
                <h1 className=" text-lg font-bold text-black">{author}</h1>
                <h4>{posted_date}</h4>
              </div>
            </div>
            <div className=" flex justify-center items-center gap-3">
              <p className=" text-black text-lg">
                <span className=" text-purple-700">{reading_time}</span> min
                read
              </p>
              <button onClick={() => handleBookMark(card)}>
                <FaBookmark></FaBookmark>
              </button>
            </div>
          </div>
          <h2 className="card-title font-bold text-4xl">{title}</h2>
          <div className=" flex items-center gap-4">
            {hashtags.map((tag, ind) => (
              <li className=" list-none" key={ind}>
                #{tag}
              </li>
            ))}
          </div>

          <div>
            <button
              onClick={() => handleRead(card)}
              className=" text-[#6047EC] underline"
            >
              Mark as read
            </button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default Card;
