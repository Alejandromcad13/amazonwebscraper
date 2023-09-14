import { NextRequest, NextResponse } from "next/server";
import { adminDB } from "@/firebaseAdmin";
import { Timestamp } from "firebase-admin/firestore";

type Data = {
  collection_id: string;
  start_eta: number;
};

export async function POST(req: NextRequest) {
    const now = Timestamp.now();
  const data = await req.json();
  const search = data.search;

  try {
    const res = await fetch(
      "https://api.brightdata.com/dca/trigger?collector=c_llofxvi443tzswpan",
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${process.env.BRIGHTDATA_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search: search }),
      }
    );

    const dataFromBrightData: Data = await res.json();

    const { collection_id, start_eta } = dataFromBrightData;

    console.log(dataFromBrightData);

    await adminDB.collection('searches').doc(collection_id).set({
        search,
        start_eta, 
        status: 'pending',
        updatedAt: now
    })

    return NextResponse.json({ 
      collection_id,
      start_eta
    })
  } catch (e) {
    throw new Error("Error initiating the brightdata scraper");
  }
}
