const Navigation = () => {
  return (
    <div className="w-[90%] mx-auto mt-8 flex justify-between text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-12 h-12 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
        />
      </svg>
      <ul className="w-[40%] flex justify-between text-xl text-[#7ce604] tracking-widest">
        <li>
          <a className="border-b-4 pb-1" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="border-b-4 pb-1" href="#news">
            Portfolio
          </a>
        </li>
        <li>
          <a className="border-b-4 pb-1" href="#contact">
            About
          </a>
        </li>
        <li>
          <a className="border-b-4 pb-1" href="#about">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
