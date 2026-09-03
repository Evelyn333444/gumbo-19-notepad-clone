import { useEffect, useState } from "react";
import "./mediaPreview.css";

const isImageMedia = (file, fileName) => {
  if (file?.type?.startsWith("image/")) return true;
  return Boolean(fileName?.match(/\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i));
};

const isVideoMedia = (file, fileName) => {
  if (file?.type?.startsWith("video/")) return true;
  return Boolean(fileName?.match(/\.(mp4|webm|mov|ogg)$/i));
};

const isAudioMedia = (file, fileName) => {
  if (file?.type?.startsWith("audio/")) return true;
  return Boolean(fileName?.match(/\.(mp3|wav|ogg|m4a)$/i));
};

const MediaPreview = ({ file = null, fileUrl = null, fileName = null, alt = "Media preview" }) => {
  const [previewUrl, setPreviewUrl] = useState(fileUrl);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreviewUrl(fileUrl);
  }, [file, fileUrl]);

  useEffect(() => {
    if (!isExpanded) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsExpanded(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded]);

  if (!previewUrl) return null;

  const openPreview = (event) => {
    event.stopPropagation();
    setIsExpanded(true);
  };

  const closePreview = (event) => {
    event?.stopPropagation();
    setIsExpanded(false);
  };

  if (isImageMedia(file, fileName)) {
    return (
      <>
        <button type="button" className="mediaPreview__thumb" onClick={openPreview} aria-label="View larger image">
          <img src={previewUrl} alt={alt} className="mediaPreview__image" />
        </button>
        {isExpanded && (
          <div className="mediaPreview__overlay" onClick={closePreview} role="presentation">
            <button type="button" className="mediaPreview__close" onClick={closePreview} aria-label="Close preview">
              ×
            </button>
            <img
              src={previewUrl}
              alt={alt}
              className="mediaPreview__expanded"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </>
    );
  }

  if (isVideoMedia(file, fileName)) {
    return (
      <video
        src={previewUrl}
        controls
        className="mediaPreview__video"
        onClick={(event) => event.stopPropagation()}
      />
    );
  }

  if (isAudioMedia(file, fileName)) {
    return (
      <audio
        src={previewUrl}
        controls
        className="mediaPreview__audio"
        onClick={(event) => event.stopPropagation()}
      />
    );
  }

  return null;
};

export default MediaPreview;
