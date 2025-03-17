import React, { useState, useEffect } from "react";
import "../styles/Preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    loading && (
      <div className="preloader">
        <h1>Barış Can Yönel</h1>
        <div className="loader"></div>
      </div>
    )
  );
};

export default Preloader;
