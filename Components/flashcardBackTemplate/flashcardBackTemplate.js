import MediaPreview from "../mediaPreview/mediaPreview";

const FlashcardBackTemplate = ({
  backText = "",
  onBackTextChange,
  onBackFileChange,
  readOnly = false,
  backFile = null,
  backFileName = null,
  backFileUrl = null,
}) => {
  const hasMedia = backFile || backFileUrl;

  return (
    <div className={`flashcardBackTemplate ${readOnly ? "flashcardBackTemplate--display" : ""}`}>
      {!readOnly && <h2>Flashcard Back</h2>}
      <div className="flashcardBackTemplate__container">
        {readOnly ? (
          <>
            {backText && <p className="flashcardBackTemplate__text">{backText}</p>}
            {hasMedia && (
              <MediaPreview
                file={backFile}
                fileUrl={backFileUrl}
                fileName={backFileName}
                alt="Back of flashcard"
              />
            )}
            {!backText && !hasMedia && (
              <p className="flashcardBackTemplate__text">No back content</p>
            )}
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter the content for the flashcard back..."
              value={backText}
              onChange={(e) => onBackTextChange(e.target.value)}
            />
            <label className="flashcardBackTemplate__upload">
              Upload image, audio, or video
              <input type="file" accept="image/*,audio/*,video/*" onChange={onBackFileChange} hidden />
            </label>
            {hasMedia && (
              <MediaPreview
                file={backFile}
                fileUrl={backFileUrl}
                fileName={backFile?.name || backFileName}
                alt="Back preview"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FlashcardBackTemplate;
