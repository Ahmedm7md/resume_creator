import { useContext } from 'react';
import { allStates } from '../App';
import".//resume.css"

export const Resume=()=>{
    const{
        name,
        education,
        experince,
        training,
        skills,
        character,
        summary,
        birth,
        birthPlace,
        nationality,
        phone,
        gmail,
        facebook,
        previews
    }=useContext(allStates)
    return(
            <div id='fullResume' >
                    <div id='name'>
                        <h1 id='fullName'>{name}</h1>
                    </div>
                    <div id='rightSide'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <li className='header'>EDUCATION</li>
                    <p className='mar'>{education}</p>
                    <li className='header'>WORK EXPERINCES</li>
                    <p className='mar'>{experince}</p>
                    <li className='header'>TRAININGS</li>
                    <p className='mar'>{training}</p>
                    <li className='header'>PERSONAL SKILLS</li>
                    <p className='mar'>{skills}</p>
                    <li className='header'>CHARACTER REFERNCE</li>
                    <p className='mar'>{character}</p>
                    </div>
                    
                    <div id='leftSide'>
                        <h4>personal summery:</h4>{summary}
                        <br></br>
                        <br></br>
                        <h4>PROFILE:</h4>
                        <p>birth date:{birth}</p>
                        <p>birth place:{birthPlace}</p>
                        <p>nationality:{nationality}</p>
                        <br></br>
                        <br></br>
                        <p>phone no.:{phone}</p>
                        <p>gmail:{gmail}</p>
                        <p>facebook:{facebook}</p>
                    </div>
                    <div>
                    {previews&& previews.map((pic)=>{
                        return <img src={pic} id='resumePic'/>
                    })}</div>
            </div>
    )
}