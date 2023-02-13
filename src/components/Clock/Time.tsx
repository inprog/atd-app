import { useEffect, useState } from "react";

const Time = (interval: number) => {
  const [time, updateTime] = useState(Date.now());

  useEffect(() => {
    const timeout = setTimeout(() => updateTime(Date.now()), interval);
    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  return time;
};

export { Time };
