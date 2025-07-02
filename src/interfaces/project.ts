import type { UUID } from "crypto";
import type Seo from "./seo";

export default interface Project {
  id: string,
  slug: UUID,
  title: string,
  description: string,
  date: Date,
  content: string,
  projectCategory: {
    categoryName: string,
  },
  image: {
    alternativeText: string,
    width: number,
    height: number,
    ext: string,
    url: string,
  },
  seo: Seo,
  localizations: Localization[],
}

interface Localization {
  slug: UUID,
  title: string,
}