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

  // 3 Curated Gallery Categories (8 real photos per section)
  galleries: {
    portraits: {
      id: "portraits",
      title: "Portraits & Editorial",
      subtitle: "Studio aesthetics, high-fashion portraiture, casual chic & digital looks",
      items: [
        {
          id: "p1",
          title: "Rose Gold Sequin & Crimson Velvet",
          tag: "Editorial & Glamour",
          src: "assets/images/portraits/portrait_1.jpg",
          alt: "Simrika Khatri in Rose Gold Sequin Gown",
          aspect: "portrait"
        },
        {
          id: "p2",
          title: "Scarlet Breeze on Hillside",
          tag: "Scenic Outdoor Portrait",
          src: "assets/images/portraits/portrait_2.jpg",
          alt: "Simrika Khatri in Crimson Red Dress",
          aspect: "portrait"
        },
        {
          id: "p3",
          title: "Radiance & Glow Beauty Campaign",
          tag: "Commercial Skincare Shoot",
          src: "assets/images/portraits/portrait_3.jpg",
          alt: "Simrika Khatri Skincare Commercial Campaign",
          aspect: "portrait"
        },
        {
          id: "p4",
          title: "Summer Resort & Poolside Chic",
          tag: "Commercial Brand Look",
          src: "assets/images/portraits/portrait_4.jpg",
          alt: "Simrika Khatri Poolside Commercial Campaign",
          aspect: "portrait"
        },
        {
          id: "p5",
          title: "Lilac Heritage Embroidered Lehenga",
          tag: "Traditional Couture",
          src: "assets/images/portraits/portrait_5.jpg",
          alt: "Simrika Khatri in Lilac Lehenga",
          aspect: "portrait"
        },
        {
          id: "p6",
          title: "Cobalt Modern Silhouette",
          tag: "Contemporary Fashion",
          src: "assets/images/portraits/portrait_6.jpg",
          alt: "Simrika Khatri in Royal Blue Dress",
          aspect: "tall"
        },
        {
          id: "p7",
          title: "Boutique Casual Chic",
          tag: "Lifestyle & Street Style",
          src: "assets/images/portraits/portrait_7.jpg",
          alt: "Simrika Khatri Casual Chic Street Look",
          aspect: "portrait"
        },
        {
          id: "p8",
          title: "Glamour Spotlight Elegance",
          tag: "Evening Glamour",
          src: "assets/images/portraits/portrait_8.jpg",
          alt: "Simrika Khatri Evening Gown Portrait",
          aspect: "portrait"
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
          title: "Miss Glam Gala Crowning Glory",
          tag: "Pageant Titleholder",
          src: "assets/images/runway/runway_1.jpg",
          alt: "Simrika Khatri Crowned Pageant Winner",
          aspect: "portrait"
        },
        {
          id: "r2",
          title: "Olive Cape Couture Ramp Walk",
          tag: "Fashion Week Ramp",
          src: "assets/images/runway/runway_2.jpg",
          alt: "Simrika Khatri Ramp Walk Finale",
          aspect: "tall"
        },
        {
          id: "r3",
          title: "Starlight Silver Evening Couture",
          tag: "Designer Gown Showcase",
          src: "assets/images/runway/runway_3.jpg",
          alt: "Simrika Khatri in Silver Gown",
          aspect: "tall"
        },
        {
          id: "r4",
          title: "Cultural Majesty Ethnic Fusion",
          tag: "Heritage Ramp Showcase",
          src: "assets/images/runway/runway_4.jpg",
          alt: "Simrika Khatri Cultural Fusion Runway",
          aspect: "portrait"
        },
        {
          id: "r5",
          title: "Royal Pageant Titleholder Seat",
          tag: "Crowned Winner Portrait",
          src: "assets/images/runway/runway_5.jpg",
          alt: "Simrika Khatri Crowned Queen in Fuchsia",
          aspect: "portrait"
        },
        {
          id: "r6",
          title: "Glamour Runway Models Showcase",
          tag: "Designer Runway Lineup",
          src: "assets/images/runway/runway_6.jpg",
          alt: "Simrika Khatri Runway Stage Finale",
          aspect: "landscape"
        },
        {
          id: "r7",
          title: "Fuchsia Heritage Pageant Tiara",
          tag: "Official Titleholder Look",
          src: "assets/images/runway/runway_7.jpg",
          alt: "Simrika Khatri with Pageant Crown",
          aspect: "portrait"
        },
        {
          id: "r8",
          title: "High-Energy Runway Cadence",
          tag: "Ramp Walk Dynamics",
          src: "assets/images/runway/runway_8.jpg",
          alt: "Simrika Khatri Runway Walk",
          aspect: "tall"
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
          title: "Live Podium Emcee & Keynote Host",
          tag: "Stage Presenter",
          src: "assets/images/hosting/hosting_1.jpg",
          alt: "Simrika Khatri Emceeing at Podium",
          aspect: "portrait"
        },
        {
          id: "h2",
          title: "Official Jury & Evaluation Judge",
          tag: "Pageant Jury Panel",
          src: "assets/images/hosting/hosting_2.jpg",
          alt: "Simrika Khatri Pageant Judge",
          aspect: "portrait"
        },
        {
          id: "h3",
          title: "'Who Is The Next Icon' Contestant Jury",
          tag: "Audition Screening",
          src: "assets/images/hosting/hosting_3.jpg",
          alt: "Simrika Khatri Judging Audition Contestants",
          aspect: "landscape"
        },
        {
          id: "h4",
          title: "Head Choreographer Ramp Curtain Call",
          tag: "Runway Choreography Direction",
          src: "assets/images/hosting/hosting_4.jpg",
          alt: "Simrika Khatri Choreographer Bow on Stage",
          aspect: "tall"
        },
        {
          id: "h5",
          title: "Grand Finale Celebratory Stage Host",
          tag: "Live Show Finale",
          src: "assets/images/hosting/hosting_5.jpg",
          alt: "Simrika Khatri Stage Co-Host Celebration",
          aspect: "landscape"
        },
        {
          id: "h6",
          title: "International Academy Mentorship Panel",
          tag: "Grooming & Training Workshop",
          src: "assets/images/hosting/hosting_6.jpg",
          alt: "Simrika Khatri Mentorship Workshop",
          aspect: "landscape"
        },
        {
          id: "h7",
          title: "Pageant Jury Executive Deliberation",
          tag: "Jury Table Panel",
          src: "assets/images/hosting/hosting_7.jpg",
          alt: "Simrika Khatri at Judging Table",
          aspect: "landscape"
        },
        {
          id: "h8",
          title: "Brand Ambassador & Event Presentation",
          tag: "Brand Emcee & Presenter",
          src: "assets/images/hosting/hosting_8.jpg",
          alt: "Simrika Khatri Brand Ambassador Presentation",
          aspect: "portrait"
        }
      ]
    }
  }
};
