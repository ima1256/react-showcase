import React, { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

const CustomAudioVisualizer = () => {

  const waveformRef = useRef(null)
  const waveSurferInstance = useRef(null)

  useEffect(() => {
    // Initialize WaveSurfer
    waveSurferInstance.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "violet",
      progressColor: "purple",
    });

    navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
        waveSurferInstance.current.loadDecodedBuffer(stream)
    })

    return () => {
      // Cleanup on unmount
      if (waveSurferInstance.current) {
        waveSurferInstance.current.destroy();
      }
    };
  }, []);

  return <div ref={waveformRef} style={{ width: "100%", height: "100px" }} />;
};

export default CustomAudioVisualizer;
