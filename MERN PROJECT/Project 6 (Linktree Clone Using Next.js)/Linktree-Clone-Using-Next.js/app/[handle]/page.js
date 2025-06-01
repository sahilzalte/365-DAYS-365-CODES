import { redirect } from "next/navigation";
import clientPromise from "@/lib/mogodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = params.handle?.toLowerCase().replace(/[^a-z0-9_-]/g, "");

    const client = await clientPromise;
    const db = client.db("bittree");
    const collection = db.collection("links");

    const item = await collection.findOne({ handle });

    if (!item) {
        return notFound();
    }
    // 
    // Optional: If you want to redirect directly somewhere else:
    // redirect("https://some-url.com");

    // Or continue rendering the profile page (recommended)
    return (
        <>
        {/* // <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <div className="photo flex justify-center flex-col items-center gap-4">
                <img src={item.pic} alt="Profile" height={500} width={500} />
                <span className="font-bold text-xl text-white">@{item.handle}</span>
                <span className="desc w-80 text-center text-white">{item.desc}</span>
                <div className="links">
                    {item.links.map((linkObj, index) => (
                        <a
                            key={index}
                            href={linkObj.link.startsWith("http") ? linkObj.link : `https://${linkObj.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="bg-purple-100 py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3">
                                {linkObj.linktext}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>

      
        </>
    );
}
