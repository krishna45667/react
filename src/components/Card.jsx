
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  console.log(props)
  return (
    <div>
      <div className='card'>
        <div className='top'>
        <img src={props.companyLogo} alt="" />
        <button>Save <Bookmark size={12}/></button>
  </div>

      <div className='center'>
        <h3>{props.company} <span>{props.dateposted}</span></h3>
        <h2>{props.post}</h2>

        <div className='tags'>
        <span className='tag'>{props.tag1}</span>
        <span className='tag'>{props.tag2}</span>
    </div>
  </div>

      <div className='bottom'>
        <div>
          <h3>{props.salary}</h3>
          <p>{props.location}</p>
    </div>
    
    <button className='apply-btn'>Apply Now</button>
  </div>
</div>
        

    </div>
  )
}

export default Card
