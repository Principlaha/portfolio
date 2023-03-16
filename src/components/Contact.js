const Contact = () => {
  return (
    <>
      <section className="relative w-screen h-screen mt-36 bg-black z-[100]">
        <div className="flex flex-col w-[50%] absolute z-10 left-[25%]">
          <h1 className="text-5xl text-[#7ce604] text-center my-16">
            Get In Touch
          </h1>
          <label for="fname" className="text-white text-[1.1rem]">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            className="rounded-md py-4 pl-2 my-7 outline-none bg-zinc-800 text-white shadow-md shadow-zinc-500 rounded-sm"
          />
          <label for="lname" className="text-white text-[1.1rem]">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            className="rounded-md py-4 pl-2 my-7 outline-none bg-zinc-800 text-white shadow-md shadow-zinc-500 rounded-sm"
          />
          <label for="subject" className="text-white text-[1.1rem]">
            Subject
          </label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            className="rounded-md my-4 pl-2 pt-4 outline-none bg-zinc-800 h-[200px] text-white shadow-md shadow-zinc-500 rounded-sm"
          ></textarea>
          <input
            className="text-white w-fit text-start bg-[#3c7b04] rounded-md my-7 px-5 py-3 text-[1.1rem] cursor-pointer"
            type="submit"
            value="Send Message"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
