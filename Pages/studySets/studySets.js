import createStudySet from "../../Components/createStudySet/createStudySet";
import pendingStudySet from "../../Components/pendingStudySet/pendingStudySet";

const studySets = () => {
  return (
    <div className="studySets">
        <div className="studySets__container">
            <h1 className="studySets__title">
                Study Sets
            </h1>
            <div className="studySets__content">
                <div className="studySets__nav">
                    <ul>
                        //this is going to be a button that will render a pop-up, where the user can create a study set, name it, and give it a description.     
                        <li><a href="/studySets/create">Create a New Study Set</a></li>
                        <li><a href="/studySets/search">Search Study Sets</a></li>
                        <li><a href="/studySets/collaborate">Collaborate on Study Sets</a></li>
                        <p>If you create a study set, you can invite others to study the set or add to it. You just need their account usernames.
                        As the creator of the study set, you can determine if you want certain collaborators to have full access to the study set, or if you want them to only be able to view it.
                        Only the original creator of the study set can delete the project or remove collaborators, not those that have been granted permission to edit it.
                        Additionally, you can search for your friends' study sets and request to collaborate, for which you will need both their username and the study set name.
                    </p>
                    </ul>
                </div>
                <div className="studySets__main">
                    //This will show the completed study sets that the user has created, and the ones that they have been invited to collaborate on. 
                    //add search bar for username and study set name, and a button to send a request to collaborate. 
                    <div className="studySets__created">
                        <createdStudySet />
                    </div>
                    <div className="studySets__pending">
                        <pendingStudySet />
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default studySets    