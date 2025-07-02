import type Seo from "./seo";

export default interface Service {
  id: string,
  title: string,
  description: string,
  point: Point[],
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