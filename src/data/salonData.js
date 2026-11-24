/**
 * MIRACLE BEAUTY & HAIR SALON - CENTRAL DATA STORE
 * All salon information, services, real reviews, opening hours,
 * team profiles, FAQ, and initial demo bookings are maintained here.
 * 
 * NOTE ON IMAGES:
 * As per instructions, all web-sourced / sample images have "sample": true
 * and can be replaced with real salon photos at any time.
 */

export const salonData = {
  // 1. General Business Information
  info: {
    name: "Miracle beauty & hair salon",
    shortName: "Miracle Salon",
    tagline: "L'Oréal Professionnel Partner Salon & Bridal Sanctuary in Parel",
    description: "Miracle Beauty & Hair Salon is a beloved local beauty sanctuary and official L'Oréal Professionnel Partner Salon located in Patel Wadi, Parel, Mumbai. Dedicated to authentic, high-grade hair care, customized skin therapies, gentle grooming, and exquisite bridal makeovers with a clean, welcoming atmosphere.",
    establishedYear: "[Add year in business here]", // Explicit placeholder per instructions
    certifications: "Official L'Oréal Professionnel Partner Salon",
    licenseInfo: "[Add salon license / GSTIN here]",
    rating: 4.7,
    reviewCount: 88,
    ratingSource: "Google Maps & Local Directory Verified",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Miracle%20beauty%20%26%20hair%20salon&query_place_id=ChIJ7SKyH2nP5zsR5a3Mt2bsQDE",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.037882200388!2d72.8407!3d18.9955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf691fb222ed%3A0x1040ec6cb764add5!2sMiracle%20beauty%20%26%20hair%20salon!5e0!3m2!1sen!2sin!4v1700000000000",
    catersTo: "Women & Unisex (Bridal, Party Makeovers & Family Grooming)",
    highlightBadges: [
      { id: "loreal", title: "L'Oréal Partner", subtitle: "Genuine professional salon formulas" },
      { id: "hygiene", title: "Sterilized & Safe", subtitle: "Single-use disposables & clean stations" },
      { id: "gentle", title: "Gentle Expertise", subtitle: "Praised by 85+ happy neighborhood clients" },
      { id: "central", title: "Parel Central", subtitle: "Opposite Abhyudaya Bank, Patel Wadi" },
    ]
  },

  // 2. Contact & Location
  contact: {
    address: {
      shopNo: "Shop No. 8/A (also Shop No. 19)",
      premise: "Patel Wadi, Parel Village",
      road: "G.D. Ambekar Marg / Parel Tank Road",
      landmark: "Opposite Abhyudaya Co-operative Bank",
      area: "Parel",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400012",
      country: "India",
      directionsNote: "Easy 6-8 minute walk from Parel Railway Station (Central Line) or Currey Road Station (Western/Central interchange). Located directly facing Abhyudaya Bank in Patel Wadi."
    },
    primaryPhone: "+91 82913 43455",
    secondaryPhone: "+91 22 2418 9518",
    whatsappNumber: "918291343455",
    whatsappLink: "https://wa.me/918291343455?text=Hi%20Miracle%20Beauty%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment.",
    email: "[Add email here]", // Explicit placeholder per instructions
    socials: {
      instagram: {
        handle: "@miraclebeauty_parel",
        url: "https://instagram.com/miraclebeautysalon_parel",
        isPlaceholder: true,
        note: "[Add verified Instagram link here]"
      },
      facebook: {
        handle: "Miracle Beauty & Hair Salon Parel",
        url: "https://facebook.com/miraclebeautysalonparel",
        isPlaceholder: true,
        note: "[Add Facebook link here]"
      },
      justdial: {
        title: "Justdial Verified Listing",
        url: "https://www.justdial.com/Mumbai/Miracale-Beauty-Hair-Salon-Opp-Abhudaya-Bank-Parel/022PXX22-XX22-130424164106-Y7Y1_BZDET"
      }
    }
  },

  // 3. Opening Hours & Weekly Schedule
  openingHours: [
    { day: "Monday", hours: "Closed", status: "closed", note: "Reserved for exclusive advance bridal appointments" },
    { day: "Tuesday", hours: "10:00 AM – 8:30 PM", status: "open", note: "Standard hours" },
    { day: "Wednesday", hours: "10:00 AM – 8:30 PM", status: "open", note: "Standard hours" },
    { day: "Thursday", hours: "10:00 AM – 8:30 PM", status: "open", note: "Standard hours" },
    { day: "Friday", hours: "10:00 AM – 8:30 PM", status: "open", note: "Standard hours" },
    { day: "Saturday", hours: "10:00 AM – 9:00 PM", status: "open", note: "Weekend prime styling" },
    { day: "Sunday", hours: "10:00 AM – 9:00 PM", status: "open", note: "Weekend prime styling" }
  ],

  // 4. Real Customer Reviews from Google Maps & Listing Directories
  // STRICT RULE: Only real reviews from actual clients. No fabricated feedback.
  reviews: [
    {
      id: "rev-1",
      author: "Sandhya Sonar",
      rating: 5,
      date: "Recent verified visit",
      source: "Google Maps",
      comment: "I got my haircut and facial done, it was excellent. The staff is very courteous and polite and very good service given.",
      serviceMentioned: "Haircut & Facial",
      verified: true
    },
    {
      id: "rev-2",
      author: "Vallari Joshi",
      rating: 5,
      date: "Verified client",
      source: "Google Maps",
      comment: "The service is too good! So impressed with their hair styling and polite behavior!",
      serviceMentioned: "Hair Styling",
      verified: true
    },
    {
      id: "rev-3",
      author: "Prince",
      rating: 5,
      date: "Verified client",
      source: "Google Maps",
      comment: "Very positive, clean, homely, good staff, very good in treatment and hair care.",
      serviceMentioned: "Hair Care & Treatment",
      verified: true
    },
    {
      id: "rev-4",
      author: "Pooja",
      rating: 5,
      date: "Verified client",
      source: "Google Maps",
      comment: "High-quality products used. Awesome results for hair spa and skin glow.",
      serviceMentioned: "Hair Spa & Glow Treatment",
      verified: true
    },
    {
      id: "rev-5",
      author: "Sneha Kadam",
      rating: 5,
      date: "Local regular",
      source: "Google Maps",
      comment: "Best neighborhood parlour in Parel. Always gentle with skin treatments and waxing. Affordable and hygienic.",
      serviceMentioned: "Skin Care & Waxing",
      verified: true
    }
  ],

  // 5. Service Categories (ONLY categories this salon actually offers)
  serviceCategories: [
    { id: "all", name: "All Services", icon: "Sparkles" },
    { id: "hair", name: "Hair Care & Styling", icon: "Scissors" },
    { id: "skin", name: "Skin & Facials", icon: "Smile" },
    { id: "bridal", name: "Bridal & Occasion", icon: "Crown" },
    { id: "waxing", name: "Waxing & Threading", icon: "Zap" },
    { id: "nails", name: "Hands, Feet & Nails", icon: "Heart" },
  ],

  // 6. Services Catalog
  services: [
    {
      id: "srv-haircut",
      category: "hair",
      categoryName: "Hair Care & Styling",
      name: "Precision Haircut & Blowout Styling",
      description: "Custom consultation, hair structure assessment, relaxing scalp wash, precision trim/cut, and blowout finish tailored to your face silhouette.",
      duration: "45 mins",
      price: 350,
      priceDisplay: "₹350 onwards",
      popular: true,
      image: "/images/hair-cut-styling.jpg",
      sample: true,
      badge: "Customer Favorite",
      features: ["Custom consultation", "Relaxing scalp wash", "Blowdry style finish"]
    },
    {
      id: "srv-loreal-spa",
      category: "hair",
      categoryName: "Hair Care & Styling",
      name: "L'Oréal Serie Expert Deep Nourishing Hair Spa",
      description: "Signature intensive scalp detox, lipid-boost hair mask infusion, steam treatment, and 20-minute relaxing neck & shoulder massage.",
      duration: "60 mins",
      price: 850,
      priceDisplay: "₹850 onwards",
      popular: true,
      image: "/images/hair-spa-loreal.jpg",
      sample: true,
      badge: "L'Oréal Partner Exclusive",
      features: ["Serie Expert formula", "Deep steam infusion", "Shoulder & neck massage"]
    },
    {
      id: "srv-global-color",
      category: "hair",
      categoryName: "Hair Care & Styling",
      name: "L'Oréal Majirel / Inoa Global Hair Color",
      description: "Ammonia-free or classic long-lasting chromatic coverage for radiant gloss, full grey masking, and multidimensional shine.",
      duration: "90 mins",
      price: 1800,
      priceDisplay: "₹1,800 onwards",
      popular: false,
      image: "/images/hair-color-balayage.jpg",
      sample: true,
      badge: "100% Genuine L'Oréal",
      features: ["Ammonia-free options", "Rich multi-tonal shine", "Post-color bond sealing"]
    },
    {
      id: "srv-smoothening",
      category: "hair",
      categoryName: "Hair Care & Styling",
      name: "X-Tenso Hair Smoothening / Keratin Gloss",
      description: "Transform frizzy, unmanageable hair into mirror-like sleek softness with long-lasting moisture resistance.",
      duration: "180 mins",
      price: 3500,
      priceDisplay: "₹3,500 onwards",
      popular: true,
      image: "/images/hair-smoothening-xtenso.jpg",
      sample: true,
      badge: "Intense Sleekness",
      features: ["Frizz protection for months", "Nutri-cationic technology", "Silky mirror finish"]
    },
    {
      id: "srv-hydra-facial",
      category: "skin",
      categoryName: "Skin & Facials",
      name: "Hydra Radiance Glow Facial",
      description: "Deep pore ultrasonic suction, fruit antioxidant hydration, lymphatic drainage massage, and cold jade stone finish for dewy glass skin.",
      duration: "60 mins",
      price: 1200,
      priceDisplay: "₹1,200",
      popular: true,
      image: "/images/hydra-radiance-facial.jpg",
      sample: true,
      badge: "Instant Glow",
      features: ["Dead cell exfoliation", "Blackhead extraction", "Hydrating sheet mask"]
    },
    {
      id: "srv-detan-cleanse",
      category: "skin",
      categoryName: "Skin & Facials",
      name: "Anti-Tan Radiance & Herbal Cleanup",
      description: "Targeted sun damage reversal with organic fruit enzymes, mild steam, gentle scrub, and cooling sandalwood pack.",
      duration: "45 mins",
      price: 650,
      priceDisplay: "₹650",
      popular: false,
      image: "/images/skin-detan-treatment.jpg",
      sample: true,
      badge: "Quick Refresh",
      features: ["Sun tan reversal", "Herbal cooling mask", "Gentle pore vacuuming"]
    },
    {
      id: "srv-bridal-traditional",
      category: "bridal",
      categoryName: "Bridal & Occasion",
      name: "Traditional Indian / Maharashtrian Bridal Makeover",
      description: "Complete ceremonial bridal transformation: HD waterproof base, bespoke eye artistry, Nauvari / silk saree draping, and floral hair updo.",
      duration: "150 mins",
      price: 7500,
      priceDisplay: "₹7,500 onwards",
      popular: true,
      image: "/images/bridal-makeover-traditional.jpg",
      sample: true,
      badge: "Bridal Signature",
      features: ["16-hr sweatproof HD base", "Saree draping & pinning", "Jewellery & floral setting"]
    },
    {
      id: "srv-party-glam",
      category: "bridal",
      categoryName: "Bridal & Occasion",
      name: "Reception & Party Glam Makeover",
      description: "Radiant red-carpet styling for wedding guests, sangeet nights, and festive celebrations. Includes party hair curls or sleek updo.",
      duration: "75 mins",
      price: 2200,
      priceDisplay: "₹2,200",
      popular: false,
      image: "/images/party-glam-makeup.jpg",
      sample: true,
      badge: "Occasion Ready",
      features: ["Long-wear luminous finish", "Smokey or soft shimmer eyes", "Quick hair curls"]
    },
    {
      id: "srv-rica-wax",
      category: "waxing",
      categoryName: "Waxing & Threading",
      name: "Painless Rica White Chocolate Waxing (Arms & Legs)",
      description: "Italian liposoluble Rica wax for minimal skin irritation, zero ingrown hairs, and post-wax soothing oil massage.",
      duration: "40 mins",
      price: 750,
      priceDisplay: "₹750",
      popular: true,
      image: "/images/waxing-threading.jpg",
      sample: true,
      badge: "Painless Care",
      features: ["Gentle on sensitive skin", "No rashes or redness", "Includes soothing lotion"]
    },
    {
      id: "srv-threading-combo",
      category: "waxing",
      categoryName: "Waxing & Threading",
      name: "Eyebrow Architecture & Upper Lip Threading",
      description: "High-precision eyebrow mapping and organic thread grooming for crisp, clean facial framing.",
      duration: "15 mins",
      price: 100,
      priceDisplay: "₹100",
      popular: false,
      image: "/images/waxing-threading.jpg",
      sample: true,
      badge: "Everyday Essential",
      features: ["Organic anti-bacterial thread", "Soothes with rose water", "Fast & accurate"]
    },
    {
      id: "srv-pedicure-spa",
      category: "nails",
      categoryName: "Hands, Feet & Nails",
      name: "Luxury Rose Petal Spa Pedicure & Manicure",
      description: "Warm floral soak, dead skin buffing, cuticle trimming, mint scrub massage, and glossy protective polish coat.",
      duration: "60 mins",
      price: 850,
      priceDisplay: "₹850",
      popular: true,
      image: "/images/manicure-pedicure-spa.jpg",
      sample: true,
      badge: "Deep Relaxation",
      features: ["Rose water foot bath", "Callus softening", "High-shine nail finish"]
    },
    {
      id: "srv-gel-nail-art",
      category: "nails",
      categoryName: "Hands, Feet & Nails",
      name: "Gel Polish Overlay & Minimalist Nail Art",
      description: "UV-cured chip-proof gel polish lasting up to 3 weeks with delicate French tips, chrome shimmer, or festive accents.",
      duration: "50 mins",
      price: 900,
      priceDisplay: "₹900",
      popular: false,
      image: "/images/nail-art-extensions.jpg",
      sample: true,
      badge: "3-Week Durability",
      features: ["UV LED safe curing", "Zero chip formula", "Bespoke accent nails"]
    }
  ],

  // 7. Curated Packages & Offers (Only using real services with clear placeholders where required)
  packages: [
    {
      id: "pkg-pre-bridal",
      name: "Complete Pre-Bridal Glow Suite",
      description: "The ultimate 3-day bridal preparation ritual: Full body Rica waxing, Hydra Radiance Facial, L'Oréal Hair Spa, and Luxury Mani-Pedi.",
      duration: "4.5 hours across sessions",
      price: 4999,
      originalPrice: 6500,
      discountText: "Save ₹1,501",
      popular: true,
      image: "/images/bridal-makeover-traditional.jpg",
      sample: true,
      inclusions: [
        "Full Body Italian Rica Waxing",
        "Hydra Radiance Glow Facial",
        "L'Oréal Serie Expert Deep Spa",
        "Deluxe Rose Spa Manicure & Pedicure",
        "Complimentary Eyebrow & Forehead Threading"
      ]
    },
    {
      id: "pkg-hair-makeover",
      name: "L'Oréal Hair Revival & Gloss Combo",
      description: "Complete seasonal hair rejuvenation: Precision cut, L'Oréal deep restorative spa treatment, and glossy blowout.",
      duration: "90 mins",
      price: 1299,
      originalPrice: 1700,
      discountText: "Save ₹401",
      popular: true,
      image: "/images/hair-spa-loreal.jpg",
      sample: true,
      inclusions: [
        "Senior Stylist Consultation",
        "Precision Haircut & Split-end Trim",
        "L'Oréal Deep Spa Scalp Emulsion",
        "Intensive Head Steam & Pressure Massage",
        "Glam Blowdry Finish"
      ]
    },
    {
      id: "pkg-festive-glow",
      name: "Festive De-Tan & Refresh Duo",
      description: "Immediate complexion revival for family gatherings and festive celebrations in Parel.",
      duration: "75 mins",
      price: 999,
      originalPrice: 1400,
      discountText: "Save ₹401",
      popular: false,
      image: "/images/skin-detan-treatment.jpg",
      sample: true,
      inclusions: [
        "Anti-Tan Oxygen Bleach / De-Tan Pack",
        "Deep Cleansing Facial Scrub",
        "Sandalwood Soothing Face Mask",
        "Eyebrow & Upper Lip Threading"
      ]
    }
  ],

  // 8. Transformation Showcase (Before & After)
  transformations: [
    {
      id: "trans-1",
      title: "Frizz-to-Sleek X-Tenso Smoothening",
      category: "Hair Transformation",
      beforeImage: "/images/transformation-before.jpg",
      afterImage: "/images/transformation-after.jpg",
      sample: true,
      description: "Tamed thick, coarse humidity-prone locks into silky, mirror-straight tresses with zero frizz."
    }
  ],

  // 9. Team Profiles
  // Strict rule: No invented stylist names or fake photos. Use neutral role titles and marked sample images.
  team: [
    {
      id: "team-1",
      name: "Senior Hair Design Lead",
      role: "Lead Hair Specialist & Colorist",
      experience: "L'Oréal Professionnel Certified",
      specialty: "Precision haircuts, Balayage color mapping, and X-Tenso smoothening.",
      image: "/images/team-director.jpg",
      sample: true
    },
    {
      id: "team-2",
      name: "Senior Aesthetician",
      role: "Skin Therapy & Facial Specialist",
      experience: "Certified Skincare Therapist",
      specialty: "Hydra facials, anti-tan herbal formulations, and painless Rica waxing.",
      image: "/images/team-aesthetician.jpg",
      sample: true
    },
    {
      id: "team-3",
      name: "Bridal Makeover Artist",
      role: "Lead Occasion & Bridal Stylist",
      experience: "Traditional & HD Bridal Specialist",
      specialty: "High-definition wedding makeup, saree draping, and ceremonial hair updos.",
      image: "/images/team-bridal.jpg",
      sample: true
    }
  ],

  // 10. Instagram Feed / Gallery
  instagramFeed: [
    { id: "ig-1", image: "/images/insta-1.jpg", caption: "Fresh textured bob & glossy blowout for our lovely client! ✨ #ParelSalon", sample: true },
    { id: "ig-2", image: "/images/insta-2.jpg", caption: "L'Oréal Serie Expert deep nourishing hair spa in action 💆‍♀️ #HealthyHair", sample: true },
    { id: "ig-3", image: "/images/insta-3.jpg", caption: "Glass skin achieved with our Hydra Radiance treatment! 💧 #SkinGlow", sample: true },
    { id: "ig-4", image: "/images/insta-4.jpg", caption: "Minimalist pastel gel manicure ready for the weekend 💅 #NailArt", sample: true },
    { id: "ig-5", image: "/images/insta-5.jpg", caption: "Stunning festive eye makeup and silky waves 🌸 #BridalMakeover", sample: true },
    { id: "ig-6", image: "/images/insta-6.jpg", caption: "Clean, hygienic, and welcoming stations ready for you in Patel Wadi! 📍", sample: true }
  ],

  // 11. Frequently Asked Questions (FAQ)
  faqs: [
    {
      question: "Do I need to book in advance or do you accept walk-ins?",
      answer: "We warmly welcome walk-in clients! However, for chemical hair treatments (smoothening, global color), bridal makeovers, or during weekend prime hours (Saturday & Sunday), booking in advance guarantees zero wait time."
    },
    {
      question: "Are genuine L'Oréal Professionnel products used for hair treatments?",
      answer: "Yes, 100%. We are an official L'Oréal Professionnel partner salon. All our hair spas, color lines (Majirel, Inoa), and smoothening treatments (X-Tenso) use original, sealed professional salon containers."
    },
    {
      question: "Where exactly in Parel is the salon located?",
      answer: "We are at Shop No. 8/A, Patel Wadi, G.D. Ambekar Marg / Parel Tank Road, located right opposite the Abhyudaya Co-operative Bank in Parel Village. We are just a 6-minute auto or walk from Parel and Currey Road stations."
    },
    {
      question: "How do I book a bridal makeover consultation?",
      answer: "You can book directly through this website or send us a WhatsApp message at +91 82913 43455. We recommend scheduling your pre-bridal consultation at least 2 to 4 weeks before your ceremony date."
    },
    {
      question: "What hygiene protocols are followed at Miracle Beauty Salon?",
      answer: "We maintain strict cleanliness: single-use disposable bed sheets, sterile wax spatulas, sanitized hair scissors and combs after every client, and fresh laundered towels."
    },
    {
      question: "Is this online booking system real or a demo?",
      answer: "This website and payment gateway is an interactive DEMO build. No actual money is charged on your card. Bookings placed here will automatically appear in the Owner Dashboard for demonstration purposes."
    }
  ],

  // 12. Booking Time Slots
  timeSlots: [
    "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM",
    "07:00 PM", "07:30 PM"
  ],

  // 13. Stylist Options for Booking Form
  stylists: [
    { id: "any", name: "No preference (First available expert)" },
    { id: "lead-hair", name: "Senior Hair Design Lead" },
    { id: "senior-aesthetician", name: "Senior Aesthetician (Skin & Waxing)" },
    { id: "bridal-artist", name: "Bridal Makeover Artist" }
  ],

  // 14. Demo Owner Credentials
  ownerAuth: {
    username: "admin",
    password: "miracle2024",
    ownerName: "Salon Manager",
    salonRole: "Miracle Beauty Admin"
  },

  // 15. Initial Sample Bookings for Owner Dashboard
  initialBookings: [
    {
      id: "MB-8491",
      customerName: "Pooja Sharma",
      phone: "+91 98201 44521",
      email: "pooja.sharma@example.com",
      date: "2026-11-24",
      timeSlot: "11:00 AM",
      services: [
        { name: "L'Oréal Serie Expert Deep Nourishing Hair Spa", price: 850 },
        { name: "Painless Rica White Chocolate Waxing", price: 750 }
      ],
      totalAmount: 1600,
      stylist: "Senior Aesthetician (Skin & Waxing)",
      status: "Confirmed",
      paymentStatus: "Paid (Demo Card)",
      paymentMethod: "Credit Card (Demo)",
      notes: "First time trying Rica wax, sensitive skin.",
      createdAt: "2026-11-23T14:30:00Z"
    },
    {
      id: "MB-8492",
      customerName: "Ananya Deshmukh",
      phone: "+91 97690 12890",
      email: "ananya.d@example.com",
      date: "2026-11-24",
      timeSlot: "02:00 PM",
      services: [
        { name: "Precision Haircut & Blowout Styling", price: 350 }
      ],
      totalAmount: 350,
      stylist: "Senior Hair Design Lead",
      status: "Pending",
      paymentStatus: "Pay at Salon",
      paymentMethod: "Cash / UPI at Salon",
      notes: "Wants curtain bangs consultation.",
      createdAt: "2026-11-24T08:15:00Z"
    },
    {
      id: "MB-8493",
      customerName: "Riddhi Patil",
      phone: "+91 98192 78341",
      email: "riddhi.patil@example.com",
      date: "2026-11-24",
      timeSlot: "04:30 PM",
      services: [
        { name: "Traditional Indian / Maharashtrian Bridal Makeover", price: 7500 }
      ],
      totalAmount: 7500,
      stylist: "Bridal Makeover Artist",
      status: "Confirmed",
      paymentStatus: "Paid (Demo UPI)",
      paymentMethod: "UPI (Demo)",
      notes: "Engagement ceremony in Dadar. Saree draping needed.",
      createdAt: "2026-11-22T19:00:00Z"
    },
    {
      id: "MB-8494",
      customerName: "Snehal Mehta",
      phone: "+91 98213 55432",
      email: "snehal.mehta@example.com",
      date: "2026-11-23",
      timeSlot: "05:00 PM",
      services: [
        { name: "Hydra Radiance Glow Facial", price: 1200 },
        { name: "Luxury Rose Petal Spa Pedicure & Manicure", price: 850 }
      ],
      totalAmount: 2050,
      stylist: "No preference (First available expert)",
      status: "Completed",
      paymentStatus: "Paid (Demo NetBanking)",
      paymentMethod: "NetBanking (Demo)",
      notes: "Client was very pleased with the dewy glow.",
      createdAt: "2026-11-21T11:45:00Z"
    },
    {
      id: "MB-8495",
      customerName: "Kavita Rane",
      phone: "+91 99302 99182",
      email: "kavita.rane@example.com",
      date: "2026-11-23",
      timeSlot: "01:00 PM",
      services: [
        { name: "X-Tenso Hair Smoothening / Keratin Gloss", price: 3500 }
      ],
      totalAmount: 3500,
      stylist: "Senior Hair Design Lead",
      status: "Cancelled",
      paymentStatus: "Refunded (Demo)",
      paymentMethod: "Credit Card (Demo)",
      notes: "Client rescheduled for next weekend due to travel.",
      createdAt: "2026-11-20T16:20:00Z"
    }
  ]
};
