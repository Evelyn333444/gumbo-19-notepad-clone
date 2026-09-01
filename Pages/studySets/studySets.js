const studySets = () => {
  return (
    <div className="studySets">
        <div className="studySets__container">
            <h1 className="studySets__title">
                Study Sets
            </h1>
            <div className="studySets__content">
                //this is going to be a button that will render a pop-up, where the user can create a study set, name it, and give it a description.     
                <h2 className="studySets__create">Create a New Study Set</h2>
                <h3 className="studySets__search">Search Study Sets</h3>
                <h4 className="studySets__collaborate">Collaborate on Study Sets
                    <p>If you create a study set, you can invite others to study the set or add to it. You just need their account usernames.
                        As the creator of the study set, you can determine if you want certain collaborators to have full access to the study set, or if you want them to only be able to view it.
                        Only the original creator of the study set can delete the project or remove collaborators, not those that have been granted permission to edit it.
                        Additionally, you can search for your friends' study sets and request to collaborate, for which you will need both their username and the study set name.
                    </p>
                    //add search bar for username and study set name, and a button to send a request to collaborate. 
                </h4>
            </div>
        </div>
    </div>
  )
}

export default studySets    