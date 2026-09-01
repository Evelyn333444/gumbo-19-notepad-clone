import React from 'react'
import loggedInHeader from '../../Components/loggedInHeader/loggedInHeader'
import footerHome from '../../Components/footerHome/footerHome'
import navbar from '../../Components/navbar/navbar'

const loggedIn = () => {
  return (
    <div className="loggedIn">
        <div className="loggedIn__container">
            <loggedInHeader />
            <navbar />
            <h1 className="loggedIn__title">
                Hey there!
                Now that you are logged in, you can create and manage your study materials. Create flashcards, notepads, and more to help you study effectively.
            </h1>
            <footerHome />
        </div>    
    </div>
  )
}

export default loggedIn    