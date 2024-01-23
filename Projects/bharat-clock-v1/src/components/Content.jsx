import { useEffect, useState } from "react";

function Content() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="content">
        <div>This is the clock that shows the time in Bharat at all times</div>
        <div>
          This is the current time: {time.toLocaleDateString("en-GB")} -{" "}
          {time.toLocaleTimeString()}
        </div>
      </div>
    </>
  );
}

export default Content;
