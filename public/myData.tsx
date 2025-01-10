export const topics = {
    "Lingerie" : "./assets/lingerie-underwear.svg",
    "Spring" : "./assets/dress.svg",
    "Yoga" :"./assets/chakra.svg",
    "Glow": "./assets/lipstick.svg",
    "Ensembles": "./assets/dress-wedding-dress.svg",
    "Skin Care": "./assets/mask-theater.svg"
}
const todayDate =new  Date().toDateString();

interface Blog {
  blog: string;
  category: string;
  Date: string;
  Topic: string;
  content: string;
  AuthorPic: string;
  AuthorName: string;
}

export const blogs: Blog[] = [
    {
    blog: "./assets/jairo-gonzalez-_yx54GhuwoE-unsplash.jpg",
    category: "summer",
    Date: `${todayDate}`,
    Topic: "The Summer 2023 Lineup is finally here",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,",
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

        },
        {
    blog: "./assets/AdobeStock_965831490_Preview.jpeg",
    category: "Fashion",
    Date: `${todayDate}`,
    Topic: "5 Reasons to avoid holiday shopping",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum lorem et id phasellus platea, tortor maecenas velit. Enim natoque elit",
    AuthorPic: "./assets/AdobeStock_1062254628_Preview.jpeg",
    AuthorName: "Carol Kanyi"

        },
         {
    blog: "./assets/AdobeStock_221688877_Preview.jpeg",
    category: "Mental health",
    Date: `${todayDate}`,
    Topic: "Mental health tips to cope with stress.",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum lorem et id phasellus platea, tortor maecenas velit. Enim natoque elit",
    AuthorPic: "./assets/AdobeStock_1062254628_Preview.jpeg",
    AuthorName: "Carol Kanyi"

        },
        {
    blog: "./assets/AdobeStock_896201217_Preview.jpeg",
    category: "Fashion",
    Date: `${todayDate}`,
    Topic: "10 Brands for your classy look.",
    content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Ipsum lorem et id phasellus platea, tortor maecenas velit. Enim natoque elit",
    AuthorPic: "./assets/AdobeStock_702987033_Preview.jpeg",
    AuthorName: "Aaron Ihuema"

        }
    ];

    interface social {
        name: string;
        url: string;
        socialIcon: string;

    }
    export const socials: social[] = [
        {
        name: 'Facebook',
        socialIcon: "./assets/facebook.svg",
        url: 'https://www.facebook.com'
        },
        {
            name: 'Twitter',
            socialIcon: "./assets/twitter.svg",
            url: ' https://twitter.com'
        },
        {
            name: "Linkedin",
            socialIcon: "./assets/linkedin.svg",
            url: 'https://www.linkedin.com'
        },
        {
            name: 'Youtube',
            socialIcon: "./assets/youtube.svg",
            url: 'https://www.youtube.com'
        }, 
        {
            name: 'instagram',
            socialIcon: "./assets/instagram.svg",
            url: 'https://www.instagram.com'
        }

    ];

    export const contactIcons = [
        {
            icon:'./assets/emailConta.svg',
            name:'Email',
            details:'nduatiquentine@gmail.com'
        },
        {
            icon:'./assets/phoneIcon.svg',
            name:'Phone',
            details:'+254 712 456897'
        },
        {
            icon:'./assets/iconLoca.svg',
            name:'Location',
            details:'Westlands Nairobi, Kenya'
        }
    ]

    export const topRated = [
        {
            img: "./assets/AdobeStock_955537293_Preview.jpeg",
            heading: "Happy courts vs serious edgy courts"
        },
        {
            img: "./assets/AdobeStock_1168971517_Preview.jpeg",
            heading: "10 Habits you need to pick for top styling."
        },
        {
            img: "./assets/AdobeStock_394133058_Preview.jpeg",
            heading: "This Yoga week was crazy."
        },
        {
            img: "./assets/AdobeStock_647341454_Preview.jpeg",
            heading: "Perfect summer colors to combine"
        },

    ];

    // Define the accumulator type
type CategoryCounts = Record<string, number>;

// Count the number of occurrences for each category
const categoryCounts: CategoryCounts = blogs.reduce((acc: CategoryCounts, blog: Blog) => {
  acc[blog.category] = (acc[blog.category] || 0) + 1;
  return acc;
}, {} as CategoryCounts);
    
    export const categoriesCount = [
        {
            category: "Fashion",
            number : categoryCounts['Fashion'],
        },
        {
            category: "Summer",
            number : categoryCounts['summer'],
        },
        {
            category: "Trending",
            number : categoryCounts['trending'],
        },
        {
            category: "Beauty Tips",
            number : categoryCounts['Beauty Tips'],
        },
        
    ]