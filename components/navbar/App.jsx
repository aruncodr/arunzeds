import { Menus } from "./utils";
import DesktopMenu from "./components/DesktopMenu";
import MobMenu from "./components/MobMenu";
import Image from "next/image";
import { Search } from 'lucide-react';
import Form from "next/form";
import Link from "next/link";

export default function App() {
  return (
    <div className="bg-[#111] text-gray-300 font-inter relative z-40">
      <header className="h-16 text-[15px] fixed inset-0 flex items-center bg-[#18181A] ">
        <nav className=" px-3.5 flex items-center justify-between w-full max-w-7xl mx-auto">
          <Link href='/' className="flex items-center gap-x-3 z-40 relative">
            <Image className="text-white" src='/more/logo_white_png.svg' alt="az specs" className="size-8" width={16} height={16} />
            <h3 className="text-lg text-gray-300 font-semibold">AZ specs</h3>
          </Link>

          <ul className="gap-x-1 list-none text-gray-300 lg:flex items-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          
          <div className="flex items-center gap-x-5">
            <div className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center">
              <Form action={"/search"} className="flex">
                <input name='query' className="hidden bg-transparent lg:flex w-44 outline-none" />
                <button role="button"><Search/></button>
              </Form>
            </div>
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
