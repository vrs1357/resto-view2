import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import { IoIosSettings, IoMdNotifications } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";

const HomeButton = () => (
  <div className="flex content-center gap-2 ml-7">
    <FaHome className="self-center size-5" />
    <p className="self-center">Home</p>
  </div>
);

const AnalyticsButton = () => (
  <div className="flex content-center gap-2 ml-7">
    <MdAnalytics className="self-center size-5" />
    <p className="self-center">Analytics</p>
  </div>
);

const NotificationButton = () => (
  <div className="flex content-center gap-2 ml-7">
    <IoMdNotifications className="self-center size-5" />
    <p className="self-center">Notifications</p>
  </div>
);

const CutomersButton = () => (
  <div className="flex content-center gap-2 ml-7">
    <FaPeoplePulling className="self-center size-5" />
    <p className="self-center">Customer Interface</p>
  </div>
);

const SettingButton = () => (
  <div className="flex content-center gap-2 ml-7">
    <IoIosSettings className="self-center size-5" />
    <p className="self-center">Settings</p>
  </div>
);

const LogOutButton = () => (
  <div className="flex content-center gap-2 ml-7">
    <IoLogOut className="self-center size-5" />
    <p className="self-center">Logout</p>
  </div>
);

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-[240px] flex flex-col bg-black h-full text-white gap-5">
      <div className="flex content-center gap-2 m-4">
        <Image
          src="/assets/resto-logo.png"
          alt="main icon"
          width={50}
          height={50}
          className="my-4"
        />
        <h1 className="self-center text-3xl">restoview</h1>
      </div>
      <Link href={"/resto-view/homeView"}>
        <HomeButton />
      </Link>
      <Link href={"/resto-view/clientView"}>
        <AnalyticsButton />
      </Link>
      <NotificationButton />
      <Link href={"/resto-view/userView"}>
        <CutomersButton />
      </Link>

      <div className="flex flex-col gap-5 mt-auto mb-10">
        <SettingButton />
        <LogOutButton />
      </div>
    </nav>
  );
}
