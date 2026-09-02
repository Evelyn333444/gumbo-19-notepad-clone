import "./alertLogout.css";

const AlertLogout = ({ onConfirm, onCancel }) => {
  return (
    <div className="alert__wrapper">
      <div className="alert">
        <div className="alert__content">
          <div className="alert__title">Are you sure you want to log out?</div>
          <div className="alert__actions">
            <button type="button" className="btn alert__btn--confirm" onClick={onConfirm}>
              Yes
            </button>
            <button type="button" className="btn alert__btn--cancel" onClick={onCancel}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertLogout;
