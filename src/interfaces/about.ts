import type Seo from "./seo";

export default interface About {
  title: string,
  about: string,
  vision: string,
  mission: string,
  whoWeServe: string,
  whyUs: Point[],
  services: {
    Research: string,
    Development: string,
    Operation: string,
  },
  image: {
    alternativeText: string,
    width: number,
    height: number,
    ext: string,
    url: string,
  },
  seo: Seo,
}

interface Point {
  id: string,
  point: string,
}

//    partners: {name, logo}[]