// import neural from "../neural.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]   dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="navbar">
          <div className="flex-1">
            {/* <img src={neural} alt="logo" /> */}
            <button className="btn btn-ghost text-xl text-lime-400">
              Web-Summarizer
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
