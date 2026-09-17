import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  MountainSnow,
  MapPin,
  Menu,
  X,
  PenTool,
  CodeXml,
  Layers,
  Megaphone,
  UsersRound,
  CalendarCheck,
  Gem,
  Lightbulb,
  ChartNoAxesCombined,
  Sparkles,
  Heart,
  Check,
  ChevronDown,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  MessageCircle,
  Download,
  Copy,
  Send,
  Mail,
  Quote,
  Star,
  LoaderCircle,
  Leaf,
  Globe,
  Compass,
} from "lucide-react";
const icons = {
  arrow: ArrowUpRight,
  right: ArrowRight,
  up: ArrowUp,
  mountain: MountainSnow,
  pin: MapPin,
  menu: Menu,
  close: X,
  pen: PenTool,
  code: CodeXml,
  layers: Layers,
  megaphone: Megaphone,
  users: UsersRound,
  calendar: CalendarCheck,
  gem: Gem,
  bulb: Lightbulb,
  chart: ChartNoAxesCombined,
  sparkles: Sparkles,
  heart: Heart,
  check: Check,
  down: ChevronDown,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
  download: Download,
  copy: Copy,
  send: Send,
  mail: Mail,
  quote: Quote,
  star: Star,
  loader: LoaderCircle,
  leaf: Leaf,
  globe: Globe,
  compass: Compass,
};
export default function Icon({ name, size = 22, ...props }) {
  if (name === "tiktok")
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        <path d="M14 3v12.5a4.5 4.5 0 1 1-4.5-4.5M14 3c0 4 3 5 6 5v3c-2 0-4-1-6-2" />
      </svg>
    );
  const Component = icons[name] || Sparkles;
  return (
    <Component size={size} strokeWidth={1.65} aria-hidden="true" {...props} />
  );
}
