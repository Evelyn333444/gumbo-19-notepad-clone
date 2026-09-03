import MediaPreview from "../mediaPreview/mediaPreview";

const FlashcardFrontTemplate = ({
  frontText = "",
  onFrontTextChange,
  onFrontFileChange,
  readOnly = false,
  frontFile = null,
  frontFileName = null,
  frontFileUrl = null,
}) => {
  const hasMedia = frontFile || frontFileUrl;

  return (
    <div className={`flashcardFrontTemplate ${readOnly ? "flashcardFrontTemplate--display" : ""}`}>
      {!readOnly && <h2>Flashcard Front</h2>}
      <div className="flashcardFrontTemplate__container">
        {readOnly ? (
          <>
            {frontText && <p className="flashcardFrontTemplate__text">{frontText}</p>}
            {hasMedia && (
              <MediaPreview
                file={frontFile}
                fileUrl={frontFileUrl}
                fileName={frontFileName}
                alt="Front of flashcard"
              />
            )}
            {!frontText && !hasMedia && (
              <p className="flashcardFrontTemplate__text">No front content</p>
            )}
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter the content for the flashcard front..."
              value={frontText}
              onChange={(e) => onFrontTextChange(e.target.value)}
            />
            <label className="flashcardFrontTemplate__upload">
              Upload image, audio, or video
              <input type="file" accept="image/*,audio/*,video/*" onChange={onFrontFileChange} hidden />
            </label>
            {hasMedia && (
              <MediaPreview
                file={frontFile}
                fileUrl={frontFileUrl}
                fileName={frontFile?.name || frontFileName}
                alt="Front preview"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FlashcardFrontTemplate;
