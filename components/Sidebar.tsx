'use client'

import { db } from "@/firebase";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { orderBy, collection, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarRow from "@/components/SidebarRow";
import Link from "next/link";


 
const Sidebar = () => {
  //returns the data inside the database and orders it by it's creation date. 
  const [snapshot, loading, error] = useCollection(query(collection(db, 'searches'), orderBy("start_eta", "desc")))
  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto
    border-b border-orange-500/50">
      <Link href={'/'}>
      <div className="flex flex-col items-center justify-center mb-10">
        <DocumentMagnifyingGlassIcon
          className="h-16 md:w-16 
            text-orange-600"
        />
        

        <h1 className="hidden text-center md:inline text-3xl mt-2">Web Scraper</h1>
        <h2 className="hidden text-center md:inline text-xs italic">Scraping the Unscrapable</h2>
      </div>
      </Link>
      <ul className="flex flex-col gap-2 py-2 overflow-x-auto">
        {snapshot?.docs.map(doc => (
          <SidebarRow key={doc.id} doc={doc}/>
        ))}

      </ul>
    </div>
  );
};

export default Sidebar;
