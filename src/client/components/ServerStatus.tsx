import { useEffect, useState } from "react";

export const ServerStatus = () => {
  const [status, setStatus] = useState("");

  const getData = async () => {
    try {
      const res = await fetch("/api/health");
      const data = await res.json();
      setStatus(data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-large text-center">Server Status</h1>
      <p className="text-center">Status: <span className="text-green-400 text-center">{status}</span></p>
    </div>
  );
};
