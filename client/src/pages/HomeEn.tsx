import { useState } from 'react';
import { ChevronDown, MapPin, Clock, Utensils, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomeEn() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);

  const toggleDay = (day: string) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container py-4 px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl text-primary mb-1" style={{ fontFamily: 'Caveat, cursive' }}>
              Hyman's Travel Journal
            </h1>
            <p className="text-lg text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Paris & Mykonos · April 30 - May 8, 2026
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-8">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-base text-muted-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ✨ A curated travel experience combining art, culture, and culinary delights across two iconic European destinations.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>Duration</p>
                  <p className="text-lg text-primary" style={{ fontFamily: 'Caveat, cursive' }}>9 Days</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>Cities</p>
                  <p className="text-lg text-primary" style={{ fontFamily: 'Caveat, cursive' }}>2</p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>Experiences</p>
                  <p className="text-lg text-primary" style={{ fontFamily: 'Caveat, cursive' }}>∞</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344760698/iTNCRBAbnhMXFfonuHK58r/paris-canal-illustration-oQp5Ed2mfyxbbifJ5bFmKF.webp"
                alt="Canal Saint-Martin"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Paris Section */}
      <section className="py-12 border-b border-border">
        <div className="container px-4">
          <div className="mb-8">
            <h2 className="text-4xl text-primary mb-2" style={{ fontFamily: 'Caveat, cursive' }}>🇫🇷 PARIS</h2>
            <p className="text-base text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              April 30 - May 3 · Art, Culture & Romance
            </p>
          </div>

          {/* Paris Image */}
          <div className="mb-8">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344760698/iTNCRBAbnhMXFfonuHK58r/paris-marais-illustration-bW6bTFJwQ7VjLuVncLRxJb.webp"
              alt="Le Marais, Paris"
              className="rounded-xl shadow-lg w-full mb-4"
            />
          </div>

          {/* Days */}
          <div className="space-y-4">
            {parisItinerary.map((day) => (
              <DayCard
                key={day.id}
                day={day}
                isExpanded={expandedDay === day.id}
                onToggle={() => toggleDay(day.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mykonos Section */}
      <section className="py-12">
        <div className="container px-4">
          <div className="mb-8">
            <h2 className="text-4xl text-primary mb-2" style={{ fontFamily: 'Caveat, cursive' }}>🇬🇷 MYKONOS</h2>
            <p className="text-base text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
              May 4 - May 8 · Island Paradise & Ancient Wonders
            </p>
          </div>

          {/* Mykonos Images */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344760698/iTNCRBAbnhMXFfonuHK58r/mykonos-old-town-illustration-Jw8y9ZtTyAS5jUm2W7HGdL.webp"
              alt="Mykonos Old Town"
              className="rounded-xl shadow-lg w-full"
            />
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344760698/iTNCRBAbnhMXFfonuHK58r/mykonos-delos-illustration-bDavEAyPAYcZ6baHNbjPGW.webp"
              alt="Delos & Mykonos"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Days */}
          <div className="space-y-4">
            {mykonosItinerary.map((day) => (
              <DayCard
                key={day.id}
                day={day}
                isExpanded={expandedDay === day.id}
                onToggle={() => toggleDay(day.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Food & Wine Section */}
      <section className="py-12 bg-secondary/20 border-t border-border">
        <div className="container px-4">
          <h2 className="text-4xl text-primary mb-6" style={{ fontFamily: 'Caveat, cursive' }}>🍷 Culinary Journey</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663344760698/iTNCRBAbnhMXFfonuHK58r/food-wine-illustration-6GLTsR4KSfFS9j3qqXNadG.webp"
              alt="French & Greek Flavors"
              className="rounded-xl shadow-lg w-full"
            />
            <div>
              <p className="text-base text-muted-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                This journey celebrates the finest culinary traditions of France and Greece. From intimate bistros in the Marais to hidden tavernas on the Aegean, every meal tells a story.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-primary">
                  <p className="text-lg text-primary" style={{ fontFamily: 'Caveat, cursive' }}>Pro Tip</p>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Always book ahead at popular restaurants, especially on weekends and holidays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 border-t border-border">
        <div className="container px-4">
          <h2 className="text-4xl text-primary mb-8" style={{ fontFamily: 'Caveat, cursive' }}>💡 Travel Tips</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{tip.icon}</div>
                  <div>
                    <h3 className="text-xl text-primary mb-2" style={{ fontFamily: 'Caveat, cursive' }}>{tip.title}</h3>
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>{tip.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 border-t border-border">
        <div className="container px-4 text-center">
          <p className="text-lg mb-2" style={{ fontFamily: 'Caveat, cursive' }}>Safe travels, Hyman!</p>
          <p className="text-sm opacity-90" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Created with ❤️ for unforgettable memories
          </p>
        </div>
      </footer>
    </div>
  );
}

function DayCard({
  day,
  isExpanded,
  onToggle,
}: {
  day: any;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-secondary/10 transition-colors flex items-center justify-between"
      >
        <div className="flex-1">
          <h3 className="text-2xl text-primary mb-1" style={{ fontFamily: 'Caveat, cursive' }}>{day.title}</h3>
          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>{day.date}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-primary transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <div className="border-t border-border px-6 py-6 space-y-6 bg-background/50">
          {day.activities.map((activity: any, idx: number) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{activity.icon}</div>
                <div>
                  <h4 className="text-lg text-primary" style={{ fontFamily: 'Caveat, cursive' }}>{activity.time}</h4>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>{activity.title}</p>
                </div>
              </div>

              {activity.location && (
                <div className="flex items-start gap-3 ml-9">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>{activity.location}</p>
                    {activity.address && (
                      <p className="text-xs text-muted-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {activity.address}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {activity.description && (
                <p className="text-sm text-muted-foreground ml-9" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {activity.description}
                </p>
              )}

              {activity.tips && (
                <div className="ml-9 bg-accent/10 rounded-lg p-3 border-l-2 border-accent">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-foreground" style={{ fontFamily: 'Poppins, sans-serif' }}>{activity.tips}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const parisItinerary = [
  {
    id: 'day1',
    title: 'Day 1 · Arrival & Awakening',
    date: 'April 30 (Thursday)',
    activities: [
      {
        icon: '☕',
        time: 'Afternoon',
        title: 'Canal Saint-Martin Stroll',
        location: 'Canal Saint-Martin, 10th Arrondissement',
        address: '15 min walk from hotel',
        description:
          'Wander along the picturesque canal where locals gather. Find a cozy café and sit down to ease into Parisian time.',
        tips: 'After long flights, avoid heavy sightseeing. Let your body adjust naturally.',
      },
      {
        icon: '🍽️',
        time: 'Dinner',
        title: 'Chez Jeannette',
        location: 'Chez Jeannette',
        address: '47 Rue du Faubourg Saint-Denis, 10th Arr.',
        description:
          'Casual bistro where artists and workers mix. Perfect for recovering from jet lag without formality.',
        tips: 'No dress code needed. Budget-friendly with consistent quality.',
      },
    ],
  },
  {
    id: 'day2',
    title: 'Day 2 · Art Deep Dive',
    date: 'May 1 (Friday, Labor Day)',
    activities: [
      {
        icon: '🎨',
        time: 'Morning',
        title: 'Musée National Picasso-Paris',
        location: 'Marais District',
        address: '5 Rue de Thorigny, 75003 Paris',
        description:
          'Over 5,000 works in a historic mansion. The building itself is a masterpiece, less crowded than the Louvre.',
        tips: '⚠️ Many museums close on May 1st, but Picasso Museum usually stays open. Confirm before visiting.',
      },
      {
        icon: '🥘',
        time: 'Lunch',
        title: 'Marché des Enfants Rouges',
        location: 'Red Children Market',
        address: '39 Rue de Bretagne, 75003 Paris',
        description:
          'Paris\'s oldest covered market (since 1628). A lively food hall with French, Japanese, Italian, and African cuisines.',
        tips: 'No reservations needed. Relaxed atmosphere, perfect for tasting local flavors.',
      },
      {
        icon: '🏛️',
        time: 'Afternoon',
        title: 'Musée Carnavalet',
        location: 'Marais District',
        address: '23 Rue de Sévigné, 75003 Paris',
        description:
          'Dedicated to Paris history. Housed in two grand mansions with peaceful courtyards and exquisitely preserved rooms.',
        tips: 'FREE admission! A hidden sanctuary away from crowds.',
      },
      {
        icon: '🍷',
        time: 'Dinner',
        title: 'Bistrot des Tournelles',
        location: 'Near Place des Vosges',
        address: '6 Rue des Tournelles, 75004 Paris',
        description:
          'Vintage charm with old photos and hand-drawn signs. Classic French home cooking. Open 7-11pm only.',
        tips: 'Book several days ahead. One of Paris\'s most nostalgic bistros. €40-70 per person.',
      },
    ],
  },
  {
    id: 'day3',
    title: 'Day 3 · Monet & Romantique',
    date: 'May 2 (Saturday)',
    activities: [
      {
        icon: '🎨',
        time: 'Morning',
        title: 'Musée Marmottan Monet',
        location: '16th Arrondissement',
        address: '2 Rue Louis Boilly, 75016 Paris',
        description:
          'World\'s largest Monet collection (100+ paintings) including the original "Impression, Sunrise" that named the movement. Underground oval gallery features his late Water Lilies.',
        tips: 'Closed Mondays. Buy tickets online to skip queues. More intimate than Orangerie.',
      },
      {
        icon: '🌳',
        time: 'Lunch',
        title: 'Bois de Boulogne',
        location: 'Forest Park',
        address: 'Adjacent to Marmottan Museum',
        description:
          'One of Paris\'s most beautiful parks. Find a small restaurant or café for a leisurely lunch.',
        tips: 'Perfect for a peaceful afternoon after the museum.',
      },
      {
        icon: '💕',
        time: 'Afternoon',
        title: 'Musée de la Vie Romantique',
        location: 'Montmartre Foothills',
        address: '16 Rue Chaptal, 75009 Paris',
        description:
          'Former home of painter Ary Scheffer where Chopin, George Sand, and Delacroix gathered. Intimate rooms filled with letters and memorabilia. Garden café is one of Paris\'s most beautiful hidden spots.',
        tips: 'FREE admission. A sanctuary of romantic-era elegance.',
      },
      {
        icon: '🍷',
        time: 'Dinner',
        title: 'Au Bourguignon du Marais',
        location: 'Marais District',
        address: '52 Rue François Miron, 75004 Paris',
        description:
          'Modern, clean atmosphere serving Burgundy classics. The beef stew with Burgundy wine is legendary.',
        tips: 'Don\'t miss the San Marcellin cheese for dessert!',
      },
    ],
  },
  {
    id: 'day4',
    title: 'Day 4 · Slow Morning & Departure',
    date: 'May 3 (Sunday)',
    activities: [
      {
        icon: '🥐',
        time: 'Morning',
        title: 'Marais Brunch & Shopping',
        location: 'Rue de Bretagne Area',
        address: 'Marais District, 75003 Paris',
        description:
          'Leisurely brunch and explore independent boutiques. Or rent a Vélib bike and ride along the canal.',
        tips: 'Marais has wonderful design shops and galleries worth exploring.',
      },
      {
        icon: '✈️',
        time: 'Afternoon/Evening',
        title: 'Transfer to Airport Hotel',
        location: 'Charles de Gaulle Airport',
        address: 'Paris CDG',
        description:
          'Two excellent options: Sheraton (direct connection to Terminal 2) or Pullman (with spa and dining).',
        tips: 'Relax before your evening flight. Both hotels have excellent amenities.',
      },
    ],
  },
];

const mykonosItinerary = [
  {
    id: 'day5',
    title: 'Day 5 · Arrival at Bill & Coo',
    date: 'May 4 (Monday)',
    activities: [
      {
        icon: '🏨',
        time: 'Afternoon',
        title: 'Check-in & Settle In',
        location: 'Bill & Coo Mykonos',
        address: 'Megali Ammos Beach, 10 min walk to Old Town',
        description:
          'Boutique hotel with exceptional infinity pool and spa. The island\'s most mature luxury resort. Relax and acclimate.',
        tips: 'Don\'t schedule activities on arrival day. Enjoy the hotel amenities.',
      },
      {
        icon: '🍽️',
        time: 'Dinner',
        title: 'Kastro\'s (Little Venice)',
        location: 'Mykonos Old Town',
        address: 'Secret alley with best sea views',
        description:
          'Hidden gem with panoramic Aegean views and sunset vistas. Perfect for romantic dinner.',
        tips: 'Arrive 1 hour before sunset. Request a table with windmill views.',
      },
    ],
  },
  {
    id: 'day6',
    title: 'Day 6 · Delos & Art Walk',
    date: 'May 5 (Tuesday)',
    activities: [
      {
        icon: '⛴️',
        time: 'Morning',
        title: 'Ferry to Delos Island',
        location: 'Old Port, Mykonos',
        address: 'Depart 9:00 or 10:00 AM',
        description:
          'UNESCO World Heritage site. Birthplace of Apollo in mythology. Most important Aegean archaeological site. 30-min ferry ride.',
        tips: '🌟 HIGHLY RECOMMENDED: Book a guided tour (€79 includes ferry + guide). Without a guide, you\'ll see stones; with one, you\'ll see 2000-year-old civilization.',
      },
      {
        icon: '🐟',
        time: 'Lunch',
        title: 'Kounelas',
        location: 'Old Port',
        address: 'Near Mykonos Harbor',
        description:
          'Family-run fish taverna since 1960s. Fresh grilled fish, fried squid, octopus, Greek salad. Simple tables with harbor views.',
        tips: '€25-40 per person. Authentic local experience. Let the ingredients speak for themselves.',
      },
      {
        icon: '🎨',
        time: 'Afternoon',
        title: 'Old Town Art Walk',
        location: 'Mykonos Old Town',
        address: 'Matogianni Street & surrounding alleys',
        description:
          'Winding streets with art galleries, linen boutiques, handmade jewelry shops. Visit Minima Gallery and Rarity Gallery for serious contemporary art.',
        tips: 'Get lost in the narrow streets. Best discoveries happen by wandering.',
      },
      {
        icon: '🌅',
        time: 'Sunset',
        title: '180° Sunset Bar',
        location: 'Hillside Overlooking Town',
        address: 'Mountain viewpoint',
        description:
          'Panoramic views of Old Town, windmills, and harbor. Fewer tourists than Little Venice.',
        tips: 'Relaxed atmosphere. Perfect for watching the sun dip into the Aegean.',
      },
    ],
  },
  {
    id: 'day7',
    title: 'Day 7 · Hotel Switch & Ano Mera',
    date: 'May 6 (Wednesday)',
    activities: [
      {
        icon: '☀️',
        time: 'Morning',
        title: 'Leisurely Breakfast at Bill & Coo',
        location: 'Bill & Coo Mykonos',
        address: 'Poolside',
        description: 'Enjoy the last morning at your first hotel.',
        tips: 'Savor the infinity pool views.',
      },
      {
        icon: '🏨',
        time: 'Midday',
        title: 'Transfer to Kalesma Mykonos',
        location: 'Ornos Area',
        address: 'Contemporary Cycladic design by Vangelis Bonios',
        description:
          'Design-forward luxury. Each villa has its own pool. The architecture is contemporary art.',
        tips: 'Spend afternoon exploring your new villa and the main pool.',
      },
      {
        icon: '🍽️',
        time: 'Dinner',
        title: 'Bistrot de Nicolas',
        location: 'Ano Mera Village',
        address: '15 min drive from Kalesma',
        description:
          'Charming French-Mediterranean bistro. Creative, refined cuisine using fresh ingredients. Excellent wine list. Serves mainly locals.',
        tips: '⭐ One of the island\'s most underrated restaurants. Highly recommended.',
      },
    ],
  },
  {
    id: 'day8',
    title: 'Day 8 · Wild Landscapes & Hidden Beaches',
    date: 'May 7 (Thursday)',
    activities: [
      {
        icon: '☕',
        time: 'Morning',
        title: 'Breakfast & Spa at Kalesma',
        location: 'Kalesma Mykonos',
        address: 'Ornos',
        description: 'Enjoy spa or yoga session.',
        tips: 'Most relaxing day of the trip.',
      },
      {
        icon: '🍽️',
        time: 'Lunch',
        title: 'Fokos Taverna',
        location: 'Northern Mykonos',
        address: 'Remote beach, end of dirt road',
        description:
          'Feels like 1970s Mykonos. Stone buildings shaded by tamarisk trees. Simple menu changes with daily catch. Saganaki cheese with honey is a must. Atmosphere: zero rush, sea sounds instead of speakers.',
        tips: '€30-50 for two. Most authentic, most local experience. Beach remains undeveloped.',
      },
      {
        icon: '🌊',
        time: 'Afternoon',
        title: 'Beach Walk at Fokos',
        location: 'Fokos Beach',
        address: 'Northern Mykonos',
        description: 'Collect shells, watch the sea, meditate.',
        tips: 'Pure relaxation.',
      },
      {
        icon: '🍷',
        time: 'Dinner',
        title: 'Pere Pere or Kalesma\'s Pere',
        location: 'Mykonos Town or Kalesma',
        address: 'Natural wine bistro or hotel restaurant',
        description:
          'Cycladic ingredients, creative but not pretentious. Chef Nikos Roussos\'s cuisine is island-authentic.',
        tips: 'Exceptional reputation for quality.',
      },
    ],
  },
  {
    id: 'day9',
    title: 'Day 9 · Graceful Departure',
    date: 'May 8 (Friday)',
    activities: [
      {
        icon: '🥐',
        time: 'Morning',
        title: 'Final Breakfast & Pool Time',
        location: 'Kalesma Mykonos',
        address: 'Ornos',
        description: 'Savor the last moments.',
        tips: 'Take time to absorb the beauty.',
      },
      {
        icon: '⛪',
        time: 'Optional',
        title: 'Panagia Tourliani Monastery',
        location: 'Ano Mera',
        address: 'Village of Ano Mera',
        description:
          '18th-century monastery with exquisite Byzantine wooden iconostasis. Island\'s most important religious artwork.',
        tips: 'If time permits before lunch.',
      },
      {
        icon: '🐟',
        time: 'Lunch',
        title: 'Kiki\'s Tavern (Optional)',
        location: 'Agios Sostis Beach',
        address: 'Legendary local spot',
        description:
          'No electricity, no reservations, charcoal grill only. Expect to wait. Lunch only. Extremely local.',
        tips: '🌟 Island legend. Most authentic experience.',
      },
      {
        icon: '✈️',
        time: 'Afternoon',
        title: 'Depart for Airport',
        location: 'Mykonos Airport',
        address: 'JMY',
        description: 'Fly home with unforgettable memories.',
        tips: 'Safe travels!',
      },
    ],
  },
];

const tips = [
  {
    icon: '📅',
    title: 'Booking Strategy',
    content:
      'Reserve popular restaurants several days in advance, especially for weekends and holidays. Museums often have online booking to skip queues.',
  },
  {
    icon: '🚶',
    title: 'Explore on Foot',
    content:
      'The best discoveries happen while walking. Get lost in narrow streets, stumble upon hidden galleries, and connect with locals.',
  },
  {
    icon: '🍽️',
    title: 'Eat Where Locals Eat',
    content:
      'Avoid tourist-heavy areas. Seek out family-run tavernas and neighborhood bistros where locals gather for authentic flavors.',
  },
  {
    icon: '⏰',
    title: 'Pace Yourself',
    content:
      'Don\'t rush from sight to sight. Allow time to sit in cafés, watch people, and absorb the atmosphere. Quality over quality.',
  },
  {
    icon: '🗺️',
    title: 'Local Transportation',
    content:
      'Use metro in Paris and taxis/hotel transfers in Mykonos. Vélib bikes in Paris are fun for leisurely rides along canals.',
  },
  {
    icon: '📸',
    title: 'Capture & Experience',
    content:
      'Take photos, but also put down your phone. The best memories come from being fully present in the moment.',
  },
];
