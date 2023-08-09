import { useContext, useEffect, useState } from 'react';
import { allStates } from '../App';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from"yup"
import {yupResolver} from "@hookform/resolvers/yup"
import './/home.css'

export const Home=()=>{

    const schema=yup.object().shape({
        fullName:yup.string().required("your Full name is required"),
        education:yup.string().required("specify your education journy"),
        training:yup.string().required("your trainings are required"),
        skills:yup.string().required("Enter some of your personal skills"),
        character:yup.string().required("Enter your character reference"),
        summary:yup.string().required("please give us a summary about you"),
        birth:yup.string().required("Enter your birth date"),
        birthPlace:yup.string().required("Enter your birth location"),
        nationality:yup.string().required("Enter your nationality"),
        gmail:yup.string().email().required("please enter a valid email"),
    })

    const{
        setName,
        setEducation,
        setExperince,
        setTraining,
        setSkills,
        setCharacter,
        setSummary,
        setBirth,
        setBirthPlace,
        setNationality,
        setPhone,
        setGmail,
        setFacebook,
        files,
        setFiles,
        previews,
        setPreviews
    }=useContext(allStates)

    const navigate=useNavigate()

    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })

    const onSubmit=(data)=>{
        console.log(data)
        navigate("resume")
    }

   
    useEffect(()=>{
        if(!files)return;

        let tmp=[];
        for(let i =0;i<files.length;i++){
            tmp.push(URL.createObjectURL(files[i]));
        }
        const objectUrls=tmp;
        setPreviews(objectUrls)
        for(let i =0;i<objectUrls.length;i++){
            return()=>{
                URL.revokeObjectURL(objectUrls[i])
            };
        }
    },[files]);

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("fullName")} onChange={(event)=>setName(event.target.value)} type="text" className='inputs' placeholder="Full Name..." />
                <p className='errors'>{errors.fullName?.message}</p>
                <br></br>
                <input {...register("education")} onChange={(event)=>setEducation(event.target.value)} type="text" className='inputs' placeholder="Education..."/>
                <p className='errors'>{errors.education?.message}</p>
                <br></br>
                <input onChange={(event)=>setExperince(event.target.value)} type="text" className='inputs' placeholder="work experince...(optional)"/>
                <br></br>
                <br></br>
                <br></br>
                <input {...register("training")} onChange={(event)=>setTraining(event.target.value)} type="text" className='inputs' placeholder="Training..."/>
                <p className='errors'>{errors.training?.message}</p>
                <br></br>
                <input {...register("skills")} onChange={(event)=>setSkills(event.target.value)} type="text" className='inputs' placeholder="personal skills..."/>
                <p className='errors'>{errors.skills?.message}</p>
                <br></br>
                <input {...register("character")} onChange={(event)=>setCharacter(event.target.value)} type="text" className='inputs' placeholder="Character reference..."/>
                <p className='errors'>{errors.character?.message}</p>
                <br></br>
                <input {...register("summary")} onChange={(event)=>setSummary(event.target.value)} type="text" className='inputs' placeholder="About you..."/>
                <p className='errors'>{errors.summary?.message}</p>
                <br></br>
                <input {...register("birth")} onChange={(event)=>setBirth(event.target.value)} type="text" className='inputs' placeholder="Birth date..."/>
                <p className='errors'>{errors.birth?.message}</p>
                <br></br>
                <input {...register("birthPlace")} onChange={(event)=>setBirthPlace(event.target.value)} type="text" className='inputs' placeholder="Birth location..."/>
                <p className='errors'>{errors.birthPlace?.message}</p>
                <br></br>
                <input {...register("nationality")} onChange={(event)=>setNationality(event.target.value)} type="text" className='inputs' placeholder="Nationality..."/>
                <p className='errors'>{errors.nationality?.message}</p>
                <br></br>
                <input onChange={(event)=>setPhone(event.target.value)} type="text" className='inputs' placeholder="Phone number..."/>
                <br></br>
                <br></br>
                <br></br>
                <input {...register("gmail")} onChange={(event)=>setGmail(event.target.value)} type="text" className='inputs' placeholder="Gmail..."/>
                <p className='errors'>{errors.gmail?.message}</p>
                <br></br>
                <input onChange={(event)=>setFacebook(event.target.value)} type="text" className='inputs' placeholder="Facebook...(optional)"/>
                <br></br>
                <br></br>
                <br></br>
                <h3 id='choosePicH3'>Choose personal pic:</h3>
                <input {...register("pic")} type='file'
                 accept='image/jpg,image/jpeg,image/png'
                  multiple
                  onChange={(e)=>{
                    if (e.target.files && e.target.files.length>0){
                        setFiles(e.target.files);
                    }
                  }}
                  id='inputPic'
                  />
                  <br></br>
                  {previews&& previews.map((pic)=>{
                    return <img src={pic} id='homePic'/>
                  })}
                <br></br>
                <br></br>
                <br></br>
                <button id='btn'>submit</button>
            </form>
        </div>
    )
}