import MainLayout from "../layouts/MainLayout";

const About = () => {
    return (
        <MainLayout title="About Us | Let's Eat">
            <div className="container text-center d-flex flex-column flex-grow-1">
                <img src="/logo.svg" alt="logo" width="80" height="60" className="icon align-self-center"></img>
                <h1 className="mt-4"><span className='logo-txt'>About Let's Eat</span></h1>
                <p id='about-p'>Welcome to my project, Let's Eat! I have created a full stack web application for users to browse restaurants and save them
                    to user created folders. Users can also take note of their review for each saved restaurant. I used React for the frontend, Python's FastApi for the backend, PostgreSQL for the 
                    database, and Python/Postman for testing. Future work on this project would include the ability to add and interact with friends, edit and delete 
                    profile information, and the ability to search or filter to more quickly find restaurants that a user has saved.
                </p>
            </div>
        </MainLayout>
    );
};

export default About; 