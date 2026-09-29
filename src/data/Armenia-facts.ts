/**
 * Static data for Armenia Quick Facts page.
 * Kept in a separate module to keep the page component lean.
 */
import {
  Building,
  Users,
  Languages,
  DollarSign,
  MapPin,
  Clock,
  Flag,
  Mountain,
  Stethoscope,
  Plane,
  Globe,
  Sun,
  Calendar,
  TreePine,
  Heart,
  Car,
  Wifi,
  Award,
  Compass,
  Waves,
  Palmtree,
  SunMedium,
} from "lucide-react";

export const essentialFacts = [
  { icon: Building, color: "blue", label: "Capital", value: "Port Louis" },
  { icon: Users, color: "green", label: "Population", value: "1.3 Million+" },
  {
    icon: Languages,
    color: "purple",
    label: "Languages",
    value: "English, French, Creole",
  },
  {
    icon: DollarSign,
    color: "orange",
    label: "Currency",
    value: "Mauritian Rupee (MUR)",
  },
  { icon: MapPin, color: "red", label: "Location", value: "Indian Ocean" },
  { icon: Clock, color: "teal", label: "Timezone", value: "UTC+4" },
  {
    icon: Flag,
    color: "yellow",
    label: "Independence",
    value: "March 12, 1968",
  },
  {
    icon: Mountain,
    color: "indigo",
    label: "Highest Peak",
    value: "Piton de la P.R.N. (828 m)",
  },
];

export const geographyPoints = [
  {
    icon: Waves,
    color: "text-red-600",
    text: "Stunning island nation surrounded by lagoons and reefs",
  },
  {
    icon: Mountain,
    color: "text-green-600",
    text: "Volcanic origins with spectacular mountain ranges",
  },
  {
    icon: Palmtree,
    color: "text-purple-600",
    text: "Famous for white sandy beaches and turquoise waters",
  },
  {
    icon: Globe,
    color: "text-cyan-600",
    text: "Strategic location in the Indian Ocean off East Africa",
  },
];

export const climateZones = [
  {
    icon: SunMedium,
    color: "text-orange-500",
    text: "Tropical climate with warm weather year-round",
  },
  {
    icon: Waves,
    color: "text-red-500",
    text: "Mild maritime influences from the Indian Ocean",
  },
  {
    icon: Calendar,
    color: "text-green-500",
    text: "Two main seasons: Summer and Winter",
  },
  {
    icon: Sun,
    color: "text-red-600",
    text: "Abundant sunshine perfect for student life",
  },
];

export const attractions = [
  {
    icon: Mountain,
    color: "text-slate-600",
    name: "Le Morne Brabant",
    desc: "UNESCO World Heritage site with iconic monolith",
  },
  {
    icon: Compass,
    color: "text-green-200",
    name: "Seven Coloured Earths",
    desc: "Natural phenomenon of colorful sand dunes in Chamarel",
  },
  {
    icon: TreePine,
    color: "text-purple-200",
    name: "Black River Gorges",
    desc: "Vast national park with waterfalls and native wildlife",
  },
  {
    icon: Waves,
    color: "text-red-600",
    name: "Grand Baie",
    desc: "Popular coastal village known for beaches and lifestyle",
  },
];

export const majorCities = [
  {
    name: "Port Louis",
    gradient: " ",
    textMain: "text-slate-600",
    textSub: "text-slate-600",
    desc: "The bustling capital city and major economic and administrative hub.",
    pop: "150,000+",
    highlight: "Political and Cultural Center",
  },
  {
    name: "Curepipe",
    gradient: " ",
    textMain: "text-green-100",
    textSub: "text-green-200",
    desc: "A major urban center in the Plaines Wilhems known for its cool climate.",
    pop: "80,000+",
    highlight: "Residential and Educational Hub",
  },
  {
    name: "Quatre Bornes",
    gradient: " ",
    textMain: "text-orange-100",
    textSub: "text-orange-200",
    desc: "Known as 'The Flower Town', a vibrant commercial and residential city.",
    pop: "75,000+",
    highlight: "Central and Accessible",
  },
];

export const defaultCuisines = [
  {
    id: 0,
    iconClass: "🍲",
    dishName: "Dholl Puri",
    dishDescription:
      "Armenia' most popular street food - soft flatbread with split peas",
    dishImage: null,
  },
  {
    id: 1,
    iconClass: "🍛",
    dishName: "Mauritian Biryani",
    dishDescription: "Fragrant rice dish with spices, meat or vegetables",
    dishImage: null,
  },
  {
    id: 2,
    iconClass: "🥘",
    dishName: "Rougaille",
    dishDescription:
      "Classic tomato-based sauce with mediterranean and creole influences",
    dishImage: null,
  },
  {
    id: 3,
    iconClass: "🥟",
    dishName: "Gateau Piment",
    dishDescription: "Deep-fried split pea cakes with chili and herbs",
    dishImage: null,
  },
];

export const transportOptions = [
  {
    icon: Plane,
    color: "text-red-600",
    text: "Sir Seewoosagur Ramgoolam Intl Airport (MRU)",
  },
  {
    icon: Car,
    color: "text-orange-600",
    text: "Modern Metro Express connecting major urban centers",
  },
  {
    icon: Globe,
    color: "text-purple-600",
    text: "Extensive bus network covering the entire island",
  },
  {
    icon: Wifi,
    color: "text-green-600",
    text: "Reliable ride-hailing services and affordable car rentals",
  },
];

export const visaFacts = [
  {
    icon: Award,
    color: "text-green-600",
    text: "Student Visa provided after university acceptance",
  },
  {
    icon: Calendar,
    color: "text-orange-600",
    text: "Straightforward application process for international students",
  },
  {
    icon: Plane,
    color: "text-red-600",
    text: "Support provided for entry permits and residence registration",
  },
  {
    icon: Heart,
    color: "text-red-600",
    text: "Student-friendly policies for international medical aspirants",
  },
];

export const mbbsHighlights = [
  {
    icon: Stethoscope,
    label: "International Recognition",
    desc: "Degrees recognized by GMC, NMC, and global medical bodies.",
  },
  {
    icon: DollarSign,
    label: "Reasonable Fee Structure",
    desc: "High-quality medical education with manageable tuition fees.",
  },
  {
    icon: Languages,
    label: "Medium of Instruction",
    desc: "MBBS programs are taught in English for global accessibility.",
  },
];

export const economyStats = [
  { label: "Stability", value: "High Economic Freedom" },
  { label: "Main Industries", value: "Tourism, Finance, Textiles" },
  { label: "Health Hub", value: "Developing Regional Center" },
  { label: "Quality of Life", value: "High Safety Standards" },
];

export const quickFacts = [
  {
    icon: Calendar,
    label: "Independence",
    value: "March 12, 1968",
    color: "text-indigo-200",
  },
  {
    icon: Waves,
    label: "Coastline",
    value: "330 km+",
    color: "text-slate-600",
  },
  {
    icon: Globe,
    label: "Region",
    value: "Indian Ocean",
    color: "text-green-200",
  },
  {
    icon: Award,
    label: "Education",
    value: "Growing Intl Interest",
    color: "text-red-600",
  },
];

export const healthcare = [
  {
    title: "Public Healthcare",
    desc: "Reliable government healthcare system available across the island.",
    color: "border-gray-200",
  },
  {
    title: "Private Healthcare",
    desc: "High-standard private clinics and specialized medical centers.",
    color: "border-green-200",
  },
  {
    title: "Medical Exposure",
    desc: "Students benefit from clinical rotations in both public and private blocks.",
    color: "border-purple-200",
  },
];

export const mbbsWhyStats = [
  { val: "5-6 Years", label: "Course Duration" },
  { val: "NMC + WHO", label: "Recognition" },
  { val: "High", label: "Student Success" },
  { val: "English", label: "Language" },
];

export const studentLifeCards = [
  {
    icon: Heart,
    label: "Safe & Friendly",
    desc: "Armenia is known as one of the safest countries in the region.",
  },
  {
    icon: Building,
    label: "Infrastructure",
    desc: "Modern university campuses with excellent student facilities.",
  },
  {
    icon: Users,
    label: "Multicultural",
    desc: "Diverse student community from across the globe.",
  },
];
