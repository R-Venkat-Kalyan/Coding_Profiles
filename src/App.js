// src/App.js
import React from 'react';
import Card from './Card';
import './App.css';

const App = () => {
  const profiles = [
    { link: "https://www.codechef.com/users/klu_2100030959", imgSrc: "codechef.png", title: "CodeChef" },
    { link: "https://codeforces.com/profile/Kalyan_2100030959", imgSrc: "codeforces.png", title: "Codeforces" },
    { link: "https://leetcode.com/u/Reddy_Venkat_Kalyan/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png", title: "LeetCode" },
    { link: "https://www.hackerrank.com/profile/2100030959_Rvk", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png", title: "HackerRank" },
    { link: "https://www.stopstalk.com/user/profile/Kalyan_959", imgSrc: "Stalk.png", title: "StopStalk" }
  ];

  return (
    <div className="App">
      <h1>Explore My Coding Profiles</h1>
      <div className="container">
        {profiles.map((profile, index) => (
          <Card key={index} link={profile.link} imgSrc={profile.imgSrc} title={profile.title} />
        ))}
      </div>
    </div>
  );
};

export default App;
