import '../../styles/homeLayout.css';
import {CaretCircleLeft, CaretCircleRight, ArrowRight, CaretRight, CaretLeft} from 'phosphor-react';
import { Button, Divider} from '@mantine/core';
import { topics, categoriesCount } from '../../../public/myData';
import { blogs } from '../../../public/myData';
import {useState, useEffect} from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import { socials } from '../../../public/myData';
import { useRef } from 'react';
import { topRated } from '../../../public/myData';
import Welcome from './welcome';

export function MyNavigator(){
    const navigate = useNavigate();
    const [next, setNext] = useState(false);
    const [prev, setPrev] = useState(false);
    function handleNextClick(){
            setNext(!next);
            navigate('/contact');
        

    }
    function handlePrevClick(){
            setPrev(!prev);
            navigate('/home');
            

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
            <div className= "desktopStyle">
        <img src="/public/assets/LUX VENTUS.svg" loading="lazy" alt="Lux Ventus Logo" id="footerLogo"/>
        <div className = "innerContent">
        <p id = "footerHang">Let's Hang Out</p>
        <div id = "footerSocials">
            {socials.map((social) => (
                <div id = "iconContainer" key = {social.name}>
                    <a href={social.url}  target='_blank'><img src = {social.socialIcon}  id="iconSize" alt = {social.name}/></a>
                </div>
            ))}
            

        </div>
        </div>
        </div>
        <Divider size = 'lg' style={{margin: '48px 0', color: 'blue', width:'100%'}}/>
        <p style = {{textDecoration: 'none', color:'black'}} id="copyright">&copy;{currentYear} - Lux Ventus by NduatiQ</p>
        </div>
    )
}

export function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');

  // Sync active menu with current location
  useEffect(() => {
    const currentPath = location.pathname.substring(1);
    setActiveMenu(currentPath || 'home');
  }, [location]);

  function handleMenuClick(menu: string) {
    navigate(`/${menu}`);
    setActiveMenu(menu);
    setIsMenuOpen(false); // Close the menu after selection
  }

  return (
    <div className="mobileNav">
      <img
        src="/public/assets/LUX VENTUS.svg"
        id="navLogo"
        alt="lux ventus logo"
        loading = "lazy"
      />
      <a
        onClick={() => setIsMenuOpen((prev) => !prev)} // Toggle menu visibility
      >
        <img
          src="/public/assets/Hamburger.svg"
          style={{ width: '55px', height: '55px', cursor: 'pointer' }}
          alt="hamburger icon"
          loading = "lazy"
        />
      </a>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div className="dropdownMenu">
          {["home","fashion", "lifestyle", "spiritual", "mental-health", "contact"].map(
            (menu) => (
              <a
              key={menu}
              className={`dropdownItem ${
                activeMenu === menu ? 'active' : ''
              }`}
              id={`${menu !== 'contact' && menu !== 'home' ? 'disabledMenu' : ''}`}
              onClick={() => handleMenuClick(menu)}
              ><p>{menu}</p>
            </a>
            
            )
          )}
        </div>
      )}
    </div>
  );
}

export function DesktopNav(){
    const navigate = useNavigate();
    const location = useLocation();

//const [clickBackground, setClickBackground] = useState("");

function handleDesktopClick(name:string){
    //setClickBackground(name);
    navigate(`/${name}`); 
    
            ;
        }
        return(
            <div className = "desktopNav">
                <a onClick = {() => handleDesktopClick('home')}><img src = "/public/assets/LUX VENTUS.svg" id = "navLogo" style={{cursor: 'pointer'}} alt = "lux ventus logo"/></a>
                <div className = 'menus'>
                    {["Fashion", "Lifestyle", "Spiritual", "Mental Health"].map((menu) => (
                        <a key = {menu} id='disabledMenu'>
                            <p>{menu}</p>
                        </a>
                    ))}
                    
                    <a 
                    className={`menuItem ${location.pathname === '/contact'? 'colored':''}`}//useLocation ensures the active state is tied to the current URL path rather than relying on component state (clickBackground).
                    onClick={() => handleDesktopClick('contact')} 
                    >
                        
                        <p>Contact Us</p></a>
                </div>
                <img src="/public/assets/search icon.svg" loading = "lazy" alt="Search icon"/>
            </div>
        )
    }

export function PageTop(){
    
//const navigate = useNavigate();
     const topicContainerRef = useRef<HTMLDivElement>(null);
     function scrollLeft() {
    if (topicContainerRef.current) {
      topicContainerRef.current.scrollBy({
        left: -topicContainerRef.current.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (topicContainerRef.current) {
      topicContainerRef.current.scrollBy({
        left: topicContainerRef.current.offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  };

    return(
        
        <>
        <body>
            
            <MobileNav/>
            <DesktopNav/>
            <Welcome/>
        <div className = "myHero">
            <div id="heroText">
            <h4 id = "magName">Lux Ventus Magazine</h4>
            <h1 id = "description1">We are the <span id = "luxSpan">Ventus Fashion</span></h1>
            <p id = "description2">We like to gossip about everything, but we will never forget the daily fashion dose.</p>
        </div>
        </div>
        
            <div className = "topicTop">
                <h4>Topics</h4>
                <div id ="carets">
                <CaretCircleLeft size={46} style={{color: '#4CE0D7'}} weight="fill"  onClick={scrollLeft}/>
                <CaretCircleRight size={46} style={{color: '#4CE0D7'}} weight="fill" onClick={scrollRight} />
                </div>
</div>
          
            <div className = "topicContainer" ref={topicContainerRef}>
                {Object.entries(topics). map(([name, imagePath]) => (
                    <div className = "topicContent" key = {name} style = {{}}>
                        <img src = {imagePath} loading = "lazy" alt = {name} style = {{}}/>
                        <p>{name}</p>
                        <Button id="topicButton">View more</Button>
                    </div>
                ))}

            </div>

        
        <Divider style={{margin: "42px 34px", color: "blue"}}/>
        <div className = "layoutGrid">
        <div className = "yourHost">
            <div>
                <img src="./jurica-koletic-7YVZYZeITc8-unsplash.jpg" loading = "lazy" alt="Profile Image" id="hostImg"/>

            </div>
            <div className='hostContent'>
                <p id = "hostIntro">Your Host</p>
                <p id = 'hostName'>Mallory Reyn</p>
                <div  className = "desktopYourHost">
                    <Divider />
                    <p id = "hostPara">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Ut et massa mi. Aliquam 
                        in hendrerit urna. Pellentesque sit amet
                        sapien fringilla, mattis ligula consectetur,
                        ultrices mauris. Maecenas vitae mattis
                        tellus. Nullam quis imperdiet Vestibulum.</p>
                </div>
                <Button 
                id = "hostBtn"
                >Let's Chat</Button>
            </div>
            < div className = "hostBtns">
            {socials.map((social) => (
                <div className = "iconContainer" key = {social.name}>
                    <a href={social.url} id="iconSize" target='_blank'><img src = {social.socialIcon} alt = {social.name}/></a>
                </div>
            ))}
            </div>

        </div>
        <Divider style = {{margin:'30px 48px'}}/>
        <div className='newsLetter'>
            <h4>Newsletter</h4>
            <Divider style={{margin:'30px 0'}}/>
            <p id="newsLetterInfo">Join the 36,000 Lux Ventus!</p>
            <input type='text' placeholder='Email Address' id = "newsLetterEmail" />
            <Button id="newsLetterButton">Subscribe</Button>
            <p id = "newsLetterPara">Rest assured! You’re gonna have 
                                    a lot of fun when you press this</p>
        </div>
        <Divider />
        <div className = "blogCont">
            {blogs.map((blog, index) => (
                <div className = {`blogContent ${
                    blog.category === 'trending' ? 'trendingClass':
                    blog.category === 'summer' ? 'summerClass':
                    blog.category === 'Beauty Tips'? 'trendingClass':
                    blog.category === 'Fashion'? 'fashionClass':
                    blog.category === 'Mental health'? 'fashionClass':
                    blog.category === 'Ensembles'? 'fashionClass':
                    ''
                }`}                
                key = {index}>
                    <div className= "diffCard">
                    <img id="blogImg" loading = "lazy" src = {blog.blog} alt = {blog.Topic} />                    
                    <div id ='blogCategory'>{blog.category}</div>
                    </div>
                    <div className = "diffCard2">
                    <div className = "authorDetails">
                        <img src={blog.AuthorPic} alt={blog.AuthorName} loading = "lazy" id ="authorimg" style = {{width:'40px', height:'40px', borderRadius:'50%'}}/>
                        <p id = 'blogAuthor' style={{marginLeft:'-6%'}}>{blog.AuthorName}</p>
                        <p id = 'blogAuthor'>{blog.Date}</p>
                    </div>
                    
                    <h4 id = "blogTitle">{blog.Topic}</h4>
                    <p id="blogPara">{blog.content}</p>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'8px', marginTop:'10px'}}>
                        <ArrowRight size={12} id = "arrRight" />
                        <a id = "readMore" href = "" target="blank">READ MORE</a>
                    </div>
                    </div>
                </div>
                
            ))}
        </div>
        
        <div className= "topRated">
            <h3 id = "categoriesH3">Top Rated</h3>
            
            {topRated.map((post, index) => (
                <>
                <Divider style={{margin: '30px 0', width:'80%', marginLeft: '3vw'}}/>
                <div className = "topRatedContent" key = {index}>
                    
                    <img id="topRatedImg" loading = "lazy" src = {post.img} alt = {post.heading}/>
                    <div className= 'ratedInnerContent'>
                        <p id="topRatedHeading">{post.heading}</p>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center', gap:'8px', marginTop:'10px'}}>
                        <ArrowRight size={12} id = "arrRight" />
                        <a id = "readMore" href = "" target="blank">READ MORE</a>
                    </div>
                    </div>

                </div>
                </>
            ))}

        </div>

        <div className = "Categories">
            <h3 id="categoriesH3">Categories</h3>
            {categoriesCount.map((category, index)=> (
                <>
                <Divider style={{margin: '30px 0', width:'80%', marginLeft: '12px'}}/>
                <div className = "oneCategory" key={index}>
                    <p id = "categoriesPara">{category.category}</p>
                    <div className = "numberCircle">
                        <p id="categoriesStats">{category.number}</p>
                    </div>

                </div>
                </>
            ))}
        </div>

        <div className = "navigator">
        <MyNavigator/>
       </div>
        <Divider/>
         </div>
         <Divider size = 'lg' style={{margin: '4px 0', color: 'blue', width:'100%'}}/>
        <Footer />
        </body>
        </>
    )
}