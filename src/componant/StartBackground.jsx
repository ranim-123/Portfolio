import React, { useEffect, useState } from "react";
function StartBackground() {
  const [start, setStart] = useState([]);
  const [meteors, setMeteors] = useState([]);
  useEffect(() => {
    generateStart();
    generateMeteors();
    window.addEventListener("resize", generateStart);
    return () => {
      window.removeEventListener("resize", generateStart);
    };
  }, []);
  function generateStart() {
    const numberOfStarts = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const NewStarts = [];
    for (let i = 0; i < numberOfStarts; i++) {
      NewStarts.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opecity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
     
    }
     setStart(NewStarts);
  }
  function generateMeteors() {
    const numberOfMeteos =5;

    const NewMeteors = [];
    for (let i = 0; i < numberOfMeteos; i++) {
      NewMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        animationDuration: Math.random() * 3+3,
        animationDelay: Math.random() *15 ,
      });
     
    }
     setMeteors(NewMeteors);
  }
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {start.map((star) => (
       
          <div
            key={star.id}
            className="stars animate-pulse-subtle"
            style={{
              width: star.size + "px",
              height: star.size + "px",
              left: star.x + "px",
              top: star.y + "px",
              opacity: star.opacity,
              animationDuration: star.animationDuration + "s",
            }}
            
          />
        
      ))}
       {meteors.map((meteor) => (
       
          <div
            key={meteor.id}
            className="meteor animate-meteor "
            style={{
              width: meteor.size* 23 + "px",
              height: meteor.size + "px",
              left: meteor.x-25 + "%",
              top: meteor.y -21 + "%",
              animationDuration: meteor.animationDuration + "s",
              animationDelay:meteor.animationDelay-5 + "s",
            }}
            
          />
        
      ))}
    </div>
  );
}
export default StartBackground;
