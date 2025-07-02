export default interface Seo {
    metaTitle: string,
    metaRobots: string,
    canonicalURL: string,
    metaDescription: string;
  
    metaImage: {
      url: string,
    }
    metaSocial: MetaSocial[],
    keywords: string,
    structuredData: JSON,
}

interface MetaSocial {
  title: string,
  description: string,
}