import "./language.css";
import { Data } from "../Data/Data";
import { useParams, useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const code = [
  {
    value: `
        <!DOCTYPE html>
        <html>
        <head>
        <title>Page Title</title>
        </head>
        <body>
        
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        
        </body>
        </html>`,
  },
];

const Language = () => {
  const { header, subTitle } = useParams();
  const [tutorialData, setTutorialData] = useState(null);
  const [headerData, setHeaderData] = useState(null);
  const [mobaileView, setMobaile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // header fetch
    async function fetchHeader() {
      try {
        const res = await axios.get(
          `https://metacodecanvas-dvz3.vercel.app/api/v1/ReadTutorialByHeader?header=${header}`
        );
        setHeaderData(res.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    // header and Tutorial fetch
    async function fetchTutorial() {
      try {
        const response = await axios.get(
          `https://metacodecanvas-dvz3.vercel.app/api/v1/ReadTutorialByHeaderAndSubtitle?header=${header}&subTitle=${subTitle}`
        );
        setTutorialData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchHeader();
    fetchTutorial();
  }, [header, subTitle]);



  return (
    <div className="width-100 h-auto text-white w-center lanaguage ">
      <div className="container-content relative flex  md:gap-5 gap-3">
        <div className="w-60 min-h-screen sidebar">
          {/* Sidebar */}
          <div className="w-full max-h-screen bg-gray-900 flex  flex-col gap-2 md:px-2 mt-14  overflow-y-auto scroll-smooth scrollbar-hide">
            {/* sideitem */}
          
            {headerData &&
              headerData.map((value) => (
                <div
                  key={value._id}
                  className="sideitem w-full py-1 text-center hover:bg-gray-700 cursor-pointer rounded-lg "
                >
                  <span
                    className="text-gray-400 hover:text-white"
                    onClick={() =>
                      navigate(`/language/${header}/${value.subTitle}`)
                    }
                  >
                    {header} {value.subTitle}
                  </span>
                </div>
              ))}
          </div>
        </div>
        {/* mobaile view */}
        <div className="w-60 min-h-screen absolute left-0 mobaile-sidebar">
          <FaBars
            className="mt-14 ml-2 fixed cursor-pointer"
            onClick={() => setMobaile(!mobaileView)}
          />

          <div
            className={
              mobaileView
                ? "w-full max-h-screen bg-gray-900 flex  flex-col gap-2 md:px-2 mt-14 overflow-hidden overflow-y-auto scroll-smooth scrollbar-hide"
                : "hidden"
            }
          >
            {headerData &&
              headerData.map((value) => (
                <div
                  key={value._id}
                  className="sideitem w-full py-1 text-center hover:bg-gray-700 cursor-pointer rounded-lg "
                >
                  <span
                    className="text-gray-400 hover:text-white"
                    onClick={() =>
                      navigate(`/language/${header}/${value.subTitle}`)
                    }
                  >
                    {header} {value.subTitle}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* other part */}

        <div className="w-full h-auto flex flex-col md:px-5 gap-5 mt-14 px-3 overflow-hidden hover:overflow-y-auto scroll-smooth scrollbar-hide pt-3">
          {/* item */}
        

          {tutorialData &&
            tutorialData[0].content.map((value) => (
              <div className="flex flex-col md:px-5 px-0 gap-2" key={value._id}>
                <span className="pt-2 font-bold text-xl">{value.title}</span>
                <p className="text-gray-400">{value.description}</p>
                {value.code !== "" ? (
                  <>
                    <div className="max-h-[15rem] bg-gray-50 rounded-xl text-black md:px-4 px-0 py-4 overflow-hidden overflow-y-auto">
                      <SyntaxHighlighter
                        language={header}
                        customStyle={{ borderRadius: "10px", padding: "8px" }}
                        wrapLongLines={true}
                        wrapLines={true}
                      >
                        {value.code}
                      </SyntaxHighlighter>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Language;
