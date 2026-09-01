const homepage = () => {
  return (
    <div className="homepage">
        <div className="homepage__container">
            <headerHome />
            <div className="homepage__welcome">
                <h1 className="homepage__title">Welcome to ??App-Name??</h1>
                <p className="homepage__description">??App-Name?? is a free study application that allows you to create and manage your study materials. Create flashcards, quizzes, and more to help you study effectively.</p>
                <p className="homepage__introduction"> As a self-taught software developer and college graduate, not stressing about where my notes are when I need them the most matters. Whether you are a student, teacher, or lifelong learner like me, ??App-Name?? has something for everyone.</p>
            </div>
            <div className="homepage_about_me">
                <h2 className="homepage_about_me__title">About Me</h2>
                <p className="homepage_about_me__description">
                    I graduated in 2025 with a degree in Marine Sciences from the University of South Alabama. Until February 2026, I went around the country for internships, but never truly felt fulfilled moving around all the time.
                    In February 2026, I decided to apply my data analysis experience to learning software development, and starting building websites. I completed a certificate in full stack web development from Frontend Simplified in June 2026, and have been working on projects and internships since. 
                    In addition to that, I also have a certificate in basic finance (stocks, bonds, mortages, basic budgeting, and crypto), as well as basic bookeeping experience.
                    As a lifelong learner, I created this website to help myself and others with their studies. I hope you enjoy using it as much as I enjoyed creating it!
                </p>
            </div>
            <div className="additional_information">
                <h3 className="additional_information__title">Help me to help you!</h3>
                <p className="additional_information__description">
                    Web designers thrive on user feedback, and no student should feel as if their questions go unnoticed. 
                    If you have any questions, comments, or suggestions on how this site could be better, just ask! Chances are, either someone else has the same question, or your suggestion could benefit countless more users. 
                    To contact me, click on the contact button at the top of bottom of the page, and either write an email or fill out the contact form. I will respond as soon as possible, and I will do my best to help you with your questions or concerns.
                </p>
            </div>
            <footerHome />
        </div>
    </div>
  )
}

export default homepage    