import React, { useState, useEffect } from 'react';
import './style.css'
import {Project, Modal} from '../../components/index';
import { useParams } from 'react-router';
import axios from 'axios'

export default () => {
    const { proj } = useParams()
    const [active, setActive] = useState()
    const [projects, setProjects] = useState()

    useEffect(() => {
        async function fetchPosts(){
            try{
                const { data } = await axios.get("https://msvalen.netlify.app/.netlify/functions/api/projects")
                console.log(data)
                setProjects(data.data)
            }catch(e){
                console.log(e)
            }
        }
        if(proj){
            urlProj(proj)
        }
        fetchPosts()
    }, [])

    function renderTags(){
        console.log(projects)
    }

    function renderProjects(){
        return projects.map((project,i) => (<Project key={i} {...project} customClickEvent={() => handleSelect(i)}/> ))
    }
    function urlProj(proj){
        p =  projects.find(x => x.title==proj)
        console.log(p)
        setActive(p)
        return p
        
    }
    function handleSelect(number){
        setActive(projects[number])
    }
    function destroy(){
        setActive(null)
    }
    return (
        <div className='gallery'>
            <div className='tags'>
                {projects && renderTags()}
            </div>
            <div className='galleryContainer'>
                {projects && renderProjects()}
            </div>
            {active &&
                <Modal destroy={destroy}>
                    <Project {...active}/>
                </Modal>
            }
        </div>
    )
}
