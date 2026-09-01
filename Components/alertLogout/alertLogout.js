const alertLogout = ({ onClose }) => {
    return (
        <div className="alert__wrapper">
            <div className="alert">
                <div className="alert__content">
                    <div className="alert__title">Are you sure you want to log out?</div>
                    <button className="btn" onClick={onClose}>
                        <span>Yes</span>
                    </button>
                    <button className="btn" onClick={onClose}>
                        <span>No</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default alertLogout;