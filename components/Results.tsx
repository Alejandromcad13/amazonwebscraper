import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  results: Product[];
};

const Results = ({ results }: Props) => {
  return <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full ">
    {results.map(result => (
        <Link target="_blank" href={result.url} key={result.url} className="flex flex-col space-x-4 
        w-full bg-white rounded-lg shadow-md p-5">
            <Image width={100} height={100} src={result.image} alt={result.title} className="object-contain w-full h-40 py-5"></Image>
            <div className="flex flex-col py-5 flex-1">
                <p className="font-bold">{result.title}</p>
                <p className="text-sm text-yellow-500 mt-5">
                    {result.rating} ({result.reviews} reviews)
                </p>

                <div>
                    <p className="font-bold text-orange-500 pt-2 text-xl mt-auto">
                        {result.price > 0 ? `$${result.price}` : "N/A"}
                    </p>

                    {result.previous_price > 0 && (
                        <p className="font-bold text-orange-500/50 line-through pt-2 text-xl mt-auto">
                            ${result.previous_price}
                        </p>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 justify-center mt-5 ">
                    
                    {result.features.map(feature => (
                        feature && (
                            <p className="text-xs bg-orange-500 px-2 py-1 text-white rounded-md" key={feature}>{feature}</p>
                        )
                    ))}
                </div>
            </div>
        </Link>
    ))}
  </div>;
};

export default Results;
