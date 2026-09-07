// Central icon map so data files can reference icons by string name.
// Keeps lucide tree-shakeable and avoids dynamic-import overhead.
import {
  Megaphone,
  MonitorSmartphone,
  TrendingUp,
  MapPin,
  Store,
  Map,
  Bot,
  Workflow,
  Target,
  Globe,
  Server,
  Share2,
  ShieldCheck,
  MousePointerClick,
  Sparkles,
  Search,
  Rocket,
  Zap,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  Cloud,
  Calendar,
  Users,
  BarChart3,
  Layers,
  Lock,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

export const ICONS: Record<string, LucideIcon> = {
  Megaphone,
  MonitorSmartphone,
  TrendingUp,
  MapPin,
  Store,
  Map,
  Bot,
  Workflow,
  Target,
  Globe,
  Server,
  Share2,
  ShieldCheck,
  MousePointerClick,
  Sparkles,
  Search,
  Rocket,
  Zap,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  Cloud,
  Calendar,
  Users,
  BarChart3,
  Layers,
  Lock,
  RefreshCw,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = ICONS[name] ?? Sparkles;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
