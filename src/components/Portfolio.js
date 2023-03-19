import Image from "next/image";
import data from "../data";

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-screen h-auto mt-64">
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
              <div className="relative top-[-95%] text-center text-white pt-4 text-center z-[100]">
                <h3 className="text-xl font-bold ">{cards.heading}</h3>
                <p className="text-lg px-24 pt-12">
                  <span className="relative text-[#B0FC38] font-bold opacity-100 z-[100]">
                    Tools & Technologies used:{" "}
                  </span>
                  {cards.mainInfo}
                </p>
              </div>
              <a
                className="text-white text-xl bg-[#3c7b04] hover:bg-[#466d1d] top-[75%] left-[37%] px-6 py-3 absolute tracking-wide rounded-md z-[100]"
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
