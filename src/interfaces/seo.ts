export default interface Seo {
    metaTitle: string,
    metaRobots: string,
    canonicalURL: string,
    metaDescription: string;
    metaImage: {
      url: string,
    }
    metaSocial: {
      ogTitle: string,
      ogDescription: string,
      ogImage: {
        url: string,
      },
      twitterTitle: string,
      twitterDescription: string,
      twitterImage: {
        url: string,
      },
    },
    keywords: string,
    structuredData: JSON,
}

