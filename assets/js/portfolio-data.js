/**
 * ==============================================================================
 * SIMRIKA KHATRI - PORTFOLIO DATA CONFIGURATION
 * ==============================================================================
 * To update any information or replace photos, simply edit this file or replace
 * the corresponding image files in the assets/images/ directory!
 */

const PORTFOLIO_DATA = {
  model: {
    name: "Simrika Khatri",
    titles: [
      "Fashion & Commercial Model",
      "Runway Artist",
      "Event Host & Emcee",
      "Choreographer",
      "Pageant Winner & Mentor"
    ],
    tagline: "Confidence • Creativity • Professionalism • Stage Presence",
    location: "Kathmandu, Nepal / Available for National & Global Travel",
    bio: [
      "I’m Simrika Khatri, a young and passionate creative with a growing journey in modeling, hosting, choreography, and event coordination.",
      "I love expressing myself through fashion, performance, and the energy of the stage. From walking the runway and working on commercial shoots to hosting events and training pageant contestants, every experience has helped me become more confident, disciplined, and creative.",
      "I’m always open to learning, meeting new people, and taking on opportunities that challenge me to grow. For me, this journey is not just about being in front of the camera—it’s about confidence, creativity, professionalism, and creating an impact through my work."
    ],
    stats: {
      height: { imperial: "5'3\"", metric: "160 cm" },
      hair: "Brown",
      eyes: "Black",
      bust: { imperial: "32\"", metric: "81 cm" },
      waist: { imperial: "25\"", metric: "63 cm" },
      hips: { imperial: "34\"", metric: "86 cm" },
      shoe: { imperial: "6.5 US", metric: "37 EU" },
      dress: "XS / S"
    },
    expertise: [
      { name: "Runway Walks", desc: "High fashion, couture & trade expos", icon: "runway" },
      { name: "Stage & Event Hosting", desc: "Live emcee, anchor & presenter", icon: "mic" },
      { name: "Creative Choreography", desc: "Ramp walk sequencing & stage movement", icon: "sparkle" },
      { name: "Commercial Shoots", desc: "Brand campaigns, lookbooks & print", icon: "camera" },
      { name: "Pageant Mentorship", desc: "Contestant grooming & confidence coaching", icon: "crown" },
      { name: "Judging & Jury Panels", desc: "Talent assessment & pageant jury", icon: "award" }
    ],
    socials: {
      instagram: {
        handle: "Simrika__khatri",
        url: "https://www.instagram.com/Simrika__khatri"
      },
      tiktok: {
        handle: "simrika khatri29",
        url: "https://www.tiktok.com/@simrikakhatri29"
      },
      facebook: {
        handle: "Simrika khatri",
        url: "https://www.facebook.com/search/top?q=Simrika%20khatri"
      },
      email: {
        address: "simrikakhatri29@gmail.com",
        mailto: "mailto:simrikakhatri29@gmail.com?subject=Booking%20Inquiry%20-%20Simrika%20Khatri"
      }
    }
  },

  // Highlight metrics for the Comp Card & stats board
  highlights: [
    { number: "25+", label: "Runway & Expo Shows" },
    { number: "15+", label: "Events Hosted" },
    { number: "1st", label: "Pageant Titleholder" },
    { number: "100%", label: "Professional Dedication" }
  ],

  // 3 Curated Gallery Categories (7 photos per section)
  galleries: {
    portraits: {
      id: "portraits",
      title: "Portraits & Editorial",
      subtitle: "Studio aesthetics, high-fashion portraiture, casual chic & digital looks",
      items: [
        {
          id: "p1",
          title: "Golden Hour Glow",
          tag: "Natural Light / Portrait",
          src: "assets/images/portraits/portrait_1.svg",
          alt: "Simrika Khatri - Golden Hour Portrait",
          aspect: "portrait"
        },
        {
          id: "p2",
          title: "Minimalist Studio Digital",
          tag: "Agency Digitals",
          src: "assets/images/portraits/portrait_2.svg",
          alt: "Simrika Khatri - Studio Clean Look",
          aspect: "tall"
        },
        {
          id: "p3",
          title: "High Fashion Monochrome",
          tag: "Black & White Editorial",
          src: "assets/images/portraits/portrait_3.svg",
          alt: "Simrika Khatri - Black and White Fashion",
          aspect: "portrait"
        },
        {
          id: "p4",
          title: "Urban Chic & Street Style",
          tag: "Commercial & Casual",
          src: "assets/images/portraits/portrait_4.svg",
          alt: "Simrika Khatri - Casual Street Style",
          aspect: "square"
        },
        {
          id: "p5",
          title: "Elegance in Red",
          tag: "Editorial Showcase",
          src: "assets/images/portraits/portrait_5.svg",
          alt: "Simrika Khatri - Crimson Editorial",
          aspect: "portrait"
        },
        {
          id: "p6",
          title: "Beauty & Close-up Glow",
          tag: "Beauty & Skin",
          src: "assets/images/portraits/portrait_6.svg",
          alt: "Simrika Khatri - Beauty Close-up",
          aspect: "square"
        },
        {
          id: "p7",
          title: "Sunset Silhouette & Mood",
          tag: "Outdoor Aesthetic",
          src: "assets/images/portraits/portrait_7.svg",
          alt: "Simrika Khatri - Silhouette Art",
          aspect: "tall"
        }
      ]
    },

    runway: {
      id: "runway",
      title: "Runways, Pageants & Expos",
      subtitle: "Crowning moments, high-energy runway walks, designer showcases & expo stages",
      items: [
        {
          id: "r1",
          title: "Pageant Winner Crown Moment",
          tag: "Pageant Titleholder",
          src: "assets/images/runway/runway_1.svg",
          alt: "Simrika Khatri - Pageant Crowning Moment",
          aspect: "tall"
        },
        {
          id: "r2",
          title: "Grand Finale Runway Walk",
          tag: "Fashion Week Runway",
          src: "assets/images/runway/runway_2.svg",
          alt: "Simrika Khatri - Grand Finale Walk",
          aspect: "portrait"
        },
        {
          id: "r3",
          title: "National Expo Stage Showcase",
          tag: "Expo Model Showcase",
          src: "assets/images/runway/runway_3.svg",
          alt: "Simrika Khatri - Expo Presentation",
          aspect: "square"
        },
        {
          id: "r4",
          title: "Haute Couture Evening Gown",
          tag: "Designer Collection",
          src: "assets/images/runway/runway_4.svg",
          alt: "Simrika Khatri - Couture Gown",
          aspect: "tall"
        },
        {
          id: "r5",
          title: "Traditional Fusion Runway",
          tag: "Cultural & Ethnic Runway",
          src: "assets/images/runway/runway_5.svg",
          alt: "Simrika Khatri - Ethnic Runway",
          aspect: "portrait"
        },
        {
          id: "r6",
          title: "Press & Media Backstage",
          tag: "Behind The Scenes",
          src: "assets/images/runway/runway_6.svg",
          alt: "Simrika Khatri - Backstage Runway",
          aspect: "square"
        },
        {
          id: "r7",
          title: "Trophy & Sash Presentation",
          tag: "Awards & Recognition",
          src: "assets/images/runway/runway_7.svg",
          alt: "Simrika Khatri - Award Ceremony",
          aspect: "portrait"
        }
      ]
    },

    hosting: {
      id: "hosting",
      title: "Hosting, Judging & Choreography",
      subtitle: "Stage emcee appearances, jury panel evaluations, and pageant choreography direction",
      items: [
        {
          id: "h1",
          title: "Grand Stage Emcee & Host",
          tag: "Live Event Hosting",
          src: "assets/images/hosting/hosting_1.svg",
          alt: "Simrika Khatri - Live Stage Hosting",
          aspect: "portrait"
        },
        {
          id: "h2",
          title: "Official Jury & Judging Panel",
          tag: "Pageant Judge",
          src: "assets/images/hosting/hosting_2.svg",
          alt: "Simrika Khatri - Judging Pageant Contestants",
          aspect: "square"
        },
        {
          id: "h3",
          title: "Choreography & Stage Direction",
          tag: "Choreography Session",
          src: "assets/images/hosting/hosting_3.svg",
          alt: "Simrika Khatri - Directing Runway Walkers",
          aspect: "tall"
        },
        {
          id: "h4",
          title: "Pageant Grooming & Mentorship Workshop",
          tag: "Contestant Training",
          src: "assets/images/hosting/hosting_4.svg",
          alt: "Simrika Khatri - Grooming Workshop",
          aspect: "portrait"
        },
        {
          id: "h5",
          title: "Awards Night Red Carpet Host",
          tag: "Red Carpet Host",
          src: "assets/images/hosting/hosting_5.svg",
          alt: "Simrika Khatri - Red Carpet Host",
          aspect: "square"
        },
        {
          id: "h6",
          title: "Panel Discussion & Keynote",
          tag: "Youth & Creative Speaker",
          src: "assets/images/hosting/hosting_6.svg",
          alt: "Simrika Khatri - Panel Speaker",
          aspect: "portrait"
        },
        {
          id: "h7",
          title: "Celebration & Mentorship Finale",
          tag: "Choreographer Curtain Call",
          src: "assets/images/hosting/hosting_7.svg",
          alt: "Simrika Khatri - Curtain Call Finale",
          aspect: "tall"
        }
      ]
    }
  }
};
