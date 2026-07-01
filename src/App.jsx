<<<<<<< HEAD
import React from 'react'
import Card from './components/Card'


const App = () => {

  const jobs = [

  {
    id: 1,
    companyLogo: "https://up.yimg.com/ib/th/id/OIP.PYoQX7lb-3MgsxHPrTPrMgHaHv?pid=Api&rs=1&c=1&qlt=95&w=115&h=120",
    companyName: "Amazon",
    datePosted: "2 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$120/hr",
    location: "Seattle, USA"
  },
  {
    id: 2,
    companyLogo: "https://up.yimg.com/ib/th/id/OIP.uBYsSL7JDekYP3VpxWZvYQHaHa?pid=Api&rs=1&c=1&qlt=95&w=83&h=83",
    companyName: "Google",
    datePosted: "1 day ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$145/hr",
    location: "San Francisco, USA"
  },
  {
    id: 3,
    companyLogo: "https://up.yimg.com/ib/th/id/OIP.Ko2MIOzzDlWu8a_1Xo8UAQHaEK?pid=Api&rs=1&c=1&qlt=95&w=131&h=73",
    companyName: "Netflix",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$160/hr",
    location: "Los Angeles, USA"
  },
  {
    id: 4,
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    salary: "$95/hr",
    location: "Menlo Park, USA"
  },
  {
    id: 5,
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "7 days ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$175/hr",
    location: "Cupertino, USA"
  },
  {
    id: 6,
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$155/hr",
    location: "Redmond, USA"
  },
  {
    id: 7,
    companyLogo: "https://up.yimg.com/ib/th/id/OIP.0VRVNiaT3oAG7kzm1fmwpgHaEK?pid=Api&rs=1&c=1&qlt=95&w=177&h=99",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Embedded Systems Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$130/hr",
    location: "Austin, USA"
  },
  {
    id: 8,
    companyLogo: "https://tse3.mm.bing.net/th/id/OIP.uI2jp3YvHR18LHqMlHEAYAHaEK?pid=Api&P=0&h=180",
    companyName: "Nvidia",
    datePosted: "Today",
    post: "ML Infrastructure Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$180/hr",
    location: "Santa Clara, USA"
  },
  {
    id: 9,
    companyLogo: "https://up.yimg.com/ib/th/id/OIP.j56gzk49LS4_fMWubGYKCAHaGu?pid=Api&rs=1&c=1&qlt=95&w=121&h=110",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "UX Researcher",
    tag1: "Part Time",
    tag2: "Junior Level",
    salary: "$85/hr",
    location: "San Jose, USA"
  },
  {
    id: 10,
    companyLogo: "https://up.yimg.com/ib/th/id/OIP.7FzBf3Kxd0RtNloMTIsMPQHaHa?pid=Api&rs=1&c=1&qlt=95&w=111&h=111",
    companyName: "Uber",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$135/hr",
    location: "New York, USA"
  }
]
console.log(jobs)


  return (
    <div className ='parent'>
      {jobs.map((job)=>(
        <Card 
          key ={job.id}
          companyLogo = {job.companyLogo}
          company = {job.companyName}
          dateposted = {job.datePosted}
          post = {job.post}
          tag1 = {job.tag1}
          tag2= {job.tag2}
          salary = {job.salary}
          location = {job.location} />

      ))}


    </div>
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
>>>>>>> e7ac5feec5aa2a894bf2f4e6d3da92cef55fc83e
  )
}

export default App
