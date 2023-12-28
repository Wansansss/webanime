import Image from "next/image";
import Link from "next/link";

const ListAnime = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime,index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer hover:text-indigo-800 transition-all"
          key={index}
          >  
            <Image
              src={anime.images.webp.image_url}
              alt=""
              width={350}
              height={350}
              className="w-full max-h-64"
            />
            <h3 className="font-bold md:text-xl text-md p-3">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default ListAnime;
