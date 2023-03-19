const About = () => {
  return (
    <>
      <section id="about" className="w-screen h-screen mt-64">
        <h1 className="text-5xl text-center text-[#7ce604] pt-24">About Me</h1>
        <div className="w-[70%] absolute left-[15%] mx-auto mt-16 p-16 text-white text-[1.1rem] z-10 bg-gray-700 rounded-xl">
          <div className="absolute w-full h-full bg-zinc-900 opacity-100 z-[-10] top-0 left-0 shadow-lg shadow-gray-500 rounded-xl"></div>
          <p>
            Hello there! I'm Gurjeet Kaur. As a full stack JavaScript developer,
            I have a diverse set of skills that allow me to build and maintain
            both the front-end and back-end components of web applications. My
            portfolio includes a range of projects that demonstrate my expertise
            in various areas of web development, including:
          </p>
          <ul className="list-disc list-inside py-3">
            <li className="py-3">
              <span className="text-[#7ce604] pr-2 font-bold">
                Front-end Development:
              </span>{" "}
              I have built multiple responsive and intuitive user interfaces
              using HTML, CSS, and JavaScript, implementing various design
              patterns and best practices to deliver exceptional user
              experiences.
            </li>
            <li className="py-3">
              <span className="text-[#7ce604] pr-2 font-bold">
                Back-end Development:
              </span>{" "}
              I have experience working with Node.js, Express, and other popular
              frameworks to build APIs, create and manage databases, and
              implement server-side logic.
            </li>
            <li className="py-3">
              <span className="text-[#7ce604] pr-2 font-bold">
                Full Stack Development:
              </span>{" "}
              I have built full-stack web applications, including e-commerce
              websites, social media platforms, and online marketplaces, using a
              combination of front-end and back-end technologies.
            </li>
            <li className="py-3">
              <span className="text-[#7ce604] pr-2 font-bold">
                Deployment and Maintenance:
              </span>{" "}
              I have experience deploying web applications to cloud platforms
              like AWS and Azure, and managing them using tools like Docker,
              Kubernetes, and Git.
            </li>
            <li className="py-3">
              <span className="text-[#7ce604] pr-2 font-bold">
                Collaboration and Communication:
              </span>{" "}
              I have collaborated with teams of developers, designers, and
              stakeholders to deliver projects on time and on budget, using
              agile development methodologies and effective communication
              strategies.
            </li>
          </ul>
          <p>
            Overall, my portfolio showcases my ability to build robust,
            scalable, and maintainable web applications using JavaScript and
            related technologies. Whether working independently or as part of a
            team, I am committed to delivering high-quality, well-documented
            code that meets the needs of clients and end-users alike.
          </p>
          <p className="text-[#7ce604] pt-10 font-bold">
            {" "}
            Tools & technologies I've worked with:{" "}
            <span className="text-white font-normal">
              Javascript | Typescript | ReactJs | NextJs | VueJs | AngularJs |
              Redux | VueJs | AngularJs | NodeJs | GoLang | Cadence Flow
              Blockchain | HTML | CSS | SCSS | LESS | Micro-Frontends | Tailwind
              CSS | Rest API | MySQL| PostgreSQL | StorybookJs | Context API |
              Apollo GraphQl | Linux | Jest | React Testing Library | Git | TDD
              | Agile | MongoDB | Expressjs | Jenkins | Python | Django | Flask
              | Docker | Kubernetes | Amazon AWS cloud services | Oracle |
              Terraform | GitOps | Gitlab CI/CD | Azure | Ansible
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
