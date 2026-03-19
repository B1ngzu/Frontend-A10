import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import Link from "next/link";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex items-center px-10 py-3 bg-gray-800 shadow-md gap-4">
      {session ? (
        <Link href="/api/auth/signout" className="mr-2 px-4 py-2 text-white font-medium hover:text-gray-300">
          Sign-Out
        </Link>
      ) : (
        <Link href="/api/auth/signin" className="px-4 py-2 text-white font-medium hover:text-gray-300">
          Sign-In
        </Link>
      )}
      <TopMenuItem title="My Booking" pageRef="/mybooking" />
      <div className="flex-grow" />
      <TopMenuItem title="Booking" pageRef="/booking" />
      <Image src="/img/logo.png" alt="Logo" width={50} height={50} className="object-contain" />
    </nav>
  );
}
