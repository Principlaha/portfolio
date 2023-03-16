import ParticleBackground from "./ParticleBackground";

const Header = () => {
  return (
    <>
      <ParticleBackground />
      <header className="w-screen h-[90vh]">
        <div className="w-[60%] absolute top-[40%] left-[20%] text-white leading-[7rem] text-center">
          <h1 className="text-10xl tracking-wider">
            Hello I'm
            <br />
            <span className="text-[#7ce604]">Gurjeet Kaur</span>
          </h1>
          <h3 className="text-3xl tracking-wider">Full-Stack Web Developer</h3>
        </div>
      </header>
    </>
  );
};

export default Header;
