import Image from "next/image";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-orange-600/20 " />
      <h1 className="text-3xl mt-2 text-black font-bold mb-5">
        Welcome to the Amazon Web Scrapper
      </h1>
      <h2 className="text-lg italic text-center text-black/50">
        This website uses Brighdata Scraper in order to obtain Amazon&apos;s product information. It uses cloud functions from Firebase, which allow it set up a Webhook event listener that would capture the data given by Brightdata Asynchronously. 
        All the functionality is achieved also by using API endpoints
        and RESTful architecture in order to create records inside a Firestore Database.
        <br />

        <span className="text-orange-500">API&apos;s, Webhooks, Cloud Functions and Nextjs are just some of the skills outlined on this project. </span>
      </h2>
    </div>
  );
}
