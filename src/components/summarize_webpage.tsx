import axios from "axios";
import { useState } from "react";

const SummarizeWebpage = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inputUrl = e.target[0].value;
    setLoading(true);
    axios
      .post("https://js-web-backend-production.up.railway.app/summary", {
        url: inputUrl,
      })
      .then((response) => {
        console.log(response.data);
        setSummary(response.data.summary.content);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="sm:base-200 md:base-200 lg:base-200 xl:base-200 2xl:base-200">
        <div className="mt-40 flex items-center justify-center">
          <div className="text-center">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold text-accent">
                Web-Summarize Bot!!
              </h1>
              <p className="py-6 text-white">
                Web-Summarize is a bot which summarizes any website with the URL
                by scraping the dom with puppeter and summarizing with the help
                of gpt 3.5 turbo model!!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center w-full ml-[400px] "
          >
            <input
              type="text"
              placeholder="Enter URL"
              className="input input-bordered input-warning w-full max-w-md"
              required
              value={url}
            />
            <button className="btn btn-active btn-primary text-black ml-2">
              Summarize
            </button>
          </form>
          <div className="">
            <h2 className="text-white">Here try one of this options!!</h2>
            <ul className="menu bg-base-200 w-96 rounded-box">
              <li>
                <span
                  onClick={() =>
                    setUrl("https://contact-list-two-drab.vercel.app/")
                  }
                >
                  https://contact-list-two-drab.vercel.app/
                </span>
              </li>
              <li>
                <span
                  onClick={() =>
                    setUrl("https://sneaker-head-store.vercel.app/")
                  }
                >
                  https://sneaker-head-store.vercel.app/
                </span>
              </li>
              <li>
                <span
                  onClick={() =>
                    setUrl(
                      "https://amazon-clone-with-redux-toolkit.vercel.app/"
                    )
                  }
                >
                  https://amazon-clone-with-redux-toolkit.vercel.app/
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* card for summary */}
        <div className="flex flex-col items-center mt-10">
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body flex justify-center items-center">
              {loading ? (
                <span className="loading loading-ring w-14 h-14"></span>
              ) : summary ? (
                <p>{summary}</p>
              ) : (
                <p>Please click summarize</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummarizeWebpage;
