# 🧭 BarzMap Landing Page — Design Document  
**Version:** 1.0  
**Goal:** Drive mailing list subscriptions for early users and future updates  
**Build Stack:** React + Tailwind CSS (Vite)  
**Last Updated:** October 2025  

---

## 1. Overview & Goals

**BarzMap** is a web platform that helps users find and share outdoor calisthenics parks and workout spaces. It’s designed for athletes, fitness enthusiasts, and beginners who enjoy training outdoors and want to discover new workout environments.

The **landing page** serves two main purposes:

1. **Communicate BarzMap’s value and features** clearly to visitors.  
2. **Encourage signups for the mailing list** — so users receive developer updates, early access invitations, and the official launch announcement.

**Primary conversion goal:** Mailing list subscriptions  
**Secondary goals:** Build brand awareness, validate interest, and attract early community members.

---

## 2. Target Audience

| Segment | Description | Motivations |
|----------|--------------|--------------|
| **Calisthenics Enthusiasts** | People who already train outdoors and want to find new workout spots. | Discover new parks, meet other athletes, and contribute to a growing community. |
| **Fitness & Wellness Seekers** | Gym-goers and runners interested in outdoor alternatives. | Try bodyweight workouts, enjoy outdoor training, and explore local parks. |
| **Travelers / Nomads** | People who travel frequently and seek nearby training locations. | Stay consistent with workouts wherever they go. |
| **Beginners / Prospective Athletes** | Those interested in starting calisthenics. | Find accessible parks and inspiration from real communities. |

---

## 3. Visual Direction & Branding

### 🎨 Mood & Tone

- **Energetic yet minimal.** Reflects the outdoor, movement-driven nature of calisthenics.  
- **Community-centered.** Emphasize connection, discovery, and contribution.  
- **Modern & trustworthy.** Clean UI that feels like a serious tool, not a gimmick.

### 🌈 Color Palette

| Role | Color | HEX |
|------|--------|------|
| **Primary (Sky Blue)** | ![#00AEEF](https://placehold.co/15x15/00AEEF/00AEEF.png) | `#00AEEF` |
| **Accent (Vibrant Green)** | ![#00C853](https://placehold.co/15x15/00C853/00C853.png) | `#00C853` |
| **Dark Gray (Text/Base)** | ![#222222](https://placehold.co/15x15/222222/222222.png) | `#222222` |
| **Background Gray** | ![#F5F7FA](https://placehold.co/15x15/F5F7FA/F5F7FA.png) | `#F5F7FA` |
| **Highlight Orange (CTA hover)** | ![#FFA726](https://placehold.co/15x15/FFA726/FFA726.png) | `#FFA726` |

Color logic: blue evokes trust and exploration, green symbolizes health and growth, orange adds energy to CTAs.

### ✍️ Typography

- **Headings:** `Poppins` – Bold, geometric, approachable.  
- **Body:** `Inter` – Clean, readable, modern.  
- **Hierarchy Example:**  
  - H1: `text-5xl font-bold`  
  - H2: `text-3xl font-semibold`  
  - Paragraph: `text-base text-gray-700 leading-relaxed`

### 🧩 Imagery & Iconography

- Use **real outdoor environments** (urban parks, beaches, community spaces).  
- Favor **wide shots** with natural lighting.  
- Include **diverse athletes** (men/women, different skill levels).  
- Iconography: thin-line or outline style with vibrant accent colors.

---

## 4. Page Structure & Layout

### 🏙️ Hero Section

**Layout:**
- Two-column layout (text left, image right on desktop; stacked on mobile).  
- Full viewport height (~90vh).  
- Prominent mailing list form centered in the hero.

**Copy:**
> **Headline:** “Find Outdoor Gyms. Anywhere.”  
> **Subheadline:** “Discover calisthenics parks near you and join our community of outdoor athletes.”  
> **Form:** “Sign up for early access and developer updates.”  
> **Button:** “Join the Movement →”

**Imagery:**
- Background photo or subtle video of people training on bars at sunset.  
- Optional overlay of faint map pins in motion.

**Animation Ideas:**
- Hero text fades up on load.  
- Pins on background map subtly pulse.

---

### ⚙️ How It Works

**Layout:** 3-column section with icons (mobile → vertical stack).

**Steps:**
1. **Explore the Map** – “Find calisthenics parks nearby.”  
2. **Save & Review Spots** – “Bookmark your favorites and share feedback.”  
3. **Contribute** – “Add new locations and help the community grow.”

**Imagery:**
- Simple map screenshots with color-coded pins.  
- Flat icons with green/blue gradient fills.

**Interaction:**
- Scroll-triggered fade-ins per step.

---

### 💪 Features

**Layout:**
- Two-column grid with alternating image/text alignment (zigzag).

**Features:**
- Interactive Map (MapLibre)  
- Community Submissions  
- Equipment Tracking  
- User Profiles & Reviews

**Copy example:**
> “BarzMap makes it easy to find the perfect park for your next workout — complete with equipment details and real photos from the community.”

**Imagery:**
- Mockups of the BarzMap interface (map view, park details modal).  
- Use screenshots framed inside devices (laptop, mobile).

---

### 🌍 Community Section

**Layout:**
- Center-aligned section with large testimonial carousel.  
- Background gradient from blue → green.

**Copy:**
> “A global movement built by athletes, for athletes.”  
>  
> “From local parks to international hotspots — BarzMap connects outdoor fitness lovers worldwide.”

**Imagery:**
- Collage of real outdoor scenes.  
- Global map with glowing pins animation.

**Optional CTA:**
> “Be part of the launch community → Join our mailing list.”

---

### 🚀 Call to Action (CTA)

**Layout:**
- Full-width band with high contrast.  
- Center-aligned copy + single input field for email.

**Copy:**
> **Headline:** “Get Notified When BarzMap Launches.”  
> **Subtext:** “Join thousands of athletes waiting for early access.”  
> **Input:** Email + [Subscribe] button

**Imagery:**
- Faint park silhouette or blurred city background.

**Interaction:**
- Subtle button hover scaling.  
- Success message after submission: “✅ You’re in! See you at launch.”

---

### ⚫ Footer

**Layout:**
- Two-column: left (brand + short tagline), right (links).  
- Use minimalist black or dark gray background.

**Contents:**
- Logo  
- Social icons (Instagram, YouTube, TikTok, Email)  
- Links: Privacy Policy | Contact | Terms

---

## 5. UX & Conversion Strategy

| Principle | Application |
|------------|--------------|
| **Single Primary CTA** | Email subscription is the only action; avoid distractions. |
| **Visual Hierarchy** | Bold headlines, contrasting CTA button colors, whitespace between sections. |
| **Social Proof** | Testimonials, stats, and global map visualization establish credibility. |
| **Repetition of CTA** | Include sign-up prompt in Hero, mid-page, and final section. |
| **Emotion & Aspiration** | Use copy that evokes movement, discovery, and belonging. |

---

## 6. Responsive Design Considerations

| Device | Layout Adjustment |
|---------|-------------------|
| **Desktop** | Two-column hero, multi-column feature grids, large hero imagery. |
| **Tablet** | Collapse features to single-column, ensure mailing form remains visible. |
| **Mobile** | Stacked layout; CTAs always full-width; font sizes adjusted (`text-lg` → `text-base`). |
| **Touch targets** | Buttons ≥ 44px height; ample padding for forms. |

---

## 7. Accessibility & Best Practices

- **Contrast ratio ≥ 4.5:1** for all text.  
- **Alt text** for all images and icons.  
- **Keyboard navigability:** Tab focus indicators for form fields and buttons.  
- **Readable fonts:** Minimum body size `16px`.  
- **Form validation:** Clear feedback for incorrect emails.  
- **Animation preference:** Respect user `prefers-reduced-motion`.

---

## 8. Next Steps

| Deliverable | Description | Owner |
|--------------|--------------|--------|
| **Wireframes** | Low-fidelity sketches showing content structure. | Designer |
| **High-Fidelity Mockups** | Visual design (desktop + mobile) in Figma. | Designer |
| **Front-End Build** | Implement in React + Tailwind (Vite). Include Mailchimp or Supabase subscription endpoint. | Developer |
| **Launch Page Copy** | Final polish on headlines, CTAs, and testimonials. | Marketing / Dev Team |
| **Pre-Launch Automation** | Set up mailing list confirmation + thank-you page. | Developer |

---

## 🧠 Example Hero Copy & Visual Intent

> **Headline:**  
> “The World’s Outdoor Gym Map.”  
>  
> **Subtext:**  
> “Discover parks, train outdoors, and connect with athletes worldwide. Join our list to get early access.”  
>  
> **Button:**  
> “Notify Me at Launch →”

**Visual Mock:**
- Background: Wide-angle shot of athletes on pull-up bars with natural lighting.  
- Foreground: Map interface overlay with 3–5 glowing pins fading in.  
- Motion: Slight parallax on scroll for depth.

---

## 🧱 Text-Based Wireframe Layout Sketch
