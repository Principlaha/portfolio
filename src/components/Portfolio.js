import Image from "next/image";
import data from "../data";

const Portfolio = () => {
  return (
    <section className="w-screen h-auto mt-64">
      <h1 className="text-5xl text-center text-[#7ce604] pt-24">My Projects</h1>
      <div className="w-[80%] mx-auto flex justify-around flex-wrap mt-36">
        {data.map((cards, id) => {
          return (
            <div
              key={id}
              className="relative w-[35rem] h-96 bg-white mb-20 border-4 border-slate-200 shadow-md	shadow-slate-500"
            >
              <Image
                width={300}
                height={300}
                src={cards.image}
                className="w-full h-full object-cover"
              />
              <h3 className="relative top-[-95%] text-center text-white text-xl font-bold pt-4 text-center z-[100]">
                {cards.heading}
              </h3>
              <a
                className="text-white text-xl bg-[#3c7b04] border-8 border-[#3c7b04] top-[75%] left-[37%] px-3 py-1 absolute tracking-wide rounded-md z-[100]"
                href={cards.link}
              >
                Visit Github
              </a>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 hover:opacity-80"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
