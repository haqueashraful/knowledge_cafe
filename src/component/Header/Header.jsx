import img from "../../assets/img/profile.png"
const Header = () => {
    
    return (
        <div className=" flex justify-between items-center ">
            <h1 className=" text-4xl font-bold text-black">Knowledge Cafe</h1>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Header;