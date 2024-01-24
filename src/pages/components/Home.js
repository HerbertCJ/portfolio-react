import { useEffect, useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [
    "HTML5",
    "CCS3",
    "JavaScript",
    "TypeScript",
    "Angular",
    "React",
    "React Native",
    "NextJS",
    "Redux ToolKit",
    "Zustand",
    "Tailwind CSS",
    "BootStrap",
    "Material UI",
    "Styled Components",
    "SASS",
    "Node.js",
    "NestJS",
    "MongoDB",
    "MySQL",
  ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delta, text]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  return (
    <div className="intro-wrapper" id="home">
      <div className="intro-bg">
        <div className="main-info">
          <h1>front-end developer</h1>
          <h2 className="typed-text">
            - <span>{`${text}`}</span> -
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
