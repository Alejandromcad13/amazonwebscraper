"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";

const Header = () => {
  const [value, setValue] = useState("");
  const router =  useRouter()

  //function that triggers the search and activates the scraper, sends the form input to the api endpoints
  //and there i will initiate an API call to start the scraper, which will then notify the cloud function
  // when it's finished, and the cloud function will store the results in the db
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = value;
    console.log(input)

    if(!input){
      return;
    }

    const notification =  toast.loading(`Starting a scraper for: ${input}`)

    try {
      //call our API to activate the scrapper 
      const response = await fetch('/ActivateScrapper', {
        method:'POST',
        headers:{
          "Content-type": "application/json"
        }, 
        body: JSON.stringify({search: input})
      })
      const fetchedData = await response.json();

      const {collection_id, start_eta} = fetchedData;
      //redirect the user to the url search/job_id 
      router.push(`/search/${collection_id}`)
      toast.success("Scraping started succesfully! results will show in a few seconds", {
        id: notification
      })
      //clear the input 
      setValue('')

    } catch (e) {
      //handle error
      toast.error("Whoops... something went wrong", {
        id: notification
      })
      setValue('')
      console.log(e)
    }
    
  };

  return (
    <header>
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-2 
        justify-center rounded-full py-2 px-4 bg-orange-100 max-w-md
        mx-auto "
      >
        <input
          className="flex-1 outline-none bg-transparent text-orange-400
          placeholder:text-orange-300"
          type="text"
          placeholder="search..."
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
        />
        <button type="submit" hidden></button>
        <MagnifyingGlassIcon className="h-6 w-6 text-orange-600" />
      </form>
    </header>
  );
};

export default Header;
