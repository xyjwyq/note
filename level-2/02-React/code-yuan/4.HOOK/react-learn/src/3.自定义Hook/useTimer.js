import { useEffect } from "react";

export default function useTimer(callback, duration) {
  useEffect(() => {
    const timer = setInterval(callback, duration);
    return () => {
      clearInterval(timer);
    };
  }, []);
}
