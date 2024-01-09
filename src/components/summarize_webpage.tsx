import axios from "axios";
import { useState } from "react";

const SummarizeWebpage = () => {
  // const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handlesubmit = (e: any) => {
    e.preventDefault();
    const inputUrl = e.target[0].value;
    setLoading(true);
    axios
      .post("https://web-summarizer-production.up.railway.app/summary", {
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
      <div className="mt-44">
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Enter URL"
            className="input input-bordered input-warning w-full max-w-md"
            // onChange={(e) => setUrl(e.target.value)}
          />
          <button className="btn btn-active btn-primary ml-2">Summarize</button>
        </form>
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
    </>
  );
};

export default SummarizeWebpage;
