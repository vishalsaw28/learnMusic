🎵 LearnMusic — Modern Music Learning Platform

LearnMusic is a modern, responsive web application built with Next.js, TypeScript, and Tailwind CSS, designed to help users explore, enroll in, and engage with music courses of all genres — from classical piano to electronic music production.

## FEATURED COURSES

• Guitar Fundamentals — Learn the basics of playing guitar with our comprehensive beginner's course.  
• Advanced Vocal Techniques — Sharpen your singing skills with intermediate to advanced vocal training.  
• Music Production Fundamentals — Dive into the essentials of sound engineering and mixing.  
• Electronic Music Production — Create compelling electronic music with course designed for all levels.  
• Blues Guitar Techniques — Discover soulful blues techniques to enrich your guitar playing.

📁 Project Structure
learnMusic-main/
├── .gitignore
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── public/
<<<<<<< HEAD
│ ├── file.svg
│ ├── globe.svg
│ ├── next.svg
│ ├── vercel.svg
│ ├── window.svg
│ └── courses/
│ ├── blues.jpg
│ ├── classical-music.jpg
│ ├── drumming.jpg
│ ├── edm.jpg
│ ├── guitar.jpg
│ ├── jazz.jpg
│ ├── music-prod.jpg
│ ├── piano.jpg
│ ├── song-writing.jpg
│ └── vocalist.jpg
├── src/
│ ├── middleware.ts
│ ├── app/
│ │ ├── favicon.ico
│ │ ├── globals.css
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ ├── contact/
│ │ │ └── page.tsx
│ │ ├── courses/
│ │ │ └── page.tsx
│ │ ├── sign-in/
│ │ │ └── [[...sign-in]]/page.tsx
│ │ └── sign-up/
│ │ └── [[...sign-up]]/page.tsx
│ ├── components/
│ │ ├── FeaturedCourses.tsx
│ │ ├── Footer.tsx
│ │ ├── GridBackground.tsx
│ │ ├── HeroSection.tsx
│ │ ├── Instructors.tsx
│ │ ├── MeteorShower.tsx
│ │ ├── Navbar.tsx
│ │ ├── StickyScrollRevel.tsx
│ │ ├── TestimonialCards.tsx
│ │ ├── UpcomingWebinar.tsx
│ │ └── ui/
│ │ ├── 3d-card.tsx
│ │ ├── Spotlight.tsx
│ │ ├── animated-tooltip.tsx
│ │ ├── background-gradient.tsx
│ │ ├── card-hover-effect.tsx
│ │ ├── infinite-moving-cards.tsx
│ │ ├── meteors.tsx
│ │ ├── moving-border.tsx
│ │ ├── navbar-menu.tsx
│ │ ├── sticky-scroll-reveal.tsx
│ │ └── wavy-background.tsx
│ ├── data/
│ │ └── music_courses.json
│ └── lib/
│ └── utils.ts

⚙️ Technology Stack
Category Technology
Framework Next.js 14+ (App Router)

Language TypeScript

Styling Tailwind CSS
, custom animations
UI Components ShadCN UI, custom UI utilities (3D cards, tooltips, gradients, animations)
Authentication Likely Clerk
or similar (based on /sign-in and /sign-up routes)
Linting ESLint + TypeScript ESLint config
Assets Local static images in /public/courses/
Data Handling Local JSON file (music_courses.json)
Build Tool Next.js built-in bundler (Turbopack/Vite not used)
=======
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
│   └── courses/
│       ├── blues.jpg
│       ├── classical-music.jpg
│       ├── drumming.jpg
│       ├── edm.jpg
│       ├── guitar.jpg
│       ├── jazz.jpg
│       ├── music-prod.jpg
│       ├── piano.jpg
│       ├── song-writing.jpg
│       └── vocalist.jpg
├── src/
│   ├── middleware.ts
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── courses/
│   │   │   └── page.tsx
│   │   ├── sign-in/
│   │   │   └── [[...sign-in]]/page.tsx
│   │   └── sign-up/
│   │       └── [[...sign-up]]/page.tsx
│   ├── components/
│   │   ├── FeaturedCourses.tsx
│   │   ├── Footer.tsx
│   │   ├── GridBackground.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Instructors.tsx
│   │   ├── MeteorShower.tsx
│   │   ├── Navbar.tsx
│   │   ├── StickyScrollRevel.tsx
│   │   ├── TestimonialCards.tsx
│   │   ├── UpcomingWebinar.tsx
│   │   └── ui/
│   │       ├── 3d-card.tsx
│   │       ├── Spotlight.tsx
│   │       ├── animated-tooltip.tsx
│   │       ├── background-gradient.tsx
│   │       ├── card-hover-effect.tsx
│   │       ├── infinite-moving-cards.tsx
│   │       ├── meteors.tsx
│   │       ├── moving-border.tsx
│   │       ├── navbar-menu.tsx
│   │       ├── sticky-scroll-reveal.tsx
│   │       └── wavy-background.tsx
│   ├── data/
│   │   └── music_courses.json
│   └── lib/
│       └── utils.ts

⚙️ Technology Stack
Category	Technology
Framework	Next.js 14+ (App Router)

Language	TypeScript

Styling	Tailwind CSS
, custom animations
UI Components	ShadCN UI, custom UI utilities (3D cards, tooltips, gradients, animations)
Authentication	Likely Clerk
 or similar (based on /sign-in and /sign-up routes)
Linting	ESLint + TypeScript ESLint config
Assets	Local static images in /public/courses/
Data Handling	Local JSON file (music_courses.json)
Build Tool	Next.js built-in bundler (Turbopack/Vite not used)
>>>>>>> a1ec9c4ce6317913583dfa5b0f03e7be8fbef379
🧩 Key Directories Explained
/src/app

Contains Next.js App Router pages:

/ — Homepage (Hero section, featured courses, testimonials)

/courses — Displays list of music courses

/contact — Contact information or form

/sign-in and /sign-up — Authentication pages

/src/components

Reusable React components such as:

Navbar, Footer, HeroSection

FeaturedCourses, TestimonialCards, Instructors

MeteorShower, GridBackground — for dynamic effects

/ui/ — Custom UI utilities (animated tooltips, moving borders, sticky scroll, 3D cards)

/src/data/music_courses.json

Contains static JSON data for all available music courses (title, image, description, etc.).

/src/lib/utils.ts

Helper functions used across the app (e.g., formatting, utility logic).

/public/courses/

Holds all image assets for the courses (guitar, piano, EDM, jazz, etc.).

🪄 Features

🎸 Browse curated music courses across genres

🌈 Visually stunning animated backgrounds (3D cards, meteor showers, gradients)

🧑‍🏫 Instructor and testimonial showcase

📅 Upcoming webinars section

🪪 Authentication pages for sign-in and sign-up

📱 Responsive design across all devices

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/learnMusic.git
cd learnMusic-main

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev

<<<<<<< HEAD
Visit http://localhost:3000
to view it in your browser.

🧰 Available Scripts
Command Description
npm run dev Starts local development server
npm run build Builds the app for production
npm run start Starts the production server
npm run lint Runs ESLint checks
=======

Visit http://localhost:3000
 to view it in your browser.

🧰 Available Scripts
Command	Description
npm run dev	Starts local development server
npm run build	Builds the app for production
npm run start	Starts the production server
npm run lint	Runs ESLint checks
>>>>>>> a1ec9c4ce6317913583dfa5b0f03e7be8fbef379
📦 Deployment

You can easily deploy this app to platforms like:

Vercel
