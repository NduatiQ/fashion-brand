import '../../styles/homeLayout.css';
import {CaretCircleLeft, CaretCircleRight, ArrowRight, CaretRight, CaretLeft} from 'phosphor-react';
import {Group, Button, Divider} from '@mantine/core';
import { topics } from '../../../public/myData';
import { blogs } from '../../../public/myData';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { socials } from '../../../public/myData';

export function MyNavigator(){
    const navigate = useNavigate();
    const [next, setNext] = useState(false);
    const [prev, setPrev] = useState(false);
    function handleNextClick(){
            setNext(!next);
            navigate('/');
        

    }
    function handlePrevClick(){
            setPrev(!prev);
            navigate('/');
            

    }
    return(
        <div className = 'navigatorCont'>
            <div id = "prev" onClick = {handlePrevClick} >
                <CaretLeft size={32}/>
                <p>PREV</p>

            </div>
            <div id = "next" onClick = {handleNextClick}>
                
                <p>NEXT</p>
                <CaretRight size={32}/>

            </div>

        
        </div>
    )
}

export function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <div className="phoneFooter">
        <img src="/public/assets/LUX VENTUS.svg" alt="Lux Ventus Logo" id="footerLogo"/>
        <p id = "footerHang">Let's Hang Out</p>
        <div className = "footerSocials">
            {socials.map((social) => (
                <div className = "iconContainer" key = {social.name}>
                    <a href={social.url} target='_blank'>{social.socialIcon}</a>
                </div>
            ))}
            

        </div>
        <Divider style={{margin: '48px 0'}}/>
        <p style = {{textDecoration: 'none', color:'black'}} id="copyright">&copy;{currentYear} - Lux Ventus by NduatiQ</p>
        </div>
    )
}
export function PageTop(){
    return(
        <>
        <body>
        <div className = "myHero">
            <h4 id = "magName">Lux Ventus Magazine</h4>
            <h1 id = "description1">We are the Ventus Fashion</h1>
            <p id = "description2">We like to gossip about everything, but we will never forget the daily fashion dose.</p>
        </div>
        
        <Group style = {{display: 'flex', flexDirection: 'column', marginTop: '32px'}}>
            <div className = "topicTop">
                <h4>Topics</h4>
                <div style={{display: 'flex'}}>
                <CaretCircleLeft size={46} style={{color: '#4CE0D7'}} weight="fill" />
                <CaretCircleRight size={46} style={{color: '#4CE0D7'}} weight="fill" /></div>'

            </div>
            <div className = "topicContainer">
                {Object.entries(topics). map(([name, imagePath]) => (
                    <div className = "topicContent" key = {name} style = {{}}>
                        <img src = {imagePath} alt = {name} style = {{}}/>
                        <p>{name}</p>
                        <Button>View more</Button>
                    </div>
                ))}

            </div>

        </Group>
        <Divider style={{margin: "42px 34px", color: "blue"}}/>
        <div className = "yourHost">
            <div>
                <img src="../../../public/assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg" alt="Profile Image"
                style={{
                    width: '85px',
                    height: '85px',
                    borderRadius: '50%',
                    border: '6px solid #4CE0D7'

                }}/>

            </div>
            <div className='hostContent'>
                <p id = "hostIntro">Your Host</p>
                <p id = 'hostName'>Mallory Reyn</p>
                <Button 
                style ={{margin: '14px 0', borderRadius:'40px'}}
                >Let's Chat</Button>
            </div>
        </div>
        <Divider style = {{margin:'30px 48px'}}/>
        <div className='newsLetter'>
            <h4>Newsletter</h4>
            <p id="newsLetterInfo">Join the 36,000 Lux Ventus!</p>
            <input type='text' placeholder='Email Address' id = "newsLetterEmail" />
            <Button id="newsLetterButton">Subscribe</Button>
        </div>
        <Divider />
        <div className = "blogCont">
            {blogs.map((blog, index) => (
                <div className = "blogContent" key = {index}>
                    <img id="blogImg" src = {blog.blog} alt = {blog.Topic} />
                    <div className = "authorDetails">
                        <img src={blog.AuthorPic} alt={blog.AuthorName} style = {{width:'40px', height:'40px', borderRadius:'50%'}}/>
                        <p id = 'blogAuthor' style={{marginLeft:'-6%'}}>{blog.AuthorName}</p>
                        <p id = 'blogAuthor'>{blog.Date}</p>
                    </div>
                    <div id ='blogCategory'>{blog.category}</div>
                    <h4 id = "blogTitle">{blog.Topic}</h4>
                    <p id="blogPara">{blog.content}</p>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'8px', marginTop:'10px'}}>
                        <ArrowRight size={12} id = "arrRight" />
                        <a id = "readMore" href = "" target="blank">READ MORE</a>
                    </div>
                </div>
                
            ))}
        </div>
        <MyNavigator/>
        <Divider/>
        <Footer />
        </body>
        </>
    )
}