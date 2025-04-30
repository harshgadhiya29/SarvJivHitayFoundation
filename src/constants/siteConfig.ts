import YTT1 from "../img/YoutubeThumbnail 1.jpg";
import YTT2 from "../img/YoutubeThumbnail 2.jpg";
// import Home from "../pages/HomePage";

export const siteConfig = {
  name: "Sarv Jiv Hitay Foundation",
  description: "Dedicated to the welfare of all living beings",
  tagline: "Nurturing Life, Inspiring Harmony",
  contactInfo: {
    email: "contact@sarvjivhitay.org",
    phone: "+91 98765 43210",
    address: "123 Peace Avenue, New Delhi, India 110001",
  },
  social: {
    instagram: "https://www.instagram.com/sarvjivhitayfoundation?igsh=MWJjY3l4a3l3a2Vleg==",
    youtube: "https://youtube.com/@sarvjivhitayfoundation?si=n-nwMUN-B1YehAzl",
  },
  navLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Videos", path: "/videos" },
    { name: "Contact", path: "/contact" },
  ],
};

export const teamMembers = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Founder & President",
    bio: "With over 15 years of experience in animal welfare and environmental conservation, Ananya founded the Sarv Jiv Hitay Foundation to create a sustainable impact on all living beings.",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    name: "Rajiv Mehta",
    role: "Director of Operations",
    bio: "Rajiv brings his extensive background in non-profit management to ensure our programs reach those most in need across the country.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Head of Outreach",
    bio: "A passionate advocate for community involvement, Priya develops our volunteer programs and builds meaningful partnerships.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    name: "Vikram Patel",
    role: "Environmental Specialist",
    bio: "Vikram leads our environmental initiatives, focusing on creating sustainable habitats and conservation programs.",
    image: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
];

export const galleryImages = [
  {
    id: 1,
    title: "Animal Welfare Camp",
    description: "Our team providing care for street animals in rural areas",
    category: "Events",
    image: "https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "Tree Planting Initiative",
    description: "Volunteers planting native trees to restore local ecosystems",
    category: "Environment",
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "Community Education",
    description: "Teaching children about compassion towards all living beings",
    category: "Education",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    title: "Wildlife Conservation",
    description: "Working with local authorities to protect endangered species",
    category: "Conservation",
    image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 5,
    title: "River Cleanup",
    description: "Volunteers removing plastic waste from local waterways",
    category: "Environment",
    image: "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 6,
    title: "Animal Adoption Drive",
    description: "Finding forever homes for rescued animals",
    category: "Events",
    image: "https://images.pexels.com/photos/1634840/pexels-photo-1634840.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 7,
    title: "Organic Farming Workshop",
    description: "Teaching sustainable farming practices to local farmers",
    category: "Education",
    image: "https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 8,
    title: "Community Health Camp",
    description: "Providing healthcare services to underserved communities",
    category: "Health",
    image: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800"
  },

  {
    id: 8,
    title: "Community Health Camp",
    description: "Providing healthcare services to underserved communities",
    category: "Health",
    image: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const videos = [
  {
    id: 1,
    title: "વ્યસન થી વિનાશ",
    description: "વ્યસન એક એવો માર્ગ છે જે આરામથી શરુ થાય છે પણ વિનાશ સુધી લઈ જાય છે.",
    thumbnail: {YTT1},
    url: "https://youtu.be/eE1UnJpYji4?si=HikhPDWLuEojzTmi",
  },
  {
    id: 2,
    title: "Food For Hunger ( જરૂરિયાત લોકોને ભોજન )",
    description: "ભુખ્યા પેટ માટે ભોજન એ ઈશ્વરની ભેટ છે, આવો મળીને જરૂરિયાતમંદ સુધી આ ભેટ પહોંચાડીએ.",
    thumbnail: {YTT2},
    url: "https://youtu.be/avgmKxPCJoU?si=srJEHNRMaD32X8jZ",
  }
];

export const impactStats = [
  { 
    id: 1, 
    stat: "10,000+", 
    description: "Animals Rescued",
    icon: "Paw" 
  },
  { 
    id: 2, 
    stat: "50,000+", 
    description: "Trees Planted", 
    icon: "Sprout" 
  },
  { 
    id: 3, 
    stat: "100+", 
    description: "Communities Served", 
    icon: "Users" 
  },
  { 
    id: 4, 
    stat: "5,000+", 
    description: "Volunteers Engaged", 
    icon: "Heart" 
  }
];

// Instagram posts data
export const instagramPosts = {
  posts: [
    {
      id: 1,
      caption: "Supporting local animal shelters with food and medical supplies. Every life matters! #AnimalWelfare #SarvJivHitay",
      imageUrl: "https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "April 25, 2025",
      url: "https://www.instagram.com/p/example1/"
    },
    {
      id: 2,
      caption: "Our volunteers planted 500 trees today as part of our ongoing reforestation initiative. #PlantingHope #GreenFuture",
      imageUrl: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "April 20, 2025",
      url: "https://www.instagram.com/p/example2/"
    },
    {
      id: 3,
      caption: "Teaching compassion - Today's workshop with children focused on kindness to all living beings. #Education #Compassion",
      imageUrl: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "April 15, 2025",
      url: "https://www.instagram.com/p/example3/"
    },
    {
      id: 4,
      caption: "Working with wildlife authorities to protect endangered species in their natural habitats. #WildlifeConservation",
      imageUrl: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "April 10, 2025",
      url: "https://www.instagram.com/p/example4/"
    },
    {
      id: 5,
      caption: "River cleanup campaign - Our team removed over 200kg of plastic waste from local waterways this weekend. #CleanWater",
      imageUrl: "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "April 5, 2025",
      url: "https://www.instagram.com/p/example5/"
    },
    {
      id: 6,
      caption: "Happy tails! 15 rescued animals found their forever homes at today's adoption event. #AdoptDontShop #AnimalLove",
      imageUrl: "https://images.pexels.com/photos/1634840/pexels-photo-1634840.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "April 1, 2025",
      url: "https://www.instagram.com/p/example6/"
    }
  ]
};

// Instagram videos data
export const instagramVideos = [
  {
    id: 1,
    title: "Animal Rescue Mission",
    description: "Watch our team rescue injured stray animals and provide them with medical care and shelter.",
    url: "https://www.youtube.com/embed/example1",
    instagramUrl: "https://www.instagram.com/p/example-video1/"
  },
  {
    id: 2,
    title: "Planting Hope: Community Tree Planting",
    description: "Our volunteers joined hands with the local community to plant native trees and restore green spaces.",
    url: "https://www.youtube.com/embed/example2",
    instagramUrl: "https://www.instagram.com/p/example-video2/"
  },
  {
    id: 3,
    title: "River Cleanup Drive",
    description: "Join us as we clean up plastic waste from local rivers to protect aquatic life and ensure clean water.",
    url: "https://www.youtube.com/embed/example3",
    instagramUrl: "https://www.instagram.com/p/example-video3/"
  },
  {
    id: 4,
    title: "Wildlife Conservation Efforts",
    description: "Learn about our initiatives to protect endangered species and preserve their natural habitats.",
    url: "https://www.youtube.com/embed/example4",
    instagramUrl: "https://www.instagram.com/p/example-video4/"
  }
];