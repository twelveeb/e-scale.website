import type { Lang, Dictionary } from "../types";
import { pt } from "./pt";
import { en } from "./en";
import { fr } from "./fr";
import { nl } from "./nl";
import { es } from "./es";
import { pl } from "./pl";

export const dictionaries: Record<Lang, Dictionary> = { pt, en, fr, nl, es, pl };

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
];
