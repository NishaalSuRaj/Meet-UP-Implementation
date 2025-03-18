import { useNavigate } from 'react-router-dom';


import NewMeetUpPage from "../Components/meetups/NewMeetUpPage";


function NewMeepUps()
{
    const navigate = useNavigate();
    function addMeetupHAndler(meetupData)
    {
        

        fetch('https://react-get-started-81ed8-default-rtdb.firebaseio.com/meetups.json'
            ,{
                method:'POST',
                body: JSON.stringify(meetupData),
                header:{
                    'Content-Type' : 'application/json'
                }
            }
        ).then(()=>{
            navigate('/');
        });
        
    }
    return (
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetUpPage onAddMeetup={addMeetupHAndler} />

    </section>);
}

export default NewMeepUps;