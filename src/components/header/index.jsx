import { GrNotification } from "react-icons/gr";
import MenuItem from "../MenuItem/MenuItem";

const Header = () => {
  const menuItems = [
    { title: "Dashboard", link: "#" },
    { title: "Master Price", link: "#" },
    { title: "Custom Price", link: "#" },
    { title: "Calendar", link: "#" },
    { title: "Report", link: "#" },
  ];

  return (
    <header className="bg-primary py-3 flex justify-between items-center px-[15rem] fixed w-full">
      <ul className="text-white flex gap-10">
        {menuItems.map((item, index) => (
          <MenuItem key={index} title={item.title} link={item.link} />
        ))}
      </ul>
      <div className="text-white flex items-center gap-2">
        <GrNotification className="" />
        <div>
          <img
            src="https://i.ibb.co/xDGxphN/rohed.jpg"
            className="w-[2rem] h-[2rem] rounded-full"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
