import "./alertLogout.css";

const AlertLogout = ({ onConfirm, onCancel, loading = false, errorMsg = "" }) => {
  return (
    <div className="alert__wrapper">
      <div className="alert">
        <div className="alert__content">
          <div className="alert__title">Are you sure you want to log out?</div>
          {errorMsg && <p className="alert__error">{errorMsg}</p>}
          <div className="alert__actions">
            <button
              type="button"
              className="btn alert__btn--confirm"
              onClick={onConfirm}
              disabled={loading}
            >
              {loading ? "Logging out..." : "Yes"}
            </button>
            <button
              type="button"
              className="btn alert__btn--cancel"
              onClick={onCancel}
              disabled={loading}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertLogout;
