// -----------------------------------------------------------------------------
// Blog content. Original, educational articles — no fabricated stats, guarantees
// or client claims. Rendered by /blog and /blog/[slug].
// -----------------------------------------------------------------------------

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string; // ISO
  readingTime: string;
  tags: string[];
  content: Block[];
}

export const POSTS: BlogPost[] = [
  {
    "slug": "google-business-profile-for-dentists-and-clinics",
    "title": "Google Business Profile for Dentists and Clinics: Setup, Practitioners and Reviews",
    "description": "A practical guide for dental practices, physiotherapy and other clinics on setting up a Google Business Profile: practice vs practitioner listings, categories, services, hours, photos, bookings and handling reviews without breaching patient confidentiality.",
    "category": "Google Business Profile",
    "author": "Kaushik Singh",
    "date": "2026-10-26",
    "readingTime": "8 min read",
    "tags": [
      "GBP",
      "Dentists",
      "Clinics",
      "Local SEO"
    ],
    "content": [
      {
        "type": "p",
        "text": "When someone needs a dentist, a physiotherapist or a local clinic, they rarely browse for long. They search, look at the map, check the reviews and opening hours, and call the place that looks trustworthy and available. For most practices, the Google Business Profile is the very first impression."
      },
      {
        "type": "p",
        "text": "Healthcare profiles also come with a few extra considerations that other local businesses don't face: listings for individual practitioners, booking systems, and reviews that may touch on private health matters. This guide covers how dental practices and clinics can set up and maintain a profile that is accurate, helpful and safe. Only the practice owner, or someone they have authorised, should claim, verify or manage the profile."
      },
      {
        "type": "h2",
        "text": "1. Practice listing vs. practitioner listings"
      },
      {
        "type": "p",
        "text": "Google allows a profile for the practice itself and, in many cases, separate profiles for individual practitioners who are public-facing, such as a dentist or physiotherapist who sees patients at that location. This is one of the most common sources of confusion."
      },
      {
        "type": "ul",
        "items": [
          "The practice profile should carry the practice name exactly as it appears on your signage, with the main phone number and website.",
          "A practitioner profile is for an individual professional. It typically uses the person's name and title, and may share the practice address.",
          "If a practice has only one practitioner, Google's guidelines generally recommend a single profile combining the practice and practitioner, rather than two competing listings.",
          "When a practitioner leaves, don't simply abandon their listing. Follow Google's guidance for practitioners who have moved on, so patients aren't sent to someone who no longer works there.",
          "Check Google's current guidelines for representing your business before creating any extra listings — the rules for practitioners are specific."
        ]
      },
      {
        "type": "h2",
        "text": "2. Get the core details right"
      },
      {
        "type": "ul",
        "items": [
          "Name: the real practice name. Avoid adding services or locations (\"Best Dentist Implants Downtown\") unless they are genuinely part of the registered trading name.",
          "Address: the actual location patients visit, including suite or floor number if the practice is inside a medical centre.",
          "Phone: a number that reception actually answers during opening hours. If you use a call-tracking number, keep your main number as an additional phone.",
          "Website: link to the right page — a multi-location group should link each profile to that location's page, not the homepage.",
          "Consistency: match your name, address and phone number across your website, directories and booking platforms. Our article \"NAP Consistency and Local Citations\" explains how to tidy this up."
        ]
      },
      {
        "type": "h2",
        "text": "3. Choose accurate categories"
      },
      {
        "type": "p",
        "text": "The primary category matters most. Pick the most specific option that describes the practice as a whole: \"Dentist\" or \"Dental clinic\" for a general practice, or a specialist category such as \"Orthodontist\" or \"Physiotherapist\" if that is genuinely what you are. Add secondary categories only for services you routinely provide. A general dental practice that offers occasional cosmetic treatments doesn't need to claim every specialist category, and adding inaccurate ones can confuse patients."
      },
      {
        "type": "h2",
        "text": "4. List your services in plain language"
      },
      {
        "type": "p",
        "text": "The services section helps patients understand what you offer before they call. Write it the way patients talk, not the way a clinical textbook does:"
      },
      {
        "type": "ul",
        "items": [
          "Group services sensibly: check-ups and cleaning, fillings, children's dentistry, emergency appointments, and so on.",
          "Add short, factual descriptions. Explain what the appointment involves, not outcomes you can't promise.",
          "Avoid guarantees or claims like \"pain-free\" or \"permanent results\". Healthcare advertising rules in many countries restrict this kind of language, and it sets unrealistic expectations.",
          "If you show prices, keep them current, and make clear when a price is a starting point rather than a fixed fee."
        ]
      },
      {
        "type": "h2",
        "text": "5. Opening hours, emergency hours and holidays"
      },
      {
        "type": "p",
        "text": "Patients often search when something hurts, which makes hours especially important for healthcare."
      },
      {
        "type": "ul",
        "items": [
          "Set regular hours for every day, including lunch closures if reception closes.",
          "Use the additional hours options (where available) for things like emergency appointment lines or phone hours that differ from opening hours.",
          "Set special hours for bank holidays and seasonal closures in advance, and include what patients should do if they need urgent care while you're closed — for example, the out-of-hours service in your area.",
          "If you're temporarily closed for refurbishment, mark the profile as temporarily closed rather than leaving normal hours in place."
        ]
      },
      {
        "type": "h2",
        "text": "6. Booking links"
      },
      {
        "type": "p",
        "text": "Many practices use an online booking system. Where Google offers an appointment or booking link for your category and region, add the link to your own booking page so patients can book directly. Some booking platforms may also connect automatically. Test the link from a phone regularly — a broken booking link means lost appointments — and make sure the phone number stays visible for patients who'd rather call."
      },
      {
        "type": "h2",
        "text": "7. Photos that reassure nervous patients"
      },
      {
        "type": "p",
        "text": "Many people feel anxious about a dental or clinic visit, and photos help them know what to expect. Useful photos include:"
      },
      {
        "type": "ul",
        "items": [
          "The outside of the building and the entrance, so patients can find you easily.",
          "The reception and waiting area, clean and well lit.",
          "A treatment room, tidy and without any patient present.",
          "Your team, with their permission, so patients recognise friendly faces.",
          "Accessibility features, such as step-free access or parking, if you have them."
        ]
      },
      {
        "type": "p",
        "text": "Never post photos of patients or their treatment results without explicit written consent, and check any professional or regulatory rules that apply to before-and-after images in your country."
      },
      {
        "type": "h2",
        "text": "8. Reviews: ask fairly and reply carefully"
      },
      {
        "type": "p",
        "text": "Reviews are a major factor in how patients choose a practice. Two things matter: asking in a fair way, and replying without revealing private information."
      },
      {
        "type": "ul",
        "items": [
          "Ask genuine patients in a consistent, simple way, such as a follow-up message after an appointment or a card at reception. Don't offer discounts or gifts in exchange for reviews, and never write or buy fake ones. Our guide \"How to Ask Customers for Google Reviews\" has scripts you can adapt.",
          "When you reply, never confirm that the reviewer is a patient, and never mention treatment details, appointments or health information — even if the reviewer shared them first.",
          "Keep positive replies short and general: thank them for their kind words and say the team will be pleased to hear it.",
          "For negative reviews, acknowledge the concern in general terms and invite them to contact the practice manager directly. Our article \"How to Reply to a Negative Google Review (With Examples)\" includes templates that work well when you can't discuss specifics."
        ]
      },
      {
        "type": "p",
        "text": "If you're unsure about confidentiality obligations in your country, check with your professional body or regulator before replying to sensitive reviews."
      },
      {
        "type": "h2",
        "text": "9. Use posts for practical updates"
      },
      {
        "type": "p",
        "text": "Google Business Profile posts are a good place for useful, non-promotional updates: holiday opening times, new team members joining, a reminder that check-up slots are available, or accessibility improvements. Keep them factual and friendly, and avoid health claims."
      },
      {
        "type": "h2",
        "text": "10. A monthly routine for practice managers"
      },
      {
        "type": "ol",
        "items": [
          "Check hours and set special hours for any upcoming holidays.",
          "Review the services list and remove anything you no longer offer.",
          "Check practitioner listings: is everyone listed still working here?",
          "Reply to new reviews, keeping confidentiality in mind.",
          "Add a couple of fresh photos of the practice or team (with consent).",
          "Test the phone, website and booking buttons from a phone.",
          "Look for public edits suggested to your profile and correct anything inaccurate."
        ]
      },
      {
        "type": "h2",
        "text": "Common mistakes to avoid"
      },
      {
        "type": "ul",
        "items": [
          "Duplicate profiles for the same practice, often created by old staff, agencies or booking platforms.",
          "Practitioner listings left live after someone leaves.",
          "Keyword-stuffed practice names, which can lead to suspension.",
          "Replies to reviews that reveal treatment details.",
          "Profile access held by a former employee or agency instead of the practice owner."
        ]
      },
      {
        "type": "h2",
        "text": "Need a hand with your practice profile?"
      },
      {
        "type": "p",
        "text": "DigitalPitch Technologies helps dental practices, clinics and other local businesses keep their Google Business Profiles accurate, complete and easy for patients to act on. We don't promise rankings, because no one honestly can, but we can tidy up your listings, set up a sensible review process and make sure patients find the right information. Get in touch through our contact page for a straightforward review of your current profile."
      }
    ]
  },
  {
    "slug": "google-business-profile-for-restaurants-and-cafes",
    "title": "Google Business Profile for Restaurants and Cafes: A Practical Setup Guide",
    "description": "How restaurants, cafes and takeaways can set up and maintain a Google Business Profile: categories, hours, menus, attributes, photos, ordering links and reviews — without shortcuts that put the profile at risk.",
    "category": "Google Business Profile",
    "author": "Kaushik Singh",
    "date": "2026-10-26",
    "readingTime": "8 min read",
    "tags": [
      "GBP",
      "Restaurants",
      "Cafes",
      "Local SEO"
    ],
    "content": [
      {
        "type": "p",
        "text": "For a restaurant or cafe, the Google Business Profile is often the first thing a hungry customer sees. Before they visit your website, before they look at your Instagram, they search \"cafe near me\" or your name, and Google shows your hours, photos, menu, reviews and a button to call or get directions. If that information is wrong or thin, people simply pick the next place on the list."
      },
      {
        "type": "p",
        "text": "This guide walks through what a food business should set up on its profile, what to keep updated, and the common mistakes that cost customers. It applies to sit-down restaurants, cafes, bakeries, takeaways and food trucks with a fixed spot. Only the owner, or someone the owner has authorised, should claim, verify or manage the profile."
      },
      {
        "type": "h2",
        "text": "1. Get the basics exactly right"
      },
      {
        "type": "p",
        "text": "Most problems we see on food profiles are basic, not advanced. Start here:"
      },
      {
        "type": "ul",
        "items": [
          "Business name: use the real name on your signage and menus. Don't add words like \"best pizza\" or your neighbourhood unless they are genuinely part of the trading name. Keyword-stuffed names break Google's guidelines and can lead to suspension.",
          "Address: the actual address customers walk into. If you share a building, add the unit or floor so delivery riders and first-time guests can find you.",
          "Phone number: a number that is answered during opening hours. If bookings go to a different line, make sure the profile number still reaches someone.",
          "Website: link to your own site or a dedicated page for that location, not a third-party listing.",
          "Consistency: the name, address and phone number should match your website, delivery apps and directory listings. Our article \"NAP Consistency and Local Citations\" explains why this matters and how to clean it up."
        ]
      },
      {
        "type": "h2",
        "text": "2. Choose categories that describe what you are"
      },
      {
        "type": "p",
        "text": "Your primary category has more influence than anything else on which searches you appear for, so choose the most specific accurate option. \"Italian restaurant\" or \"Pizza restaurant\" is more useful than plain \"Restaurant\". A cafe that mainly serves coffee might choose \"Coffee shop\"; one built around brunch might choose \"Brunch restaurant\" if it's available in your region."
      },
      {
        "type": "p",
        "text": "Add a small number of secondary categories only where they're true. A bakery that also runs a seated cafe can list both. Don't add categories for things you do occasionally, and don't add categories just because a competitor has them."
      },
      {
        "type": "h2",
        "text": "3. Treat opening hours as a promise"
      },
      {
        "type": "p",
        "text": "Wrong hours are one of the quickest ways to earn an angry review. Someone travels to you, finds the shutters down, and writes about it. Keep these up to date:"
      },
      {
        "type": "ul",
        "items": [
          "Regular hours for every day, including split shifts if you close between lunch and dinner.",
          "More hours (where available), such as kitchen hours, breakfast, happy hour, takeaway or delivery hours, if they differ from your main opening times.",
          "Special hours for bank holidays, Christmas, New Year and any planned closures. Set these a couple of weeks in advance.",
          "Temporary closure if you're shut for refurbishment, rather than leaving normal hours up."
        ]
      },
      {
        "type": "p",
        "text": "Put a recurring reminder in your calendar a month before each major holiday to review special hours. It takes five minutes and prevents a lot of disappointed customers."
      },
      {
        "type": "h2",
        "text": "4. Make your menu easy to find"
      },
      {
        "type": "p",
        "text": "Many people decide where to eat by scanning the menu and prices. Depending on your category and region, Google lets you add a menu link and, for many food businesses, menu items directly in the profile. Use whichever is available to you:"
      },
      {
        "type": "ul",
        "items": [
          "Menu link: point it to a fast-loading menu page on your own website. Avoid linking to a PDF that is hard to read on a phone.",
          "Menu items in the profile: add sections (starters, mains, drinks) with names, short descriptions and prices if you're comfortable showing them.",
          "Keep it current: remove dishes you no longer serve and update prices when they change. An outdated menu creates awkward conversations at the till.",
          "Note dietary options honestly in descriptions, such as vegetarian or vegan dishes, and only claim what your kitchen can actually provide."
        ]
      },
      {
        "type": "h2",
        "text": "5. Fill in attributes and service options"
      },
      {
        "type": "p",
        "text": "Attributes are the small facts that help people choose: dine-in, takeaway, delivery, outdoor seating, wheelchair-accessible entrance, Wi-Fi, good for kids, accepts card payments and so on. The exact list depends on your category and country."
      },
      {
        "type": "p",
        "text": "Go through every attribute you can edit and answer accurately. Customers can also suggest attributes, so check from time to time that nothing incorrect has been added. If you don't offer delivery yourself but are on delivery apps, make sure the profile reflects how customers can actually order."
      },
      {
        "type": "h2",
        "text": "6. Add ordering and reservation links carefully"
      },
      {
        "type": "p",
        "text": "Depending on your region and the services you use, your profile may show buttons for ordering or booking. Some of these come from partner platforms automatically. Check what appears on your profile and make sure each link works and goes where you want it to."
      },
      {
        "type": "ul",
        "items": [
          "If you take bookings through your own system, add that booking link where the profile allows it.",
          "If you prefer customers to order directly from you, add your own ordering link where possible, as well as any delivery partners you use.",
          "Test each button on your phone at least once a month. Broken booking links quietly lose tables."
        ]
      },
      {
        "type": "h2",
        "text": "7. Photos: show the food, the room and the front door"
      },
      {
        "type": "p",
        "text": "Photos do a lot of selling for a food business. You don't need a professional shoot, but you do need clear, honest, well-lit images. A useful starting set:"
      },
      {
        "type": "ul",
        "items": [
          "Your most-ordered dishes, photographed in natural light, as they're actually served.",
          "The inside of the venue at a normal busy time, so people know what to expect.",
          "The front of the building and entrance, so first-time visitors recognise it from the street.",
          "Drinks, desserts or anything you're known for.",
          "Seasonal specials when they're on, such as a Christmas menu or summer terrace."
        ]
      },
      {
        "type": "p",
        "text": "Add a few new photos every month rather than fifty in one go. Avoid stock images and heavily filtered shots that don't match what arrives at the table."
      },
      {
        "type": "h2",
        "text": "8. Use posts for specials and events"
      },
      {
        "type": "p",
        "text": "Google Business Profile posts let you share updates, offers and events. For restaurants and cafes they work well for things that change: a new seasonal menu, a quiz night, a set lunch, holiday opening times or a new dessert. Keep each post short, add a real photo, and include a button such as \"Book\" or \"Call\" where it makes sense. One or two posts a month is enough to keep the profile looking cared for."
      },
      {
        "type": "h2",
        "text": "9. Reviews: ask, reply and never fake"
      },
      {
        "type": "p",
        "text": "Food businesses tend to collect reviews quickly, both good and bad. Three rules:"
      },
      {
        "type": "ul",
        "items": [
          "Ask genuine customers in a simple, consistent way, such as a QR code on the bill folder or a line on the receipt. Don't offer discounts or freebies in exchange for reviews, and never post or buy fake reviews. Our guide \"How to Ask Customers for Google Reviews\" has scripts you can use.",
          "Reply to reviews regularly, positive and negative. Thank people by name, mention what they enjoyed, and keep replies short.",
          "Handle complaints calmly and take details offline. Our article \"How to Reply to a Negative Google Review (With Examples)\" includes templates for common restaurant complaints like slow service or a cold dish."
        ]
      },
      {
        "type": "h2",
        "text": "10. A simple monthly routine"
      },
      {
        "type": "p",
        "text": "Once the profile is set up, it only needs a little regular attention. A 20-minute monthly check is enough for most venues:"
      },
      {
        "type": "ol",
        "items": [
          "Check hours and set special hours for any upcoming holidays.",
          "Review the menu and prices against what you're actually serving.",
          "Add three to five new photos.",
          "Publish a post about a special, event or seasonal change.",
          "Reply to any reviews you haven't answered yet.",
          "Test the call, directions, website, booking and ordering buttons on your phone.",
          "Look at the profile's performance insights to see how people are finding you and what actions they take."
        ]
      },
      {
        "type": "h2",
        "text": "Common mistakes to avoid"
      },
      {
        "type": "ul",
        "items": [
          "Creating a second profile for a delivery-only brand at the same address without checking Google's guidelines first.",
          "Leaving the profile under a former manager's or agency's account. Make sure the owner has primary ownership and that access is removed when staff leave.",
          "Ignoring edits suggested by the public, which can change your hours or details without you noticing.",
          "Using a virtual office or someone else's address to appear in a different area.",
          "Expecting the profile alone to fix a slow website or a confusing booking process."
        ]
      },
      {
        "type": "h2",
        "text": "Want help with your restaurant or cafe profile?"
      },
      {
        "type": "p",
        "text": "DigitalPitch Technologies helps local businesses set up and maintain their Google Business Profiles, websites and review processes. We can't promise a particular ranking — nobody honestly can — but we can make sure your profile is accurate, complete and working hard for you. Get in touch through our contact page for a straightforward review of where your profile stands today."
      }
    ]
  },
  {
    "slug": "google-business-profile-for-plumbers-and-electricians",
    "title": "Google Business Profile for Plumbers and Electricians: Service Areas Done Right",
    "description": "How plumbers, electricians and other trades should set up a Google Business Profile as a service-area business: hiding the address, choosing service areas, categories, services and photos.",
    "category": "Google Business Profile",
    "author": "Kaushik Singh",
    "date": "2026-10-25",
    "readingTime": "8 min read",
    "tags": [
      "GBP",
      "Trades",
      "Service Areas",
      "Local SEO"
    ],
    "content": [
      {
        "type": "p",
        "text": "Plumbers and electricians have a slightly different Google Business Profile problem from shops and restaurants. Customers rarely come to you; you go to them. Many trades run from a home address, a van or a small unit that isn't open to the public. That raises questions a café owner never has to think about: should my address show? Which towns can I list? Why does my profile only seem to show up near my house?"
      },
      {
        "type": "p",
        "text": "Google handles this with what it calls a service-area business. Setting it up properly keeps your profile within Google's guidelines, protects your home address, and makes it clear to customers where you actually work. This guide walks through it step by step."
      },
      {
        "type": "h2",
        "text": "Before you change anything: who should own the profile"
      },
      {
        "type": "p",
        "text": "The business owner, or someone the owner authorises, should claim and verify the profile, using their own Google account. If an old employee, a previous web designer or a lead-generation company set it up, get ownership back to the owner first. Our guide 'Google Business Profile Verification: A Practical 2026 Guide' explains how ownership and verification work."
      },
      {
        "type": "p",
        "text": "Changing a service-area setup can sometimes trigger a new verification check, so it's worth having the owner's account in order before you start."
      },
      {
        "type": "h2",
        "text": "Step 1: Decide whether you are a service-area business"
      },
      {
        "type": "p",
        "text": "Ask one question: do customers come to your address during your opening hours, with staff there to serve them?"
      },
      {
        "type": "ul",
        "items": [
          "No, we always go to the customer. You're a service-area business. Hide your address and set service areas.",
          "Yes, we have a staffed trade counter or showroom, and we also go out to jobs. You're a hybrid business. You can show the address and set service areas.",
          "We work from home and nobody visits. Hide the address. Your home address should not be shown on the profile."
        ]
      },
      {
        "type": "p",
        "text": "Don't create a profile at an address you don't really operate from to look 'closer' to a busy town: no virtual offices, mailbox addresses or a friend's spare room. These go against Google's guidelines and are a common reason trade profiles get suspended."
      },
      {
        "type": "h2",
        "text": "Step 2: Hide the address (if customers don't visit)"
      },
      {
        "type": "p",
        "text": "In your Business Profile settings, edit the location and choose not to show the business address to customers. Google still needs a real address for verification and to understand roughly where you're based, but it won't display it publicly."
      },
      {
        "type": "p",
        "text": "This is also a privacy step. For a sole-trader electrician working from home, there's no reason for a home address to appear on Google Maps."
      },
      {
        "type": "h2",
        "text": "Step 3: Set service areas that reflect where you really work"
      },
      {
        "type": "p",
        "text": "Service areas tell customers and Google where you go. You can add towns, cities, postcodes or districts. A few practical rules:"
      },
      {
        "type": "ol",
        "items": [
          "List the places you genuinely cover and would happily drive to for a normal job, not every town you've ever visited.",
          "Google's guidance is that a service area shouldn't extend much beyond about two hours' drive from where you're based. For most trades, a much tighter area is more realistic.",
          "Google limits how many service areas you can add (currently up to 20), so choose the places that matter most rather than every village.",
          "Be consistent. If your website says you cover five towns, your profile shouldn't list fifteen."
        ]
      },
      {
        "type": "p",
        "text": "One thing to understand clearly: listing a town as a service area doesn't guarantee you'll appear in map results there. Where you're based, how relevant your profile is and how well known your business is all still matter. Service areas mainly make it clear where you work. Nobody can promise you'll rank in every town on the list."
      },
      {
        "type": "h2",
        "text": "Step 4: Choose categories carefully"
      },
      {
        "type": "p",
        "text": "Pick the primary category that matches most of your work, such as Plumber or Electrician. Add secondary categories only for work you regularly do, for example a plumber who also fits boilers, or an electrician who installs EV chargers."
      },
      {
        "type": "ul",
        "items": [
          "Don't add categories for services you'd only take on now and then.",
          "Don't put keywords in the business name, such as 'Smith Plumbing – Emergency Plumber 24/7 Leeds'. Use your real trading name.",
          "If you advertise '24/7' or 'emergency', make sure your hours and phone answering actually back that up."
        ]
      },
      {
        "type": "h2",
        "text": "Step 5: Spell out your services"
      },
      {
        "type": "p",
        "text": "Customers searching for a tradesperson usually have a specific job in mind. The Services section is where you show you do it."
      },
      {
        "type": "ul",
        "items": [
          "Plumbers: leak repairs, blocked drains, bathroom installs, boiler servicing (if you're qualified), radiator work, outdoor taps.",
          "Electricians: fault finding, consumer unit upgrades, rewires, lighting installs, EV charger installation, inspections and certificates.",
          "Write a sentence or two for each: what it involves, and any qualifications or registrations that genuinely apply.",
          "Only mention accreditations and registrations you actually hold, and keep them up to date."
        ]
      },
      {
        "type": "h2",
        "text": "Step 6: Photos that show real jobs"
      },
      {
        "type": "p",
        "text": "Trades photos don't need to be glamorous. They need to be real and recent."
      },
      {
        "type": "ul",
        "items": [
          "Your van with clear branding, if you have it. It helps customers recognise you on the day.",
          "Before-and-after shots of jobs, taken with the customer's permission and without showing anything that identifies their home or address.",
          "Tidy finished work: a neat consumer unit, a new bathroom, a clean pipework run.",
          "A friendly photo of you or the team."
        ]
      },
      {
        "type": "p",
        "text": "Avoid stock photos and images of other people's work. Customers notice, and it undermines trust before you've even spoken."
      },
      {
        "type": "h2",
        "text": "Step 7: Hours and phone answering"
      },
      {
        "type": "p",
        "text": "For trades, the phone number is often the most important thing on the profile. Make sure it's answered, or goes to a voicemail that sets clear expectations. Set your hours to match when you actually take calls. If you offer emergency call-outs outside those hours, say so in the description and only if you really do."
      },
      {
        "type": "h2",
        "text": "Step 8: Reviews from real customers"
      },
      {
        "type": "p",
        "text": "Reviews matter a lot to people letting a stranger into their home. Ask every happy customer, ideally just after the job is finished and they've seen the result. A short text with your review link works well."
      },
      {
        "type": "p",
        "text": "Never buy reviews, write your own or offer discounts in exchange for them; Google's policies prohibit this. Reply to every review, good or bad. Our posts 'How to Ask Customers for Google Reviews (Scripts Included)' and 'How to Reply to a Negative Google Review (With Examples)' include ready-to-use wording."
      },
      {
        "type": "h2",
        "text": "Step 9: Keep details consistent everywhere"
      },
      {
        "type": "p",
        "text": "Your business name, phone number and service areas should match across your website, social profiles and trade directories. If you hide your address on Google, be careful not to publish it elsewhere in a way that contradicts that. Our article 'Local Citations & NAP Consistency: The Quiet Ranking Factor' explains why consistency matters."
      },
      {
        "type": "h2",
        "text": "Common mistakes we see with trade profiles"
      },
      {
        "type": "ul",
        "items": [
          "Showing a home address that customers can't visit.",
          "Listing every town within 50 miles as a service area.",
          "Duplicate profiles for the same business, often one created by the owner and another by an old supplier. Report duplicates and keep one.",
          "Extra profiles at fake addresses in nearby towns.",
          "An unanswered phone, which wastes every other improvement."
        ]
      },
      {
        "type": "h2",
        "text": "A quick checklist"
      },
      {
        "type": "ol",
        "items": [
          "The owner controls the profile.",
          "Address hidden if customers don't visit.",
          "Realistic service areas, consistent with the website.",
          "Accurate primary category; few, relevant secondary ones.",
          "Real trading name, no keywords added.",
          "Services listed with short descriptions.",
          "Recent, real photos of jobs and the van.",
          "Hours that match when calls are answered.",
          "A steady, honest review routine, and replies to every review."
        ]
      },
      {
        "type": "h2",
        "text": "Need help?"
      },
      {
        "type": "p",
        "text": "If you'd like someone to check your profile and website together and tell you what to fix first, the DigitalPitch team can review it with you. We'll be straight with you about what helps and what doesn't, and we don't promise rankings. Get in touch through our contact page."
      }
    ]
  },
  {
    "slug": "google-business-profile-checklist-for-salons",
    "title": "Google Business Profile Checklist for Salons (Hair, Nails, Beauty and Barbers)",
    "description": "A practical, step-by-step Google Business Profile checklist for salons and barbers: categories, services, photos, booking, hours, reviews and weekly upkeep.",
    "category": "Google Business Profile",
    "author": "Kaushik Singh",
    "date": "2026-10-19",
    "readingTime": "7 min read",
    "tags": [
      "GBP",
      "Salons",
      "Local SEO"
    ],
    "content": [
      {
        "type": "p",
        "text": "For most salons, the Google Business Profile is the first thing a new client sees. Someone searches 'nail salon near me' or 'barber open now', taps a result, scrolls the photos, checks a couple of reviews and either calls, books or moves on. Your website may never come into it."
      },
      {
        "type": "p",
        "text": "That makes the profile worth an hour of careful setup and ten minutes a week of upkeep. This checklist is written for hair salons, nail bars, beauty salons and barbershops. Work through it in order; each section builds on the one before."
      },
      {
        "type": "h2",
        "text": "Before you start: make sure the right person has access"
      },
      {
        "type": "p",
        "text": "Only the salon owner, or someone the owner has authorised, should claim or verify the profile. If a previous manager, a former receptionist or an agency set it up years ago, get the owner added back as the primary owner before changing anything else. Our guide 'Google Business Profile Verification: A Practical 2026 Guide' walks through how ownership and verification work."
      },
      {
        "type": "p",
        "text": "Once the owner has access, add staff as managers rather than sharing the owner's Google login. That way, if someone leaves, you remove their access in a minute instead of changing passwords everywhere."
      },
      {
        "type": "h2",
        "text": "1. Name, address and contact details"
      },
      {
        "type": "ol",
        "items": [
          "Use your real-world salon name exactly as it appears on your sign. Don't add services or locations to the name (for example 'Bloom Hair Salon – Best Balayage Downtown'). It breaks Google's guidelines and can get a profile suspended.",
          "Enter the full street address clients actually walk into. If you work from a rented chair or suite inside another business, check Google's guidelines for practitioners before creating a separate profile.",
          "Add a phone number that is answered during opening hours. If calls usually go to voicemail, say on the profile that booking online is the fastest route.",
          "Match these details on your website, Instagram bio, Facebook page and any booking app. Our article 'Local Citations & NAP Consistency: The Quiet Ranking Factor' explains why that matters."
        ]
      },
      {
        "type": "h2",
        "text": "2. Categories: be precise, not greedy"
      },
      {
        "type": "p",
        "text": "Your primary category tells Google what you are. Pick the one that describes most of your work: Hair salon, Nail salon, Beauty salon, Barber shop, and so on. Then add a small number of secondary categories only for services you genuinely offer as a regular part of the business."
      },
      {
        "type": "ul",
        "items": [
          "A hair salon that also does regular brow and lash appointments might add a relevant beauty category.",
          "A barbershop that only does occasional beard trims doesn't need a separate category for that; list it as a service instead.",
          "Avoid adding categories just because they get more searches. Irrelevant categories can show you for searches you can't serve, which leads to wasted calls and poor reviews."
        ]
      },
      {
        "type": "h2",
        "text": "3. Services and prices"
      },
      {
        "type": "p",
        "text": "Salons have one big advantage here: clients want to know what you offer and roughly what it costs before they book. The Services section is where you answer that."
      },
      {
        "type": "ol",
        "items": [
          "List each service clients actually book: women's cut and finish, men's cut, skin fade, root colour, full head highlights, gel manicure, acrylic infills, brow shape and tint.",
          "Write one or two plain sentences per service: what it includes, roughly how long it takes, and who it suits.",
          "Add a starting price where you can ('from' prices are fine). Keep them in line with your booking system and price list.",
          "Group services under clear headings such as Cuts, Colour, Nails, Brows and Lashes, so the list is easy to scan on a phone."
        ]
      },
      {
        "type": "h2",
        "text": "4. Booking: make it one tap"
      },
      {
        "type": "p",
        "text": "If you take online bookings, add your booking link to the profile. Depending on the booking software you use, you may also be able to show a 'Book' button directly on Google through a supported booking partner; check your software's settings or help pages to see whether it offers this."
      },
      {
        "type": "p",
        "text": "Then test it on your own phone. Search for your salon, tap the booking option and make sure it lands on the right location and a working page, not a generic homepage or an expired link."
      },
      {
        "type": "h2",
        "text": "5. Hours, including the awkward ones"
      },
      {
        "type": "ul",
        "items": [
          "Set regular hours for every day, and mark closed days as closed.",
          "Add special hours for bank holidays, Christmas and New Year well in advance. Clients get annoyed when Google says you're open and the door is locked.",
          "If late-night appointments are by request only, don't list them as normal hours. Mention them in the description instead."
        ]
      },
      {
        "type": "h2",
        "text": "6. Photos that show the real salon"
      },
      {
        "type": "p",
        "text": "Salon clients choose with their eyes. A profile with a handful of blurry photos from years ago loses to one with clear, recent pictures, even if the work is just as good."
      },
      {
        "type": "ul",
        "items": [
          "Exterior: the shop front as it looks from the street, so first-time visitors recognise it.",
          "Interior: stations, wash area, waiting area. Natural light, tidy space.",
          "Your work: finished cuts, colour, nails and brows, photographed in good light. Only post photos of clients who have given permission.",
          "The team: friendly photos of the people clients will actually meet.",
          "Add a few new photos every month or so. A steady trickle keeps the profile looking current."
        ]
      },
      {
        "type": "p",
        "text": "Don't use stock images or other salons' work. Apart from being dishonest, it sets expectations you then have to live up to in the chair."
      },
      {
        "type": "h2",
        "text": "7. The description"
      },
      {
        "type": "p",
        "text": "You have a short description box. Use it to say, in plain language, who you are, what you specialise in, where you are, and how to book. For example: 'Independent hair salon near the train station specialising in colour corrections and curly cuts. Online booking available; walk-ins welcome on weekday mornings.'"
      },
      {
        "type": "p",
        "text": "Skip the keyword lists and the claims you can't back up ('best salon in the city'). They don't persuade people, and they don't help the profile."
      },
      {
        "type": "h2",
        "text": "8. Attributes"
      },
      {
        "type": "p",
        "text": "Go through the attributes Google offers for your category and tick only the ones that are true: things like wheelchair accessibility, appointment requirements, or payment options. These answer the practical questions people ask before visiting, and they're quick to set."
      },
      {
        "type": "h2",
        "text": "9. Reviews: ask consistently, reply to all"
      },
      {
        "type": "p",
        "text": "Reviews matter a lot for salons, because a new client is trusting you with how they'll look for the next six weeks. The fix isn't a one-off push; it's a habit."
      },
      {
        "type": "ul",
        "items": [
          "Ask at the end of a good appointment, when the client is happy with the result. A small card or QR code at the till makes it easy.",
          "Never offer discounts or freebies in exchange for reviews, and never write reviews for yourself or ask friends to. Google's policies prohibit both.",
          "Reply to every review. A short, personal thank-you for positive ones; a calm, specific reply for negative ones."
        ]
      },
      {
        "type": "p",
        "text": "Our posts 'How to Ask Customers for Google Reviews (Scripts Included)' and 'How to Reply to a Negative Google Review (With Examples)' give word-for-word scripts you can adapt."
      },
      {
        "type": "h2",
        "text": "10. Posts and offers"
      },
      {
        "type": "p",
        "text": "Google Business Profile posts are a simple way to show you're active: a new service, a seasonal offer, last-minute availability, or holiday opening times. One post a week or a couple a month is plenty for most salons. Use a real photo and a clear next step, such as 'Book online' or 'Call us'."
      },
      {
        "type": "h2",
        "text": "A 10-minute weekly routine"
      },
      {
        "type": "ol",
        "items": [
          "Reply to any new reviews.",
          "Check questions and messages, if you have messaging switched on.",
          "Add two or three new photos of recent work (with permission).",
          "Check that hours are right for the coming week, especially around holidays.",
          "Glance at the profile's performance view to see whether calls, bookings and direction requests are moving in the right direction."
        ]
      },
      {
        "type": "p",
        "text": "None of this guarantees a particular ranking; nobody can promise that. What it does is make your profile accurate, trustworthy and easy to act on, which is what turns a search into a booked appointment. For a broader look, see 'Google Business Profile Optimization: 12 Things Most Businesses Miss'."
      },
      {
        "type": "h2",
        "text": "Want a second pair of eyes?"
      },
      {
        "type": "p",
        "text": "If you'd rather have someone review your salon's profile and website together, the DigitalPitch team can go through it with you and point out what to fix first. Get in touch through our contact page. We'll tell you honestly what's worth doing and what isn't."
      }
    ]
  },
  {
    "slug": "how-to-reply-to-a-negative-google-review",
    "title": "How to Reply to a Negative Google Review (With Examples)",
    "description": "A calm, step-by-step way to respond to bad Google reviews, with example replies for common situations and the mistakes that make things worse.",
    "category": "Google Business Profile",
    "author": "Kaushik Singh",
    "date": "2026-10-13",
    "readingTime": "8 min read",
    "tags": [
      "Google Reviews",
      "Reputation",
      "GBP"
    ],
    "content": [
      {
        "type": "p",
        "text": "A negative Google review can feel personal, especially for a small business where the owner is often the one who did the work. The first instinct is usually to defend yourself, explain everything, or ignore it and hope it gets buried. None of those tend to help."
      },
      {
        "type": "p",
        "text": "Here's the thing to keep in mind: your reply is not really for the reviewer. It's for the next hundred people who read your profile while deciding whether to call you. A calm, specific, professional reply shows them how you treat customers when something goes wrong — and that is often more reassuring than a page of five-star reviews."
      },
      {
        "type": "p",
        "text": "This guide gives you a simple process, example replies for the situations local businesses see most, and the mistakes to avoid."
      },
      {
        "type": "h2",
        "text": "Before you reply: three quick checks"
      },
      {
        "type": "ol",
        "items": [
          "Wait until you're calm. Reply within a day or two, but not in the first ten minutes after reading it. A short pause makes for a much better reply.",
          "Check your records. Is this a real customer? What happened, when, and who was involved? Talk to the staff member if needed. You want to reply with facts, not assumptions.",
          "Decide what you can offer. A refund, a redo, a call with the manager, or simply an apology and an explanation of what you've changed. Know this before you write."
        ]
      },
      {
        "type": "p",
        "text": "Replying to reviews requires access to the Business Profile as the owner or a manager the owner has added. If nobody in the business currently has access, sort that out first — our guide to Google Business Profile verification explains how ownership and verification work."
      },
      {
        "type": "h2",
        "text": "A simple structure for every negative reply"
      },
      {
        "type": "p",
        "text": "Most good replies follow the same five steps. You don't need every step every time, but it's a reliable starting point:"
      },
      {
        "type": "ol",
        "items": [
          "Thank them, briefly. 'Thank you for taking the time to share this.' It signals you're not defensive.",
          "Acknowledge the specific problem. Name what went wrong in plain words, so it's clear you actually read it.",
          "Apologise for their experience. You can apologise for how they felt without admitting to things you don't believe happened.",
          "Explain what you've done or will do, in one or two sentences. Skip long justifications.",
          "Take it offline. Give a name and a direct way to reach someone who can resolve it."
        ]
      },
      {
        "type": "p",
        "text": "Keep it short. Three to five sentences is usually enough. Long replies tend to read as arguments, even when they aren't meant to."
      },
      {
        "type": "h2",
        "text": "Example 1: A genuine mistake on your side"
      },
      {
        "type": "p",
        "text": "Situation: a customer of a plumbing company says the plumber arrived two hours late without calling ahead."
      },
      {
        "type": "p",
        "text": "Reply: \"Hi James, thank you for letting us know, and we're sorry. Arriving two hours late without a call isn't the standard we aim for, and we understand it threw off your day. We've since changed our process so the office calls customers whenever a technician is running more than 30 minutes behind. If you're happy to, please call our office manager Anita on [number] — we'd like to make this right.\""
      },
      {
        "type": "p",
        "text": "Why it works: it owns the mistake, says what changed, and offers a real person to talk to. There's no excuse about traffic or a busy schedule."
      },
      {
        "type": "h2",
        "text": "Example 2: A complaint about price"
      },
      {
        "type": "p",
        "text": "Situation: a salon customer says the final bill was higher than expected."
      },
      {
        "type": "p",
        "text": "Reply: \"Hi Meera, thank you for your feedback. We're sorry the final price came as a surprise — that's not how we want anyone to leave. Colour services can change in price depending on length and the products used, and we should have talked you through that before we started. We've reminded the team to confirm the estimated price with every client up front. Please message us on [number] so we can talk it through.\""
      },
      {
        "type": "p",
        "text": "Why it works: it explains the pricing calmly without lecturing, admits the communication gap, and states a concrete change."
      },
      {
        "type": "h2",
        "text": "Example 3: A review with details you believe are wrong"
      },
      {
        "type": "p",
        "text": "Situation: a reviewer says a cafe refused to give them a refund, but your records show a refund was offered and declined."
      },
      {
        "type": "p",
        "text": "Reply: \"Hi Tom, thank you for sharing this. We're sorry your visit didn't go well. Our records show our team offered a refund on the day, but we may have explained it poorly, and we'd like to understand what happened. Please ask for Ravi, our manager, on [number] — he'll be glad to sort this out with you.\""
      },
      {
        "type": "p",
        "text": "Why it works: it corrects the record gently, without calling the reviewer a liar, and keeps the door open. Readers can see both sides without a public argument."
      },
      {
        "type": "h2",
        "text": "Example 4: A one-star review with no text"
      },
      {
        "type": "p",
        "text": "Situation: a star rating with no comment, and you can't tell who left it."
      },
      {
        "type": "p",
        "text": "Reply: \"Thank you for your rating. We're sorry we didn't meet your expectations. We'd really like to understand what went wrong so we can improve — please contact us on [number] or [email] and ask for the manager.\""
      },
      {
        "type": "p",
        "text": "Why it works: it's short and polite, and it shows anyone reading that you take every rating seriously."
      },
      {
        "type": "h2",
        "text": "Example 5: A review you don't think is from a real customer"
      },
      {
        "type": "p",
        "text": "If you can't find any record of the person and the review seems to describe a different business, stay calm in public and use the proper channels in private."
      },
      {
        "type": "p",
        "text": "Reply: \"Hi, thank you for your review. We take all feedback seriously, but we can't find a record of your visit or order. Could you contact us on [number] with the date and details so we can look into it?\""
      },
      {
        "type": "p",
        "text": "Then, separately, you can report the review through your Business Profile if you believe it breaks Google's review policies — for example, if it's spam, off-topic or clearly about another business. Google decides whether to remove it, and nobody can guarantee a removal. Never ask friends or staff to post positive reviews to 'balance it out'; that breaks Google's rules and can make things much worse."
      },
      {
        "type": "h2",
        "text": "Mistakes that make negative reviews worse"
      },
      {
        "type": "ul",
        "items": [
          "Arguing point by point. Even if you're right, a long rebuttal reads as defensive to future customers.",
          "Sharing private details. Don't mention the customer's appointment details, health information, order history or anything else they didn't share publicly.",
          "Copy-pasting the same reply everywhere. Identical replies look automated and uncaring. Use the structure, not the exact wording.",
          "Offering a discount for removing or changing the review. Incentives tied to reviews break Google's policies.",
          "Ignoring it. Silence can look like you don't care — or worse, like the complaint is true and you have nothing to say.",
          "Replying with sarcasm or humour. What feels witty in the moment rarely reads well to a stranger."
        ]
      },
      {
        "type": "h2",
        "text": "What happens after you reply"
      },
      {
        "type": "p",
        "text": "Sometimes a reviewer updates their review after the problem is solved. That's their choice; you can't ask for it in exchange for anything, but you can let them know you're glad it's sorted. Sometimes nothing changes, and that's fine too. Your reply is now part of your profile, and it's doing its job for every future reader."
      },
      {
        "type": "p",
        "text": "Look for patterns. If several reviews mention the same issue — late arrivals, unclear prices, slow replies — that's useful feedback about your process, not just your reputation. Fixing the cause will do more for your profile over time than any reply."
      },
      {
        "type": "h2",
        "text": "Make negative reviews a smaller share of the picture"
      },
      {
        "type": "p",
        "text": "The best protection against one bad review is a steady stream of honest reviews from your other customers. If you don't have a routine for that yet, our guide on how to ask customers for Google reviews includes scripts for in person, text, WhatsApp and email. And if you want to see how reviews fit into overall local visibility, our Google Business Profile optimisation checklist covers the other parts of your profile customers look at."
      },
      {
        "type": "h2",
        "text": "Want a second pair of eyes?"
      },
      {
        "type": "p",
        "text": "DigitalPitch Technologies helps local businesses manage their Google Business Profile, including review replies and the routines behind them. We won't promise to remove reviews or guarantee rankings — no honest agency can — but we can help you respond well and build a profile that reflects the work you actually do. Book a free consultation or message us on WhatsApp."
      }
    ]
  },
  {
    "slug": "how-to-ask-customers-for-google-reviews",
    "title": "How to Ask Customers for Google Reviews (Scripts Included)",
    "description": "A practical, policy-safe way to ask customers for Google reviews, with word-for-word scripts for in person, text, WhatsApp and email.",
    "category": "Google Business Profile",
    "author": "Kaushik Singh",
    "date": "2026-10-12",
    "readingTime": "8 min read",
    "tags": [
      "Google Reviews",
      "GBP",
      "Reputation"
    ],
    "content": [
      {
        "type": "p",
        "text": "Most happy customers never leave a review. Not because they don't want to, but because nobody asked, or because they were asked at the wrong moment in a way that felt awkward. The good news: asking for reviews is a skill, and it can be turned into a simple routine your whole team follows."
      },
      {
        "type": "p",
        "text": "This guide covers when to ask, how to ask without breaking Google's rules, and gives you scripts you can copy for in-person conversations, SMS, WhatsApp and email."
      },
      {
        "type": "h2",
        "text": "First, the rules: what Google allows and what it doesn't"
      },
      {
        "type": "p",
        "text": "Before any scripts, it's worth knowing the lines you shouldn't cross. Google's policies on reviews are clear on a few points:"
      },
      {
        "type": "ul",
        "items": [
          "Don't offer incentives. No discounts, freebies, prize draws or '10% off your next visit' in exchange for a review — even if you say 'any review, positive or negative'.",
          "Don't filter who you ask ('review gating'). Asking everyone is fine. Asking only the customers you think are happy, or sending unhappy customers to a private form and happy ones to Google, is not.",
          "Don't write reviews for yourself, or ask staff, friends or family to post reviews pretending to be customers.",
          "Don't post reviews on someone's behalf, for example by taking their phone and typing it for them."
        ]
      },
      {
        "type": "p",
        "text": "Breaking these rules can lead to reviews being removed and, in some cases, restrictions on your Business Profile. Policies can change, so check Google's current review guidelines from time to time. The approach in this guide stays well inside the lines: ask every customer, make it easy, and accept whatever they write."
      },
      {
        "type": "h2",
        "text": "When to ask: timing matters more than wording"
      },
      {
        "type": "p",
        "text": "The best moment to ask is when the value you delivered is freshest in the customer's mind. For most businesses that means:"
      },
      {
        "type": "ul",
        "items": [
          "Service businesses (plumbers, electricians, cleaners): right after the job is finished and the customer has seen the result.",
          "Salons, clinics and studios: at checkout, when the customer is looking at their new haircut or leaving the appointment.",
          "Restaurants and cafes: when the bill is settled, or in a follow-up message that evening.",
          "Shops and e-commerce: a few days after delivery, once they've used the product.",
          "Projects (web design, renovation, consulting): at handover or project sign-off."
        ]
      },
      {
        "type": "p",
        "text": "A second gentle reminder 3–5 days later is fine. More than that starts to feel like pestering."
      },
      {
        "type": "h2",
        "text": "Make it easy: get your review link ready"
      },
      {
        "type": "p",
        "text": "Every extra tap you remove increases the chance someone follows through. Before you ask anyone:"
      },
      {
        "type": "ol",
        "items": [
          "Sign in to your Google Business Profile (as the owner or a manager the owner has added).",
          "Find the option to ask for reviews and copy your short review link.",
          "Save it somewhere your team can reach quickly: a pinned note on the shop phone, an email signature, a text shortcut."
        ]
      },
      {
        "type": "p",
        "text": "You can also turn that link into a QR code for your counter, receipts or invoices. Keep the card simple: 'Enjoyed your visit? Scan to leave us a Google review.' That's all it needs."
      },
      {
        "type": "p",
        "text": "If your profile isn't fully set up yet, sort that out first. Our Google Business Profile optimisation checklist (on this blog) covers the basics customers will see when they land on your profile to write a review."
      },
      {
        "type": "h2",
        "text": "Script 1: Asking in person"
      },
      {
        "type": "p",
        "text": "In-person asks work best when they're short, specific and casual. Avoid long explanations of why reviews matter to you."
      },
      {
        "type": "p",
        "text": "After a completed job: \"Thanks again for having us. If you're happy with how it turned out, it would really help us if you left a quick Google review. I'll text you the link now so you don't have to search for us.\""
      },
      {
        "type": "p",
        "text": "At a salon or clinic checkout: \"We're a small local business, and Google reviews help new customers find us. Would you mind leaving a short one when you get a moment? There's a QR code right here, or I can send you the link.\""
      },
      {
        "type": "p",
        "text": "If they say yes on the spot: \"Thank you! Even a sentence about what you came in for helps other people know what we do.\""
      },
      {
        "type": "p",
        "text": "Notice what these scripts don't do: they don't say 'a 5-star review', they don't offer anything in return, and they don't pressure the customer to do it right now."
      },
      {
        "type": "h2",
        "text": "Script 2: SMS / text message"
      },
      {
        "type": "p",
        "text": "Text works well because the link is one tap away. Keep it under three lines and include your business name so they know who it's from."
      },
      {
        "type": "p",
        "text": "\"Hi Sarah, it's Dan from Brightside Plumbing. Thanks for choosing us today. If you have a minute, we'd really appreciate a Google review: [link]. Thank you!\""
      },
      {
        "type": "p",
        "text": "Reminder (3–5 days later, once only): \"Hi Sarah, Dan from Brightside Plumbing again. Just a gentle reminder in case you'd still like to leave a review: [link]. No worries if not. Thanks again!\""
      },
      {
        "type": "h2",
        "text": "Script 3: WhatsApp"
      },
      {
        "type": "p",
        "text": "If your customers already message you on WhatsApp, ask there. The tone can be a little warmer and more conversational."
      },
      {
        "type": "p",
        "text": "\"Hi Priya! Thanks for coming in today, we loved doing your colour. If you have a moment, a Google review would mean a lot to our small team: [link]\""
      },
      {
        "type": "p",
        "text": "Only message customers who have contacted you on WhatsApp or agreed to hear from you there. Don't add people to broadcast lists without their permission."
      },
      {
        "type": "h2",
        "text": "Script 4: Email"
      },
      {
        "type": "p",
        "text": "Email suits project-based businesses, B2B services and online shops. Use a clear subject line and one button or link."
      },
      {
        "type": "p",
        "text": "Subject: A quick favour from [Business Name]?"
      },
      {
        "type": "p",
        "text": "\"Hi [Name], thank you for working with us on [project/order]. We hope you're happy with [the result]. If you have two minutes, we'd be grateful if you shared your experience in a Google review — it helps other customers decide whether we're the right fit. [Leave a review]. If anything wasn't right, please reply to this email. We'd like to hear about it and fix it. Thanks, [Your name]\""
      },
      {
        "type": "p",
        "text": "That last line is important. Inviting feedback by reply is fine, as long as you send the review request to everyone and don't use it to steer unhappy customers away from Google."
      },
      {
        "type": "h2",
        "text": "Script 5: On invoices, receipts and your website"
      },
      {
        "type": "p",
        "text": "Passive requests won't bring in as many reviews as a direct ask, but they work quietly in the background:"
      },
      {
        "type": "ul",
        "items": [
          "Invoice footer: 'Happy with our work? A Google review helps other customers find us: [short link]'",
          "Printed receipt or table card: a QR code with one line of text.",
          "Website: a 'Review us on Google' link on your contact or thank-you page. If your website isn't turning visitors into enquiries in the first place, our article on building a website that converts is a good next read."
        ]
      },
      {
        "type": "h2",
        "text": "Turn it into a team routine"
      },
      {
        "type": "p",
        "text": "Reviews come in steadily when asking becomes a habit, not a campaign you remember once a quarter. A simple routine:"
      },
      {
        "type": "ol",
        "items": [
          "Decide the trigger moment for your business (job complete, checkout, delivery + 3 days).",
          "Pick one script per channel and save it where staff can copy it.",
          "Assign responsibility. The person who finished the job or served the customer usually gets the best response.",
          "Send one reminder only, then let it go.",
          "Reply to every review, positive or negative, within a few days. A short, specific thank-you shows future customers you're paying attention."
        ]
      },
      {
        "type": "p",
        "text": "Reviews are one part of local visibility, alongside your categories, photos, website and citations. Our Google Map Pack checklist walks through how they fit into the bigger picture."
      },
      {
        "type": "h2",
        "text": "Common mistakes to avoid"
      },
      {
        "type": "ul",
        "items": [
          "Asking for '5 stars'. Ask for honest feedback — it's both the rule and the more trustworthy approach.",
          "Sending the request days or weeks too late. The longer you wait, the less likely they are to respond.",
          "Making customers search for you. Always send the direct link.",
          "Bulk-messaging old customers all at once. A sudden spike of reviews can look unnatural. Steady, ongoing asks are better.",
          "Ignoring negative reviews. A calm, professional reply often matters more to future customers than the review itself."
        ]
      },
      {
        "type": "h2",
        "text": "Need help setting this up?"
      },
      {
        "type": "p",
        "text": "DigitalPitch Technologies helps local businesses set up their Google Business Profile, review request routines and the website pages that support them. We don't promise specific rankings or numbers of reviews, because no honest agency can, but we can help you build a process that makes asking easy and consistent. Book a free consultation and we'll look at your profile and current review process with you."
      }
    ]
  },
  {
    slug: "google-business-profile-verification-guide",
    title: "Google Business Profile Verification: A Practical 2026 Guide",
    description:
      "How Google Business Profile verification actually works in 2026, why profiles get stuck, and how to prepare your business so verification goes smoothly.",
    category: "Google Business Profile",
    author: "Naveen Singh",
    date: "2026-08-18",
    readingTime: "7 min read",
    tags: ["GBP", "Verification", "Local SEO"],
    content: [
      { type: "p", text: "Verification is the gate between your business and the Google Search and Maps visibility you want. Until your Google Business Profile is verified, you can't fully manage it — and customers may not see accurate information. Yet verification is where many business owners get stuck, often because of small, avoidable mistakes made before they ever click 'verify'." },
      { type: "p", text: "This guide explains how verification works in 2026, why profiles get delayed, and — most importantly — what you can do to give your profile the best possible chance. One honest note up front: Google controls verification. It decides which method you're offered and makes the final approval. No agency can guarantee it. What we can do is prepare everything correctly so the process is as fast and clean as possible." },
      { type: "h2", text: "What verification actually is" },
      { type: "p", text: "Verification is Google confirming that your business is real and that you're authorised to manage its profile. Once verified, you control your name, categories, hours, photos, services and posts, and you can respond to reviews. Without verification, your profile is either unmanaged or limited." },
      { type: "h2", text: "Why profiles get stuck" },
      { type: "p", text: "Most delays trace back to inconsistent or unclear business information. The common culprits:" },
      { type: "ul", items: [
        "Business name that doesn't match signage, your website and legal documents",
        "An address or service area that conflicts with other places you appear online",
        "Duplicate profiles for the same business competing with each other",
        "A brand-new website or phone number with no supporting footprint yet",
        "Categories or descriptions that don't clearly match what the business does",
      ]},
      { type: "h2", text: "How to prepare before you verify" },
      { type: "p", text: "Preparation is the part you fully control. Get these right and verification usually becomes a formality:" },
      { type: "ol", items: [
        "Lock your exact business name, address (or service area) and phone number, and use them identically everywhere.",
        "Fix or remove duplicate listings so Google sees one clear profile.",
        "Have supporting evidence ready — signage, a matching website, business documents — in case Google asks.",
        "Choose the most accurate primary category; it heavily influences how you're understood and ranked.",
        "Make sure your website clearly states the same business details as your profile.",
      ]},
      { type: "h2", text: "After verification: don't stop there" },
      { type: "p", text: "Verification gets you in the door — it doesn't get you ranked. Once you're verified, the work that drives calls and visits begins: complete every field, add real photos, publish services, gather and respond to reviews, and build local relevance around the searches your customers actually make." },
      { type: "p", text: "At DigitalPitch Technologies, Google Business Profile setup, verification preparation and optimization is our core specialty. We handle the full process with you and focus on legitimate, durable visibility — never guaranteed rankings or shortcuts." },
    ],
  },
  {
    slug: "rank-in-google-map-pack",
    title: "How to Rank in the Google Map Pack: A Local SEO Checklist",
    description:
      "The map pack drives most local calls and visits. Here's a practical checklist of the factors that influence local ranking and how to work on each.",
    category: "Local SEO",
    author: "Naveen Singh",
    date: "2026-08-05",
    readingTime: "8 min read",
    tags: ["Local SEO", "Map Pack", "Google Maps"],
    content: [
      { type: "p", text: "When someone searches for a service 'near me', Google shows a short list of local businesses on a map — the map pack. For most local businesses, being in that list is where the calls and store visits come from. Ranking there isn't luck; it's the result of relevance, distance and prominence signals you can influence." },
      { type: "h2", text: "1. Nail your Google Business Profile basics" },
      { type: "p", text: "Your profile is the foundation. Complete every field, choose the most accurate primary category, add relevant secondary categories, list your services, and keep hours and contact details current. An incomplete profile rarely competes." },
      { type: "h2", text: "2. Get your NAP consistent everywhere" },
      { type: "p", text: "Name, Address and Phone number should be identical across your website, profile and every directory. Inconsistencies confuse Google and weaken trust. This quiet factor is one of the most overlooked." },
      { type: "h2", text: "3. Build local relevance on your website" },
      { type: "ul", items: [
        "Create clear service pages that describe what you do",
        "Add location or service-area pages where it genuinely makes sense",
        "Use natural local keywords in titles, headings and copy",
        "Add structured data so Google understands your business",
      ]},
      { type: "h2", text: "4. Earn reviews — and respond to them" },
      { type: "p", text: "Review volume, recency and your responses all matter, and they strongly influence whether a searcher chooses you. Build a simple, consistent process to ask happy customers for reviews, and reply to every one professionally. Never buy or fake reviews — it's against Google's policies and it's a serious risk." },
      { type: "h2", text: "5. Strengthen local authority" },
      { type: "p", text: "Consistent citations in relevant directories, mentions from local and industry sources, and quality links to your site build the prominence Google looks for. This compounds over time." },
      { type: "h2", text: "6. Track the right things" },
      { type: "p", text: "Watch your calls, direction requests, website clicks, review growth and rankings for the specific keywords that matter to you — not vanity metrics. Tracking tells you what's working so you can double down." },
      { type: "p", text: "A realistic expectation: local SEO compounds. Foundations first, then relevance and authority, then steady improvement. Anyone promising an instant guaranteed #1 is selling something Google doesn't allow them to control." },
    ],
  },
  {
    slug: "google-business-profile-optimization-checklist",
    title: "Google Business Profile Optimization: 12 Things Most Businesses Miss",
    description:
      "A verified profile is only the start. Here are twelve optimization steps that turn a basic Google Business Profile into one that actually earns calls.",
    category: "Google Business Profile",
    author: "Naveen Singh",
    date: "2026-07-22",
    readingTime: "6 min read",
    tags: ["GBP", "Optimization", "Local SEO"],
    content: [
      { type: "p", text: "Most businesses verify their Google Business Profile, fill in the obvious fields, and stop. That leaves a lot of visibility on the table. Optimization is what separates a profile that just exists from one that consistently turns searches into calls and visits." },
      { type: "h2", text: "The twelve most-missed steps" },
      { type: "ol", items: [
        "Choosing a precise primary category (and adding accurate secondary ones)",
        "Writing a clear, keyword-aware business description that reads naturally",
        "Listing every service with its own short description",
        "Adding real, high-quality photos — and refreshing them regularly",
        "Filling in attributes (accessibility, payments, amenities) that customers filter by",
        "Keeping hours accurate, including special and holiday hours",
        "Publishing Google Posts for offers and updates where appropriate",
        "Monitoring and answering the Q&A section before competitors' answers appear",
        "Building a steady stream of reviews and replying to each one",
        "Aligning your website's information exactly with your profile",
        "Removing or resolving duplicate listings",
        "Reviewing profile insights and adjusting based on what customers actually do",
      ]},
      { type: "h2", text: "Why this matters" },
      { type: "p", text: "Every one of these is a signal — to Google about relevance, and to customers about whether you're the business to trust. Together they lift both your ranking potential and your conversion rate." },
      { type: "p", text: "Optimization is ongoing, not one-and-done. Google adds features, competitors improve, and customer behaviour shifts. A profile that's actively managed keeps its edge; one that's set and forgotten slowly slides." },
    ],
  },
  {
    slug: "ai-agents-for-small-business",
    title: "AI Agents for Small Business: Turn Missed Enquiries Into Booked Jobs",
    description:
      "Every missed message is a missed customer. Here's how AI agents answer, qualify and book around the clock — and where they fit in a real business.",
    category: "AI Automation",
    author: "Kaushik Singh",
    date: "2026-07-09",
    readingTime: "6 min read",
    tags: ["AI Agents", "Automation", "Lead Generation"],
    content: [
      { type: "p", text: "The hardest leads to win are the ones you never answered. A customer messages after hours, doesn't hear back fast enough, and books the competitor who replied first. For most small businesses, response speed — not marketing spend — is the biggest hidden leak." },
      { type: "h2", text: "What an AI agent actually does" },
      { type: "p", text: "An AI agent is a trained assistant that handles conversations on your website chat and messaging channels. Done well, it feels natural and on-brand, and hands off cleanly to a human when needed. In practice it can:" },
      { type: "ul", items: [
        "Answer common questions instantly, day or night",
        "Qualify leads by asking the right questions",
        "Book appointments straight into your calendar",
        "Log everything in your CRM",
        "Follow up so leads don't go cold",
      ]},
      { type: "h2", text: "Where it fits (and where it doesn't)" },
      { type: "p", text: "An AI agent is not a replacement for good people — it's a way to make sure no enquiry is ignored and your team spends time on the conversations that matter. The best setups are built around your real sales process, not a generic chatbot script." },
      { type: "h2", text: "Getting started sensibly" },
      { type: "ol", items: [
        "Map how a good enquiry should be answered, qualified and routed",
        "Train the agent on your services, tone and frequently asked questions",
        "Connect it to your website, WhatsApp, calendar and CRM",
        "Monitor real conversations and refine over the first few weeks",
      ]},
      { type: "p", text: "Start with one clear job — instant response and booking — prove it works, then expand. That's how automation earns its place instead of adding noise." },
    ],
  },
  {
    slug: "website-that-converts",
    title: "From Website to Customer: Building a Lead Engine That Converts",
    description:
      "A pretty website isn't the goal — enquiries are. Here's what actually turns visitors into customers, from speed and clarity to strong calls to action.",
    category: "Web Development",
    author: "Kaushik Singh",
    date: "2026-06-24",
    readingTime: "7 min read",
    tags: ["Websites", "Conversion", "SEO"],
    content: [
      { type: "p", text: "A website's job isn't to look impressive — it's to turn a visitor into an enquiry. Plenty of good-looking sites quietly lose customers every day because they're slow, unclear, or make it hard to take the next step. Here's what separates a brochure from a lead engine." },
      { type: "h2", text: "Speed is a feature" },
      { type: "p", text: "Visitors leave slow pages, and search engines favour fast ones. Performance — fast loading, stable layout, quick interaction — is one of the highest-leverage things you can fix, and it helps both conversions and rankings." },
      { type: "h2", text: "Clarity beats cleverness" },
      { type: "p", text: "Within seconds, a visitor should understand what you do, who it's for, and what to do next. Clear headlines, simple language and an obvious path forward outperform clever copy every time." },
      { type: "h2", text: "Make the next step obvious" },
      { type: "ul", items: [
        "One primary call to action, repeated at natural points",
        "Click-to-call and click-to-WhatsApp on mobile",
        "A short form that asks only what you need",
        "Trust signals — real work, real people, real contact details",
      ]},
      { type: "h2", text: "Build it to be found" },
      { type: "p", text: "Conversion and SEO aren't separate projects. Clean, semantic structure, sensible metadata and fast performance mean Google can crawl and rank your pages while visitors enjoy using them. The two reinforce each other." },
      { type: "p", text: "The best websites are measured, not just admired. Track where enquiries come from, watch where visitors drop off, and keep improving. A lead engine is something you tune — not something you launch and forget." },
    ],
  },
  {
    slug: "nap-consistency-local-citations",
    title: "Local Citations & NAP Consistency: The Quiet Ranking Factor",
    description:
      "Citations and consistent business details rarely get attention, but they quietly build the trust local rankings depend on. Here's how to get them right.",
    category: "Local SEO",
    author: "Naveen Singh",
    date: "2026-06-10",
    readingTime: "5 min read",
    tags: ["Local SEO", "Citations", "NAP"],
    content: [
      { type: "p", text: "Citations aren't glamorous, which is exactly why so many businesses neglect them — and why getting them right can quietly pull you ahead of competitors who don't. A citation is any online mention of your business's Name, Address and Phone number (NAP), whether on a directory, a review site or a local listing." },
      { type: "h2", text: "Why consistency matters" },
      { type: "p", text: "Google cross-references your business details across the web to decide how much to trust them. When your NAP is identical everywhere, that trust is strong. When it's inconsistent — an old address here, a different phone format there — Google hesitates, and hesitation costs you visibility." },
      { type: "h2", text: "How to get citations right" },
      { type: "ol", items: [
        "Decide the single, exact version of your name, address and phone number",
        "Audit where your business is already listed and fix inconsistencies",
        "Claim listings on the directories that matter for your industry and area",
        "Add citations gradually and keep them accurate over time",
        "Re-check whenever your details change — one update everywhere",
      ]},
      { type: "h2", text: "Quality over quantity" },
      { type: "p", text: "A handful of accurate, relevant citations beats hundreds of low-quality ones. Focus on directories real customers use and sources relevant to your industry and location." },
      { type: "p", text: "Citations work best as part of a bigger local strategy — alongside an optimized Google Business Profile, a strong website and a steady flow of reviews. On their own they're a quiet helper; together with the rest, they're part of what makes local rankings stick." },
    ],
  },
];

export const POST_SLUGS = POSTS.map((p) => p.slug);
export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
