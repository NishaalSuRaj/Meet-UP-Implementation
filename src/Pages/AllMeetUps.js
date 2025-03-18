import { useEffect, useState } from "react";

import MeetupList from "../Components/meetups/MeetupList";



function AllMeetUps() {
  const [isLoading,setIsLoading] = useState(true)
  const [loadedMeetups , setLoadedMeetups] = useState([])
  useEffect(()=>{
    setIsLoading(true);
    fetch('https://react-get-started-81ed8-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
       return response.json();
    }).then(data =>{
      setIsLoading(false);

      const meetups =[];
      for (const key in data)
      {
        const meetup ={
          id : key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setLoadedMeetups(meetups);
    });
  },[]);
 
  if(isLoading){
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
        
  return (
    <div>
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
      </section>
    </div>
  );
}

export default AllMeetUps;
