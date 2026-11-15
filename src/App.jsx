import React from 'react'
import Card from './components/Card'

const App = () => {


  const jobs = [
    {
      brandLogo: "https://cdn.simpleicons.org/google",
      name: "Google",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/amazon",
      name: "Amazon",
      datePosted: "5 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 65,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/meta",
      name: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 55,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/apple",
      name: "Apple",
      datePosted: "3 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 40,
      location: "Pune, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/netflix",
      name: "Netflix",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 75,
      location: "Gurugram, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/microsoft",
      name: "Microsoft",
      datePosted: "4 days ago",
      post: "Python Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 50,
      location: "Noida, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/adobe",
      name: "Adobe",
      datePosted: "6 days ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 42,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/nvidia",
      name: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 80,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/ibm",
      name: "IBM",
      datePosted: "10 weeks ago",
      post: "Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 35,
      location: "Chennai, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/oracle",
      name: "Oracle",
      datePosted: "1 month ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 60,
      location: "Gurugram, India"
    }
  ];

  return (
    <div className='parent'>
      {jobs.map(function (elem, idx) {
        return <div key={idx}>
          <Card logo={elem.brandLogo} company={elem.name} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App
