import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  CalendarDays, Clock3, MapPin, Navigation, Phone, Volume2, VolumeX,
  Heart, Sparkles, Home, Utensils, Flower2, ChevronDown
} from "lucide-react";
import "./styles.css";

const CONFIG = {
  familyName: "The Chitneedi Family",
  date: "2026-08-27T09:00:00+05:30",
  displayDate: "Thusrday, 27 August 2026",
  muhurtham: "11:41 PM",
  lunch: "12:30 PM onwards",
  venue: "Our New Home",
  address: "Rapaka, Tanuku, Andhra Pradesh",
  mapsUrl: "https://www.google.com/maps/place/Rapaka,+Andhra+Pradesh/@16.701356,81.7205214,3337m/data=!3m2!1e3!4b1!4m15!1m8!3m7!1s0x3a37b7f1a2cc11d3:0xda43fc471176fce!2sTanuku,+Andhra+Pradesh!3b1!8m2!3d16.751228!4d81.7075787!16zL20vMDl6M2Y0!3m5!1s0x3a37c7b368d3a999:0xff1da830f215b6b5!8m2!3d16.7024885!4d81.7322061!16s%2Fg%2F12hlvy_10?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D",
  phone: "+91 9121374902",
};

const events = [
  { icon: "🪔", time: "11:41 PM", title: "Gruha Pravesham", text: "The auspicious entry into our new home." },
  { icon: "🕉️", time: "12.00 AM", title: "Ganapathi Pooja", text: "Seeking the blessings of Lord Ganesha." },
   { icon: "🌸", time: "12:30 AM", title: "Vastu & Satyanarayana Pooja", text: "A prayer for peace, prosperity and happiness." },
  { icon: "🍚", time: " On 28 August 2026 12:30 PM", title: "Lunch / Prasadam", text: "Please join us for lunch with family and friends." },
];

function Countdown() {
  const target = new Date(CONFIG.date).getTime();
  const getLeft = () => Math.max(0, target - Date.now());
  const [left, setLeft] = useState(getLeft());

  useEffect(() => {
    const timer = setInterval(() => setLeft(getLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const d = Math.floor(left / 86400000);
  const h = Math.floor((left / 3600000) % 24);
  const m = Math.floor((left / 60000) % 60);
  const s = Math.floor((left / 1000) % 60);

  return (
    <div className="countdown" aria-label="Countdown to Gruha Pravesham">
      {[[d,"Days"],[h,"Hours"],[m,"Minutes"],[s,"Seconds"]].map(([n,l]) => (
        <div className="count-box" key={l}>
          <strong>{String(n).padStart(2, "0")}</strong><span>{l}</span>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [musicOn, setMusicOn] = useState(false);
  const [showRsvp, setShowRsvp] = useState(false);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="app">
      

      <header className="hero">
        <div className="leaf leaf-a">🌿</div>
        <div className="leaf leaf-b">🌿</div>
        <div className="hero-inner">
          <div className="ganesha">ॐ</div>
          <p className="mantra">॥ “శ్రీ గణేశాయ నమః” ॥</p>
          <p className="eyebrow">WITH DIVINE BLESSINGS</p>
          <h1>Gruha<br/><em>Pravesham</em></h1>
          <div className="divider"><span>✦</span></div>
          <p className="invite">We warmly invite you and your family<br/>to celebrate the beginning of a beautiful new chapter with us.</p>
          <h2>{CONFIG.familyName}</h2>
          <div className="hero-date">
            <CalendarDays size={18}/> {CONFIG.displayDate}
            <span>•</span>
            <Clock3 size={18}/> {CONFIG.muhurtham}
          </div>
          <button className="primary" onClick={() => scrollTo("details")}>View Invitation <ChevronDown size={18}/></button>
        </div>
        <div className="scroll-hint">SCROLL <ChevronDown size={15}/></div>
      </header>

      <main>
        <section className="section intro" id="details">
          <div className="section-heading">
            <span className="ornament">❧</span>
            <p className="eyebrow">A NEW BEGINNING</p>
            <h2>With Joy in Our Hearts</h2>
          </div>
          <p className="intro-copy">
            With the blessings of the Almighty and our beloved elders, we are delighted to invite you
            to the auspicious occasion of our <strong>Gruha Pravesham</strong>. Your presence and blessings
            will make this special day even more memorable for our family.
          </p>
          <div className="om-card"><span>ॐ</span><p>May our new home be filled with<br/>love, laughter, peace and prosperity.</p></div>
        </section>

        <section className="section schedule">
          <div className="section-heading">
            <p className="eyebrow">THE AUSPICIOUS DAY</p>
            <h2>Pooja & Celebrations</h2>
          </div>
          <div className="event-grid">
            {events.map(e => (
              <article className="event-card" key={e.title}>
                <div className="event-icon">{e.icon}</div>
                <p className="event-time">{e.time}</p>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="countdown-section">
          <div className="pattern"></div>
          <div className="section-heading light">
            <Sparkles size={20}/>
            <p className="eyebrow">COUNTING DOWN TO THE SPECIAL DAY</p>
            <h2>See You Soon!</h2>
          </div>
          <Countdown />
        </section>

        <section className="section venue">
          <div className="section-heading">
            <p className="eyebrow">COME CELEBRATE WITH US</p>
            <h2>Our New Home</h2>
          </div>
          <div className="venue-card">
            <div className="house-art"><Home size={76} strokeWidth={1.1}/><span>ॐ</span></div>
            <div className="venue-info">
              <h3>{CONFIG.venue}</h3>
              <p><MapPin size={18}/>{CONFIG.address}</p>
              <div className="venue-actions">
                <a className="primary small" href={CONFIG.mapsUrl} target="_blank" rel="noreferrer">
                  <Navigation size={17}/> Get Directions
                </a>
                <a className="secondary small" href={`tel:${CONFIG.phone}`}><Phone size={17}/> Call Us</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section gallery">
          <div className="section-heading">
            <p className="eyebrow">A GLIMPSE OF THE BEGINNING</p>
            <h2>Our New Home</h2>
          </div>
          <div className="photo-grid">
            <div className="photo p1"><span>🏡</span><small>Our new beginning</small></div>
            <div className="photo p2"><span>🪔</span><small>Auspicious moments</small></div>
            <div className="photo p3"><span>🌸</span><small>With love & blessings</small></div>
          </div>
        </section>

        <section className="rsvp-section">
          <Flower2 className="rsvp-flower" size={38}/>
          <h2>Your Presence Means the World to Us</h2>
          <p>We would be honored to have you join us on this auspicious occasion.</p>
          <button className="primary" onClick={() => setShowRsvp(true)}>Confirm Your Presence <Heart size={17}/></button>
        </section>
      </main>

      <footer>
        <div className="footer-om">ॐ</div>
        <h3>With Love & Gratitude</h3>
        <p>{CONFIG.familyName}</p>
        <div className="footer-divider">✦ ✦ ✦</div>
        <small>Made with love for our special day</small>
      </footer>

      {showRsvp && (
        <div className="modal-backdrop" onClick={() => setShowRsvp(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setShowRsvp(false)}>×</button>
            <div className="modal-icon">🙏</div>
            <h2>Thank You!</h2>
            <p>Please call or WhatsApp us to confirm your presence.</p>
            <a className="primary" href={`https://wa.me/${CONFIG.phone.replace(/\D/g,"")}`} target="_blank" rel="noreferrer">
              Confirm on WhatsApp
            </a>
          </div>
        </div>
      )}

      
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
