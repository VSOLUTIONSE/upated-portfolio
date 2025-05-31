import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-4 py-10 mx-auto max-w-contentContainer xl:py-32"
    >
      <p className="flex items-center text-lg font-semibold tracking-wide font-titleFont text-textGold">
        Have an idea?
      </p>
      <h2 className="text-4xl font-semibold sml:text-5xl font-titleFont">Get In Touch</h2>
      {/* <p className="max-w-[600px] text-center text-textDark">
        Looking for a frontend developer to bring your vision to life? Whether
        it’s crafting pixel-perfect UIs, building scalable apps, or
        optimizing performance. I am always open to new opportunities,
        collaborations, and discussions on building exceptional digital
        experiences.
      </p> */}
      <p className="max-w-[600px] text-center text-textDark">
       
        I crafting pixel-perfect UIs, build scalable apps, and 
        optimize performance. I am always open to new opportunities,
        collaborations, and mentorship on building exceptional digital
        experiences.
      </p>

      <a href="mailto:femmaje@gmail.com">
        <button className="w-40 mt-6 text-sm tracking-wider duration-300 border rounded-md h-14 border-textGold font-titleFont text-textGold hover:bg-hoverColor">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
