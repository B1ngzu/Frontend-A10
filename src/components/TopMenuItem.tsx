import Link from "next/link";

interface TopMenuItemProps {
  title: string;
  pageRef: string;
}

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link href={pageRef} className="px-4 py-2 text-white font-medium hover:text-gray-300">
      {title}
    </Link>
  );
}
