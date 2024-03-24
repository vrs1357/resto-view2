import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { MdAnalytics } from "react-icons/md";

const HomeButton = () => (
  <div className="flex content-center gap-2 ml-5">
    <FaHome className="self-center size-5" />
    <p className="self-center">Home</p>
  </div>
);

const AnalyticsButton = () => (
  <div className="flex content-center gap-2 ml-5">
    <MdAnalytics className="self-center size-5" />
    <p className="self-center">Analytics</p>
  </div>
);

const NotificationButton = () => (
  <div className="flex content-center gap-2 ml-5">
    <IoMdNotifications className="self-center size-5" />
    <p className="self-center">Notifications</p>
  </div>
);

const CutomersButton = () => (
    <div className="flex content-center gap-2 ml-5">
      <FaPeoplePulling className="self-center size-5" />
      <p className="self-center">Customers</p>
    </div>
  );

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-[240px] flex flex-col bg-black h-full text-white gap-5">
      <div className="flex content-center gap-2 m-4">
        <Image
          src="/assets/mainicon.jpg"
          alt="main icon"
          width={50}
          height={50}
          className="my-4"
        />
        <h1 className="self-center">Restaurant Profile</h1>
      </div>
      <HomeButton />
      <AnalyticsButton />
      <NotificationButton />
      <CutomersButton />
    </nav>
  );
}
