import BookmarkSVG from "./SVGs/BookmarkSVG.tsx";
import CartSVG from "./SVGs/CartSVG.tsx";
import ChatSVG from "./SVGs/ChatSVG.tsx";
import LogoutSVG from "./SVGs/LogoutSVG.tsx";
import ProfileSVG from "./SVGs/ProfileSVG.tsx";
import SettingsSVG from "./SVGs/SettingsSVG.tsx";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-[1rem] min-h-[4rem] top-0 left-0 w-full z-50">
      <div class='container mx-auto flex items-center'>
        <div class="flex justify-start items-center mx-3">
          <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-9 w-10">
            <ChatSVG />
          </div>
          <div className="me-6 p-2">
            <a className="font-bold normal-case text-xl">Sitename</a>
          </div>
        </div>
      </div>
        <div className="navbar-center hidden lg:flex bg-[#13192b] p-3 rounded-full shadow-2xl ">
          <ul className="font-medium mx-6 flex flex-row px-1 gap-4">
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/orders">Orders</a>
            </li>
            <li>
              <a href="/messages">Messages</a>
            </li>
          </ul>
        </div>
      <div className="bg-[#13192b] me-6 flex gap-5 items-center p-4 rounded-full shadow-2xl mx-3">
        <a href='/' className='cursor-pointer'>
          <ProfileSVG />
        </a>
        <a href='/' className='cursor-pointer'>
          <BookmarkSVG />
        </a>
        <a href='/' className='cursor-pointer'>
          <CartSVG />
        </a>
        <a href='/' className='cursor-pointer'>
          <SettingsSVG />
        </a>
        <a href='/' className='cursor-pointer'>
          <LogoutSVG />
        </a>
      </div>
    </div>
  );
}
