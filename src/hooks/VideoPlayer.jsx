import React, { useState, useEffect, useRef, useCallback } from "react";

const VideoPlayer = ({ item }) => {
  const videoRef = useRef(null);
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    isMuted: true,
    isFullScreen: false,
    isIntersecting: false,
  });

  const togglePlay = useCallback(() => {
    const { isPlaying } = playerState;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlayerState((prevState) => ({ ...prevState, isPlaying: !isPlaying }));
  }, [playerState]);

  const toggleAudio = useCallback(() => {
    const { isMuted } = playerState;
    videoRef.current.muted = !isMuted;
    setPlayerState((prevState) => ({ ...prevState, isMuted: !isMuted }));
  }, [playerState]);

  const toggleFullScreen = useCallback(() => {
    const { isFullScreen } = playerState;
    if (!isFullScreen) {
      videoRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setPlayerState((prevState) => ({
      ...prevState,
      isFullScreen: !isFullScreen,
    }));
  }, [playerState]);

  const handleIntersection = useCallback(
    (entries) => {
      const entry = entries[0];
      setPlayerState((prevState) => ({
        ...prevState,
        isIntersecting: entry.isIntersecting,
      }));
      if (entry.isIntersecting) {
        if (playerState.isPlaying) {
          videoRef.current.play();
        }
      } else {
        videoRef.current.pause();
      }
    },
    [playerState]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [handleIntersection]);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setPlayerState((prevState) => ({
        ...prevState,
        isFullScreen: !!document.fullscreenElement,
      }));
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  return (
    <div className="video-container">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          poster={item.posterImg}
          playsInline
          autoPlay
          muted={playerState.isMuted}
        >
          <source src={item.urlVideo} type="video/webm" />
          <source src={item.urlVideo} type="video/mp4" />
        </video>
        <div className="custom-controls">
          <button onClick={togglePlay}>
            {playerState.isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={toggleAudio}>
            {playerState.isMuted ? "Unmute" : "Mute"}
          </button>
          <button onClick={toggleFullScreen}>
            {playerState.isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
