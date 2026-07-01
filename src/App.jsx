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
  )
}

export default App
