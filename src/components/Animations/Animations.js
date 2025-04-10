import { useEffect, useState, useRef, forwardRef } from "react";
import anime from "animejs";
import "./Animations.scss";
import { gsap } from "gsap";
import { HotKeys } from "react-hotkeys";
import { useKeyboard } from "use-keyboard";

const Animations = () => {
  const [broken, setBroken] = useState(false);

  const expansion = 300;

  const duration = 2000;

  const svgRef = useRef(null);

  const tl = gsap.timeline();


  window.addEventListener('keydown', (event) => {

    if (event.key === "Enter") {
      console.log("enter");
      tl.clear()
      tl.to(svgRef.current, {
        y: 0,
        opacity: 1,
      });
    }
  })


  useEffect(() => {
    if (broken) {
      tl.to(svgRef.current, {
        y: -200,
        duration: 1,
        ease: "power1.out",
      }).to(svgRef.current, {
        y: 200,
        opacity: 0,
        duration: 2,
        ease: "power2.in",
      });

      const animation = anime({
        targets: ".piece",
        translateX: () => anime.random(-400, 400),
        translateY: () => anime.random(-400, 400),
        borderRadius: ["0%", "50%"],
        opacity: [1, 0],
        duration: 3000,
        easing: "easeOutQuad",
        loop: false,
      });

      animation.play();

      setTimeout(() => {
        animation.reverse();
        animation.play();
        setTimeout(() => {
          setBroken(false);
        }, 3000);
      }, 3000);
    }
  }, [broken]);

  // window.oncontextmenu = (e) => {
  //   e.preventDefault();
  //   setBroken(false);
  // };

  return (
    <div className="animations-wrap w-full flex items-center justify-center text-white overflow-hidden">
      <MySvg ref={svgRef} />
      <div className="w-[300px] h-[300px]">
        {!broken ? (
          <div
            onClick={() => setBroken(true)}
            className="cursor-pointer w-full h-full bg-red-500 breakable"
          >
            Animations
          </div>
        ) : (
          <div className="pieces-container w-full h-full grid grid-cols-10 grid-rows-10">
            {Array.from({ length: 100 }).map((_, index) => (
              <div key={index} className="piece bg-red-500"></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const MySvg = forwardRef((_, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="www.w3.org/2000/svg"
      width="100"
      height="100"
      style={{ border: "1px solid black" }}
    >
      {/* <text x="0" y="50" font-size="24" stroke="blue" stroke-width='1' >
          Imanol Conde Gonzalez
        </text> */}
      <circle cx="50" cy="50" r="40" fill="red" />
      {/* <path d="M10 10 L100 100" stroke="green" /> */}
    </svg>
  );
});

export default Animations;
