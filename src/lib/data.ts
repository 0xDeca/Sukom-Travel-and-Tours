export const destinations = [
  {
    id: "uk",
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    flag: "🇬🇧",
    continent: "Europe",
    visaTypes: ["Visitor Visa", "Student Visa", "Work Visa", "Transit Visa"],
    popularFor: ["Tourism", "Education", "Business", "Family Visit"],
    overview: "The United Kingdom offers a rich blend of history, culture, and modern city life. From the iconic landmarks of London to the rolling countryside of Scotland, the UK welcomes millions of visitors each year.",
    requirements: [
      "Valid passport with at least 6 months validity",
      "Completed visa application form",
      "Proof of financial means",
      "Travel itinerary and accommodation details",
      "Travel history documentation",
      "Biometric enrollment"
    ],
    processingTime: "3-6 weeks (varies by visa type)",
    nextStep: "Start with a consultation to understand the best visa pathway for your travel purpose."
  },
  {
    id: "us",
    name: "United States",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80",
    flag: "🇺🇸",
    continent: "North America",
    visaTypes: ["B1/B2 Tourist/Business", "F1 Student", "H1B Work", "ESTA"],
    popularFor: ["Tourism", "Education", "Business", "Immigration"],
    overview: "The United States is a land of diverse landscapes, cultures, and opportunities. From coast to coast, visitors can experience everything from bustling cities to natural wonders.",
    requirements: [
      "Valid passport",
      "DS-160 confirmation page",
      "Visa application fee payment",
      "Interview appointment letter",
      "Supporting financial documents",
      "Travel and employment history"
    ],
    processingTime: "2-8 weeks (interview dependent)",
    nextStep: "US visa applications require an in-person interview. We can help you prepare."
  },
  {
    id: "ca",
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
    flag: "🇨🇦",
    continent: "North America",
    visaTypes: ["Visitor Visa", "Study Permit", "Work Permit", "Express Entry"],
    popularFor: ["Tourism", "Education", "Immigration", "Business"],
    overview: "Canada is known for its natural beauty, welcoming culture, and high quality of life. It remains one of the most sought-after destinations for travel, study, and immigration.",
    requirements: [
      "Valid passport",
      "Completed application forms",
      "Proof of financial support",
      "Travel purpose documentation",
      "Biometric enrollment",
      "Medical examination (if required)"
    ],
    processingTime: "2-12 weeks (varies by program)",
    nextStep: "Canadian immigration pathways vary significantly. A consultation can help identify the right option."
  },
  {
    id: "uae",
    name: "Dubai / UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    flag: "🇦🇪",
    continent: "Asia",
    visaTypes: ["Tourist Visa", "Business Visa", "Work Visa", "Golden Visa"],
    popularFor: ["Tourism", "Business", "Luxury Travel", "Transit"],
    overview: "Dubai and the UAE offer a unique blend of modern luxury, cultural heritage, and business opportunities. The region has become a global hub for tourism and commerce.",
    requirements: [
      "Valid passport (6+ months validity)",
      "Passport-size photographs",
      "Return flight booking",
      "Hotel reservation",
      "Bank statements",
      "Travel insurance"
    ],
    processingTime: "3-7 business days",
    nextStep: "UAE visas are often processed quickly. Let us help you choose the right visa type."
  },
  {
    id: "ke",
    name: "Kenya",
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80",
    flag: "🇰🇪",
    continent: "Africa",
    visaTypes: ["eTA", "Business Visa", "Transit Visa", "Work Permit"],
    popularFor: ["Safari", "Tourism", "Business", "Adventure"],
    overview: "Kenya is East Africa's premier safari destination, offering spectacular wildlife, stunning landscapes, and vibrant culture. From the Maasai Mara to the coast of Mombasa, Kenya delivers unforgettable experiences.",
    requirements: [
      "Valid passport (6+ months validity)",
      "eTA application",
      "Yellow fever vaccination certificate",
      "Return/onward ticket",
      "Accommodation proof",
      "Sufficient funds"
    ],
    processingTime: "1-5 business days (eTA)",
    nextStep: "Kenya's eTA system is straightforward. We can guide you through the process."
  },
  {
    id: "tz",
    name: "Tanzania",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    flag: "🇹🇿",
    continent: "Africa",
    visaTypes: ["Ordinary Visa", "Business Visa", "Transit Visa", "e-Visa"],
    popularFor: ["Safari", "Kilimanjaro", "Zanzibar", "Beach Holidays"],
    overview: "Tanzania is home to Mount Kilimanjaro, the Serengeti, and the pristine beaches of Zanzibar. It offers some of Africa's most iconic travel experiences.",
    requirements: [
      "Valid passport (6+ months validity)",
      "e-Visa application",
      "Yellow fever certificate",
      "Return ticket",
      "Accommodation details",
      "Proof of funds"
    ],
    processingTime: "1-10 business days",
    nextStep: "Tanzania offers e-Visa processing. We'll ensure your application is complete."
  },
  {
    id: "ma",
    name: "Morocco",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
    flag: "🇲🇦",
    continent: "Africa",
    visaTypes: ["Tourist Visa", "Business Visa", "Transit Visa"],
    popularFor: ["Culture", "Tourism", "Business", "Photography"],
    overview: "Morocco captivates visitors with its vibrant souks, ancient medinas, Sahara Desert experiences, and rich culinary traditions. A gateway between Africa and Europe.",
    requirements: [
      "Valid passport (3+ months validity)",
      "Completed visa application",
      "Passport photographs",
      "Hotel reservations",
      "Financial proof",
      "Travel insurance"
    ],
    processingTime: "1-3 weeks",
    nextStep: "Morocco visa requirements are well-defined. We can help prepare your application."
  },
  {
    id: "za",
    name: "South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    flag: "🇿🇦",
    continent: "Africa",
    visaTypes: ["Visitor Visa", "Business Visa", "Work Visa", "Study Visa"],
    popularFor: ["Safari", "Tourism", "Business", "Wine Tours"],
    overview: "South Africa offers diverse experiences from the iconic Table Mountain and Cape Winelands to world-class wildlife safaris and vibrant city life in Johannesburg and Cape Town.",
    requirements: [
      "Valid passport (30+ days beyond stay)",
      "Completed visa application form",
      "Passport-size photographs",
      "Return flight booking",
      "Proof of accommodation",
      "Bank statements (3 months)",
      "Yellow fever certificate"
    ],
    processingTime: "2-4 weeks",
    nextStep: "South Africa visa processing takes time. Start early with a consultation."
  },
  {
    id: "gh",
    name: "Ghana",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
    flag: "🇬🇭",
    continent: "Africa",
    visaTypes: ["Tourist Visa", "Business Visa", "Transit Visa", "Visa on Arrival"],
    popularFor: ["Culture", "Tourism", "Business", "Heritage"],
    overview: "Ghana is a warm and welcoming West African destination known for its rich history, vibrant culture, and friendly people. From Cape Coast Castle to Accra's bustling markets, Ghana offers a unique African experience.",
    requirements: [
      "Valid passport (6+ months validity)",
      "Completed visa application",
      "Passport photographs",
      "Return/onward ticket",
      "Proof of accommodation",
      "Yellow fever vaccination certificate",
      "Proof of financial means"
    ],
    processingTime: "1-2 weeks",
    nextStep: "Ghana visa processing is straightforward. We can guide you through every step."
  }
];

export const tourPackages = [
  {
    id: "dubai-luxury",
    destination: "Dubai",
    name: "Dubai Luxury Experience",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    duration: "5 Days / 4 Nights",
    type: "Luxury",
    price: "From ₦4,200,000",
    isDemo: true,
    highlights: ["Burj Khalifa Visit", "Desert Safari", "Gold Souk Tour", "Marina Cruise", "Abu Dhabi Day Trip"],
    description: "Experience the best of Dubai with our curated luxury package. From towering skyscrapers to golden desert dunes, this journey covers all the iconic experiences.",
    itinerary: [
      { day: 1, title: "Arrival & Dubai City Tour", description: "Airport pickup, hotel check-in, Dubai Mall and Burj Khalifa observation deck." },
      { day: 2, title: "Desert Safari", description: "Morning at leisure, afternoon desert safari with dune bashing, camel rides, and BBQ dinner." },
      { day: 3, title: "Marina & Palm Jumeirah", description: "Dubai Marina walk, Palm Jumeirah monorail, Atlantis visit, and Marina dinner cruise." },
      { day: 4, title: "Abu Dhabi Day Trip", description: "Full day Abu Dhabi tour including Sheikh Zayed Mosque and Yas Island." },
      { day: 5, title: "Departure", description: "Free morning for shopping, airport transfer and departure." }
    ],
    included: ["Airport transfers", "4 nights luxury hotel", "Daily breakfast", "Desert safari", "City tours", "English-speaking guide"],
    excluded: ["International flights", "Travel insurance", "Personal expenses", "Visa fees", "Optional activities"]
  },
  {
    id: "cape-town",
    destination: "Cape Town",
    name: "Cape Town Discovery",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    duration: "7 Days / 6 Nights",
    type: "Adventure",
    price: "From ₦3,300,000",
    isDemo: true,
    highlights: ["Table Mountain", "Cape Peninsula", "Winelands Tour", "Robben Island", "Boulders Beach Penguins"],
    description: "Discover the beauty of Cape Town from the iconic Table Mountain to the charming penguins of Boulders Beach.",
    itinerary: [
      { day: 1, title: "Arrival", description: "Airport transfer, V&A Waterfront evening stroll." },
      { day: 2, title: "Table Mountain", description: "Cable car to Table Mountain, city exploration." },
      { day: 3, title: "Cape Peninsula", description: "Cape Point, Chapman's Peak, Boulders Beach penguins." },
      { day: 4, title: "Winelands", description: "Stellenbosch and Franschhoek wine region tour." },
      { day: 5, title: "Robben Island", description: "Historical tour and Company's Garden." },
      { day: 6, title: "Free Day", description: "Explore at your own pace, shopping, or optional activities." },
      { day: 7, title: "Departure", description: "Airport transfer." }
    ],
    included: ["Airport transfers", "6 nights accommodation", "Daily breakfast", "All tours", "Entrance fees", "Transport"],
    excluded: ["International flights", "Travel insurance", "Lunch and dinner", "Visa fees", "Personal expenses"]
  },
  {
    id: "zanzibar",
    destination: "Zanzibar",
    name: "Zanzibar Beach Retreat",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80",
    duration: "6 Days / 5 Nights",
    type: "Beach",
    price: "From ₦2,700,000",
    isDemo: true,
    highlights: ["Stone Town Tour", "Spice Farm Visit", "Prison Island", "Snorkeling", "Sunset Dhow Cruise"],
    description: "Relax on the pristine beaches of Zanzibar while exploring its rich cultural heritage and vibrant marine life.",
    itinerary: [
      { day: 1, title: "Arrival", description: "Airport pickup, Stone Town hotel check-in." },
      { day: 2, title: "Stone Town", description: "Walking tour of Stone Town, spice market, House of Wonders." },
      { day: 3, title: "Spice Tour & Beach", description: "Spice farm visit, afternoon beach relaxation." },
      { day: 4, title: "Prison Island", description: "Boat trip to Prison Island, snorkeling, turtle sanctuary." },
      { day: 5, title: "Beach Day", description: "Full day at the beach, optional water sports, sunset dhow cruise." },
      { day: 6, title: "Departure", description: "Transfer to airport." }
    ],
    included: ["Airport transfers", "5 nights beachfront hotel", "Daily breakfast", "All tours", "Boat trips", "Guide"],
    excluded: ["International flights", "Travel insurance", "Lunch/Dinner", "Visa fees", "Water sports"]
  },
  {
    id: "morocco",
    destination: "Morocco",
    name: "Morocco Imperial Cities",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
    duration: "8 Days / 7 Nights",
    type: "Cultural",
    price: "From ₦3,750,000",
    isDemo: true,
    highlights: ["Marrakech Medina", "Sahara Desert Camp", "Fes Ancient City", "Chefchaouen", "Atlas Mountains"],
    description: "Journey through Morocco's imperial cities, from the bustling souks of Marrakech to the blue streets of Chefchaouen and the vast Sahara Desert.",
    itinerary: [
      { day: 1, title: "Arrival in Marrakech", description: "Airport transfer, Jemaa el-Fnaa square." },
      { day: 2, title: "Marrakech", description: "Guided city tour, Bahia Palace, Majorelle Garden." },
      { day: 3, title: "Atlas Mountains", description: "Day trip to Atlas Mountains and Berber village." },
      { day: 4, title: "To Sahara", description: "Travel to Merzouga, camel trek to desert camp." },
      { day: 5, title: "Sahara to Fes", description: "Sunrise in Sahara, travel to Fes via Ifrane." },
      { day: 6, title: "Fes", description: "Guided tour of Fes Medina, tanneries, and cultural sites." },
      { day: 7, title: "Chefchaouen", description: "Day trip to the Blue City of Chefchaouen." },
      { day: 8, title: "Departure", description: "Transfer to airport." }
    ],
    included: ["Airport transfers", "7 nights accommodation", "Daily breakfast", "Desert camp", "All tours", "Transport"],
    excluded: ["International flights", "Travel insurance", "Some meals", "Visa fees", "Personal expenses"]
  },
  {
    id: "kenya-safari",
    destination: "Kenya",
    name: "Kenya Safari Adventure",
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80",
    duration: "7 Days / 6 Nights",
    type: "Safari",
    price: "From ₦4,800,000",
    isDemo: true,
    highlights: ["Maasai Mara", "Nakuru National Park", "Great Rift Valley", "Maasai Village", "Nairobi City Tour"],
    description: "Experience the magic of Kenya's wildlife on this unforgettable safari through some of Africa's most famous national parks.",
    itinerary: [
      { day: 1, title: "Arrival", description: "Airport pickup, Nairobi hotel." },
      { day: 2, title: "To Maasai Mara", description: "Scenic drive to Maasai Mara, afternoon game drive." },
      { day: 3, title: "Maasai Mara", description: "Full day game drive, big five spotting." },
      { day: 4, title: "Maasai Village", description: "Morning village visit, afternoon game drive." },
      { day: 5, title: "To Nakuru", description: "Drive to Lake Nakuru, afternoon game drive." },
      { day: 6, title: "Nakuru & Rift Valley", description: "Morning game drive, Great Rift Valley viewpoint." },
      { day: 7, title: "Departure", description: "Return to Nairobi, airport transfer." }
    ],
    included: ["Airport transfers", "Safari lodge accommodation", "All meals on safari", "Game drives", "Park fees", "Guide"],
    excluded: ["International flights", "Travel insurance", "Visa fees", "Tips", "Personal expenses"]
  },
  {
    id: "south-africa",
    destination: "South Africa",
    name: "South Africa Explorer",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    duration: "8 Days / 7 Nights",
    type: "Adventure",
    price: "From ₦5,200,000",
    isDemo: true,
    highlights: ["Table Mountain", "Cape Winelands", "Kruger National Park", "Garden Route", "Johannesburg City Tour"],
    description: "Explore the best of South Africa from the iconic Table Mountain to the wildlife of Kruger National Park and the scenic Garden Route.",
    itinerary: [
      { day: 1, title: "Arrival in Cape Town", description: "Airport transfer, V&A Waterfront evening." },
      { day: 2, title: "Table Mountain", description: "Cable car to Table Mountain, city exploration." },
      { day: 3, title: "Cape Peninsula", description: "Cape Point, Chapman's Peak, penguin colony." },
      { day: 4, title: "Winelands", description: "Stellenbosch wine region tour and tasting." },
      { day: 5, title: "Fly to Johannesburg", description: "Flight to Johannesburg, city tour." },
      { day: 6, title: "Kruger National Park", description: "Transfer to Kruger, afternoon game drive." },
      { day: 7, title: "Full Day Safari", description: "Full day game drive, big five spotting." },
      { day: 8, title: "Departure", description: "Transfer to airport." }
    ],
    included: ["Airport transfers", "7 nights accommodation", "Daily breakfast", "Domestic flight", "Game drives", "All tours"],
    excluded: ["International flights", "Travel insurance", "Some meals", "Visa fees", "Personal expenses"]
  },
  {
    id: "ghana",
    destination: "Ghana",
    name: "Ghana Heritage & Culture",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
    duration: "6 Days / 5 Nights",
    type: "Cultural",
    price: "From ₦2,100,000",
    isDemo: true,
    highlights: ["Cape Coast Castle", "Kakum National Park", "Accra Markets", "Cape Coast Beaches", "W.E.B. Du Bois Centre"],
    description: "Discover Ghana's rich history and vibrant culture, from the historic Cape Coast Castle to the bustling markets of Accra.",
    itinerary: [
      { day: 1, title: "Arrival in Accra", description: "Airport pickup, hotel check-in, evening at Labadi Beach." },
      { day: 2, title: "Accra City Tour", description: "Kwame Nkrumah Memorial, Makola Market, Jamestown." },
      { day: 3, title: "To Cape Coast", description: "Drive to Cape Coast, Cape Coast Castle tour." },
      { day: 4, title: "Kakum National Park", description: "Canopy walkway, nature trail, biodiversity." },
      { day: 5, title: "Beach Day & Culture", description: "Cape Coast beaches, local food tour, farewell dinner." },
      { day: 6, title: "Departure", description: "Transfer to Accra airport." }
    ],
    included: ["Airport transfers", "5 nights accommodation", "Daily breakfast", "All tours", "Transport", "Guide"],
    excluded: ["International flights", "Travel insurance", "Some meals", "Visa fees", "Personal expenses"]
  }
];

export const visaSteps = [
  { id: 1, label: "Country", description: "Select your destination" },
  { id: 2, label: "Purpose", description: "Why are you traveling?" },
  { id: 3, label: "Details", description: "Tell us more" },
  { id: 4, label: "Review", description: "Your journey plan" }
];

export const applicationSteps = [
  { id: 1, label: "Personal" },
  { id: 2, label: "Travel" },
  { id: 3, label: "Destination" },
  { id: 4, label: "Service" },
  { id: 5, label: "Documents" },
  { id: 6, label: "Review" },
  { id: 7, label: "Submit" }
];

export const trackingTimeline = [
  { status: "Application Received", date: "Jan 15, 2026", completed: true, description: "Your application has been received and logged." },
  { status: "Documents Under Review", date: "Jan 17, 2026", completed: true, description: "Our team is reviewing your submitted documents." },
  { status: "Consultation Completed", date: "Jan 20, 2026", completed: true, description: "You've completed your consultation with a Sukom advisor." },
  { status: "Application Preparation", date: "Jan 22, 2026", completed: true, description: "Your application is being prepared for submission." },
  { status: "Submitted to Authorities", date: "Jan 25, 2026", completed: false, description: "Application submitted to the relevant visa authority." },
  { status: "Decision Pending", date: "—", completed: false, description: "Awaiting decision from visa authorities." }
];

export const demoApplications = [
  {
    id: "SK-DEMO-10428",
    applicant: "Adaeze Okonkwo",
    service: "UK Visitor Visa",
    destination: "United Kingdom",
    status: "Under Review",
    assignedStaff: "Chioma Nwosu",
    updated: "Jan 22, 2026",
    progress: 60
  },
  {
    id: "SK-DEMO-10429",
    applicant: "Emeka Adeyemi",
    service: "Canada Study Permit",
    destination: "Canada",
    status: "Documents Pending",
    assignedStaff: "Emeka Obi",
    updated: "Jan 20, 2026",
    progress: 35
  },
  {
    id: "SK-DEMO-10430",
    applicant: "Funke Akindele",
    service: "US B1/B2 Visa",
    destination: "United States",
    status: "New",
    assignedStaff: "Unassigned",
    updated: "Jan 25, 2026",
    progress: 10
  },
  {
    id: "SK-DEMO-10431",
    applicant: "Tunde Bakare",
    service: "Dubai Tourist Visa",
    destination: "Dubai / UAE",
    status: "Completed",
    assignedStaff: "Chioma Nwosu",
    updated: "Jan 18, 2026",
    progress: 100
  },
  {
    id: "SK-DEMO-10432",
    applicant: "Ngozi Eze",
    service: "Kenya eTA",
    destination: "Kenya",
    status: "In Progress",
    assignedStaff: "Emeka Obi",
    updated: "Jan 24, 2026",
    progress: 75
  }
];

export const demoLeads = [
  { id: 1, name: "Chidi Okoro", email: "chidi@email.com", phone: "+234 XXX XXX 4567", service: "UK Visa", destination: "United Kingdom", source: "Website Form", status: "New", date: "Jan 25, 2026", notes: "Interested in visitor visa for UK" },
  { id: 2, name: "Amina Bello", email: "amina@email.com", phone: "+234 XXX XXX 8901", service: "Canada Study Permit", destination: "Canada", source: "WhatsApp", status: "Contacted", date: "Jan 24, 2026", notes: "Looking to study in Canada, needs guidance on programs" },
  { id: 3, name: "Oluwaseun Martins", email: "seun@email.com", phone: "+234 XXX XXX 2345", service: "Tour Package", destination: "Dubai", source: "Website Form", status: "Qualified", date: "Jan 23, 2026", notes: "Corporate group tour, 8 people" },
  { id: 4, name: "Ifeoma Chukwu", email: "ifeoma@email.com", phone: "+234 XXX XXX 6789", service: "US Visa", destination: "United States", source: "Referral", status: "Converted", date: "Jan 22, 2026", notes: "Application submitted, waiting for interview" },
  { id: 5, name: "Babatunde Ogundimu", email: "tunde@email.com", phone: "+234 XXX XXX 0123", service: "Flight Assistance", destination: "Tanzania", source: "Phone Call", status: "New", date: "Jan 25, 2026", notes: "Wants flights for honeymoon" }
];

export const demoStaff = [
  { id: 1, name: "Chioma Nwosu", role: "Senior Visa Consultant", activeCases: 12, department: "Visa Services", email: "chioma@sukom.com" },
  { id: 2, name: "Emeka Obi", role: "Travel Consultant", activeCases: 8, department: "Travel Services", email: "emeka@sukom.com" },
  { id: 3, name: "Fatima Abubakar", role: "Tour Coordinator", activeCases: 5, department: "Tours", email: "fatima@sukom.com" },
  { id: 4, name: "David Okafor", role: "Admin Manager", activeCases: 3, department: "Administration", email: "david@sukom.com" },
  { id: 5, name: "Grace Nnamdi", role: "Customer Support", activeCases: 15, department: "Support", email: "grace@sukom.com" }
];

export const demoAnalytics = {
  totalEnquiries: 156,
  visaApplications: 89,
  tourEnquiries: 34,
  consultations: 23,
  conversionRate: 42,
  monthlyData: [
    { month: "Sep", enquiries: 98, applications: 52, tours: 20 },
    { month: "Oct", enquiries: 112, applications: 61, tours: 25 },
    { month: "Nov", enquiries: 134, applications: 74, tours: 28 },
    { month: "Dec", enquiries: 148, applications: 82, tours: 32 },
    { month: "Jan", enquiries: 156, applications: 89, tours: 34 }
  ]
};

export const resources = [
  {
    id: "first-international-trip",
    title: "Planning Your First International Trip?",
    category: "Travel Tips",
    excerpt: "A comprehensive guide to help first-time international travellers prepare for a smooth and enjoyable journey.",
    date: "Jan 20, 2026",
    readTime: "5 min read",
    body: [
      "Travelling internationally for the first time can feel overwhelming, but with the right preparation, it becomes an exciting adventure. Here is a step-by-step guide to help you get started.",
      "Start by ensuring your passport is valid for at least six months beyond your intended stay. Many countries enforce this rule strictly, and airlines may deny boarding if your passport is close to expiry.",
      "Research the visa requirements for your destination well in advance. Some countries offer visa-on-arrival for Nigerian passport holders, while others require applications weeks or months ahead. Sukom Travel can help you navigate these requirements.",
      "Book your flights early for the best fares. Mid-week flights (Tuesdays and Wednesdays) are often cheaper than weekend departures. Consider flexible tickets if your plans might change.",
      "Travel insurance is essential. It covers medical emergencies, trip cancellations, and lost luggage. Many embassies require proof of travel insurance as part of your visa application.",
      "Pack light but smart. Check the weather for your destination, bring appropriate clothing, and always carry essential medications in your carry-on luggage.",
      "Finally, inform your bank about your travel dates to avoid your cards being blocked abroad. Carry some local currency for immediate expenses upon arrival."
    ]
  },
  {
    id: "visa-documents",
    title: "What Documents Should You Prepare Before Applying for a Visa?",
    category: "Visa Guides",
    excerpt: "Understanding the essential documents needed for visa applications can significantly improve your chances of success.",
    date: "Jan 15, 2026",
    readTime: "7 min read",
    body: [
      "A well-prepared visa application is the foundation of a successful outcome. Missing or incorrect documents are among the top reasons for visa refusals.",
      "Your passport is the most critical document. Ensure it has at least two blank pages and is valid for six months beyond your intended travel date. Include any previous passports with travel history.",
      "Financial documents demonstrate your ability to fund your trip. Prepare three to six months of bank statements, showing consistent income and sufficient funds. Avoid large last-minute deposits that may raise questions.",
      "A strong cover letter explains your travel purpose, ties to Nigeria, and return plans. This is your opportunity to present your case clearly and professionally.",
      "Supporting documents vary by visa type. Tourist visas need hotel bookings and an itinerary. Business visas require invitation letters. Student visas need admission letters and proof of tuition payment.",
      "Always provide a travel itinerary with flight reservations and accommodation details. These demonstrate genuine travel intentions and help visa officers understand your plans.",
      "Finally, ensure all documents are organised, legible, and complete. Missing pages or unclear copies can delay or jeopardise your application."
    ]
  },
  {
    id: "consultation-prep",
    title: "How to Prepare for a Smooth Travel Consultation",
    category: "Travel Tips",
    excerpt: "Make the most of your travel consultation by coming prepared with the right information and questions.",
    date: "Jan 10, 2026",
    readTime: "4 min read",
    body: [
      "A travel consultation with Sukom is your opportunity to get expert guidance tailored to your specific needs. Here is how to make the most of it.",
      "Before your consultation, clearly define your travel goals. Are you travelling for tourism, business, study, or to visit family? Knowing your purpose helps us recommend the best visa pathway.",
      "Gather any documents you already have — passport copies, previous visa approvals, financial statements, and invitation letters. The more information we have, the better we can advise you.",
      "Write down your questions beforehand. Common topics include visa processing times, required documents, travel costs, and destination-specific requirements. No question is too small.",
      "Be honest about your situation. Whether it is your first visa application or you have been refused before, transparent information helps us provide accurate guidance and realistic timelines.",
      "During the consultation, take notes. We will cover a lot of information, and having written records ensures you do not miss important details when preparing your application.",
      "After the consultation, follow the action items we discuss. Timely document submission and prompt responses keep your application on track."
    ]
  },
  {
    id: "uk-visa-updates",
    title: "UK Visa Process: What You Need to Know in 2026",
    category: "Travel Updates",
    excerpt: "Stay informed about the latest changes and requirements for UK visa applications.",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    body: [
      "The UK remains one of the most popular destinations for Nigerian travellers, whether for tourism, education, or business. Here is what you need to know about the current visa process.",
      "All UK visa applications from Nigeria are submitted through the UK Visas and Immigration (UKVI) portal. You will need to create an account, complete the online form, and book a biometric appointment.",
      "Processing times vary by visa type. Standard visitor visas typically take 3 to 6 weeks, while student and work visas may take longer. We recommend applying at least 3 months before your intended travel date.",
      "The UK uses a points-based immigration system for work and study visas. Understanding how your qualifications and experience score against the requirements is crucial for a successful application.",
      "Financial requirements are strict. You must demonstrate sufficient funds to cover your stay without recourse to public funds. The required amount varies by visa type and duration.",
      "Common reasons for refusal include insufficient financial evidence, weak ties to Nigeria, inconsistent information, and incomplete documentation. Working with an experienced advisor significantly reduces these risks.",
      "If your application is refused, you may have the right to appeal or reapply. Understanding the refusal reason is key to a successful subsequent application."
    ]
  },
  {
    id: "africa-travel-guide",
    title: "Exploring Africa: A Guide to Travelling Within the Continent",
    category: "Destination Guides",
    excerpt: "Discover the beauty and diversity of African travel destinations and what to expect.",
    date: "Dec 28, 2025",
    readTime: "8 min read",
    body: [
      "Africa is a continent of incredible diversity, from the deserts of the Sahara to the savannahs of East Africa and the beaches of the Indian Ocean. Travelling within Africa offers unique experiences you will not find anywhere else.",
      "East African countries like Kenya and Tanzania are world-renowned for their wildlife safaris. The Maasai Mara and Serengeti offer some of the most spectacular animal migrations on Earth.",
      "South Africa combines wildlife, stunning landscapes, and vibrant cities. Cape Town, the Winelands, and Kruger National Park make it a versatile destination for all types of travellers.",
      "West Africa has its own charm, with Ghana offering rich cultural heritage, warm hospitality, and beautiful beaches. The Cape Coast castles tell powerful stories of African history.",
      "North Africa, particularly Morocco, offers a blend of African, Arab, and European influences. From the medinas of Marrakech to the Sahara Desert, Morocco is a feast for the senses.",
      "When travelling within Africa, research visa requirements carefully. Some countries offer visa-free entry for Nigerian passport holders, while others require visas in advance. Sukom can help you navigate these requirements.",
      "Pack appropriate clothing for your destination, carry essential medications, and always have copies of your important documents. African travel rewards the prepared traveller with unforgettable experiences."
    ]
  },
  {
    id: "visa-faqs",
    title: "Frequently Asked Questions About Visa Applications",
    category: "FAQs",
    excerpt: "Answers to the most common questions we receive about the visa application process.",
    date: "Dec 20, 2025",
    readTime: "6 min read",
    body: [
      "We receive many questions about the visa application process. Here are answers to the most frequently asked ones.",
      "How long does a visa application take? Processing times vary by country and visa type. UK visitor visas typically take 3 to 6 weeks, US visas depend on interview availability, and UAE visas can be processed in 3 to 7 business days.",
      "Can I apply for a visa if my passport is about to expire? Most countries require your passport to be valid for at least six months beyond your intended stay. We recommend renewing your passport before applying.",
      "What if my visa application is refused? A refusal does not mean you can never get a visa. Understanding the refusal reason and addressing it in a new application is the key to success.",
      "Do I need travel insurance for my visa application? Many countries require proof of travel insurance as part of the visa application process. Even when not required, travel insurance is strongly recommended.",
      "Can Sukom guarantee my visa approval? No one can guarantee visa approval — the decision rests with the immigration authorities. What we can guarantee is a professionally prepared application that maximises your chances.",
      "How do I track my application? Sukom provides regular updates throughout the process. You can also check your application status through our customer portal or by contacting our team directly."
    ]
  }
];
