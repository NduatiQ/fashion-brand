import React from "react";
import { FacebookLogo, TwitterLogo, LinkedinLogo, YoutubeLogo, InstagramLogo } from "phosphor-react";
export const topics = {
    "Lingerie" : "./assets/lingerie-underwear.svg",
    "Spring" : "./assets/dress.svg"
}
const todayDate =new  Date().toDateString();
export const blogs = [
    {
    blog: "./assets/jairo-gonzalez-_yx54GhuwoE-unsplash.jpg",
    category: "summer",
    Date: `${todayDate}`,
    Topic: "The Summer 2023 Lineup is finally here",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum lorem et id phasellus platea, tortor maecenas velit. Enim natoque elit",
    AuthorPic: "./assets/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
    AuthorName: "Mallory Reyn"

        },
    {
    blog: "./assets/AdobeStock_314102091_Preview.jpeg",
    category: "trending",
    Date: `${todayDate}`,
    Topic: "Explore the latest fashion trends.",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum lorem et id phasellus platea, tortor maecenas velit. Enim natoque elit",
    AuthorPic: "./assets/AdobeStock_702987033_Preview.jpeg",
    AuthorName: "Aaron Ihuema"

        }, 
    {
    blog: "./assets/AdobeStock_1067533107_Preview.jpeg",
    category: "Beauty Tips",
    Date: `${todayDate}`,
    Topic: "Check out the best hair routines",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum lorem et id phasellus platea, tortor maecenas velit. Enim natoque elit",
    AuthorPic: "./assets/AdobeStock_1062254628_Preview.jpeg",
    AuthorName: "Carol Kanyi"

        }
    ];

    interface social {
        name: string;
        url: string;
        socialIcon: React.ReactNode;

    }
    export const socials: social[] = [
        {
        name: 'Facebook',
        socialIcon: <FacebookLogo size ={32} weight="duotone" color="white" />,
        url: 'https://www.facebook.com'
        },
        {
            name: 'Twitter',
            socialIcon: <TwitterLogo size = {32} weight="duotone" color="white"/>,
            url: ' https://twitter.com'
        },
        {
            name: "Linkedin",
            socialIcon: <LinkedinLogo size = {32} weight="duotone" color="white"/>,
            url: 'https://www.linkedin.com'
        },
        {
            name: 'Youtube',
            socialIcon: <YoutubeLogo size = {32} weight="duotone" color="white"/>,
            url: 'https://www.youtube.com'
        }, 
        {
            name: 'instagram',
            socialIcon: <InstagramLogo size = {32} weight="duotone" color="white"/>,
            url: 'https://www.instagram.com'
        }

    ];