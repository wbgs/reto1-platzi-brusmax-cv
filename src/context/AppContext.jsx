import React, { createContext } from "react";

// This hardcoded text is ugly but is only to mock tests
const data = {
  "name": "Melissa Walsh",
    "profession": "FrontEnd Developer",
    "address": "Bogotá, Colombia.",
    "email": "melissa@example.com",
    "website": "https://example.com",
    "phone": "3042034240",
    "avatar": "https://arepa.s3.amazonaws.com/melissa.jpg",
    "Profile": "Ignore the squirrels, you'll never catch them anyway hack, for floof tum, tickle bum, jellybean footies curly toes climb leg roll over and sun my belly, ",
    "certificate": [
      {
        "date": "Jan 2021",
        "description": "Hack up furballs try to jump onto window and fall while scratching at wall. ",
        "institution": "Platzi",
        "name": "FrontEnd Developer"
      },
      {
        "date": "Jan 2021",
        "description": "Scratch at the door then walk away wack the mini furry mouse",
        "institution": "Platzi",
        "name": "Backend Developer"
      }
    ],
    "Academic": [
      {
        "degree": "Atomic Master",
        "description": " I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms",
        "endDate": "Jan 2017",
        "institution": "MIT",
        "startDate": "Jan 2018"
      },
      {
        "degree": "Space Engineering",
        "description": "Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ",
        "endDate": "Decenber 2015",
        "institution": "Harvard",
        "startDate": "Jan 2017"
      },
      {
        "degree": "Space Engineering",
        "description": "Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ",
        "endDate": "Decenber 2015",
        "institution": "Harvard",
        "startDate": "Jan 2017"
      }
    ],
    "experience": [
      {
        "company": "PugStar",
        "endDate": "Present",
        "jobDescription": "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
        "jobTitle": "Frontend",
        "startDate": "Jan 2020"
      },
      {
        "company": "CatStore",
        "endDate": "Jan 2016",
        "jobDescription": "Meow in empty rooms lick left leg for ninety minutes, still dirty.",
        "jobTitle": "Backend",
        "startDate": "Sept 2019"
      },
      {
        "company": "Platzi",
        "endDate": "Jan 2021",
        "jobDescription": "Meow in empty rooms lick left leg for ninety minutes, still dirty.",
        "jobTitle": "Backend",
        "startDate": "Sept 2021"
      }
    ],
    "skills": [
      {
        "name": "HTML5",
        "percentage": "75%"
      },
      {
        "name": "CSS",
        "percentage": "25%"
      },
      {
        "name": "JavaScript",
        "percentage": "55%"
      },
      {
        "name": "React",
        "percentage": "90%"
      }
    ],
    "interest": [
      "javascript",
      "develop",
      "backend",
      "frontend"
    ],
    "languages": [
      {
        "name": "Spanish",
        "percentage": "90%"
      },
      {
        "name": "English",
        "percentage": "50%"
      },
      {
        "name": "French",
        "percentage": "20%"
      }
      
    ],
    "social": [
      {
        "name": "facebook",
        "url": "https://facebook.com/"
      },
      {
        "name": "twitter",
        "url": "https://twitter.com/"
      },
      {
        "name": "github",
        "url": "https://github.com/"
      },
      {
        "name": "linkedin",
        "url": "https://www.linkedin.com/"
      }
    ]
}

const AppContext = React.createContext(data);

export const useAppContext = () => useContext(AppContext);
export default AppContext;