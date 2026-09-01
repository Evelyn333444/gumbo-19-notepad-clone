const pendingStudySet = () => {
  return (
    <div className="pendingStudySet">
      <h2>Pending...</h2>
      <div className="pendingStudySet__container">
        <div className="pendingStudySet__user">
            <h3>Username of creator:</h3>
        </div>
        <div className="pendingStudySet__name">
          <h4>Study Set Name</h4>
        </div>
        <div className="pendingStudySet__description">
            <h5>Description:</h5>
        </div>
      </div>
    </div>
  )
}

export default pendingStudySet