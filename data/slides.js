// slides.js
const slides = [
  {
    image: '/images/slide-01.webp',
    btitle: 'MotoGP',
    btext: 'Transforming the world’s greatest motorcycle event into a digital-first global entertainment brand.',
    keywords: {
      first: {
        label: 'Brand Identity',
        // images: ['/images/img-24.avif', '/images/img-25.avif', '/images/img-26.avif']
      },
      second: {
        label: 'Entertainment',
        // images: ['/images/img-21.avif', '/images/img-22.avif', '/images/img-23.avif']
      }
    }
  },
  {
    image: '/images/slide-02.webp',
    btitle: 'London Design Biennale 2025',
    btext: 'Visual identity for the fifth edition of the Capital’s global design event.',
    keywords: {
      first: {
        label: 'Brand Identity',
        // images: ['/images/img-06.avif', '/images/img-07.avif', '/images/img-08.avif']
      },
      second: {
        label: 'Art & Culture',
        // images: ['/images/img-16.avif', '/images/img-17.avif', '/images/img-18.avif']
      }
    }
  },
  {
    image: '/images/slide-03.webp',
    btitle: 'Guggenheim',
    btext: 'Visual identity for the constellation of global art museums.',
    keywords: {
      first: {
        label: 'Brand Identity',
        // images: ['/images/img-04.avif', '/images/img-05.avif', '/images/img-08.avif']
      },
      second: {
        label: 'Art & Culture',
        // images: ['/images/img-16.avif', '/images/img-14.avif', '/images/img-15.avif']
      }
    }
  },
  {
    image: '/images/slide-04.webp',
    btitle: 'Netflix Queue',
    btext: 'A dynamic editorial ecosystem shines a spotlight on the streaming giant’s award-worthy talent and storytelling.',
    keywords: {
      first: {
        label: 'Publication',
        // images: ['/images/img-04.avif', '/images/img-05.avif', '/images/img-08.avif']
      },
      second: {
        label: 'Entertainment',
        // images: ['/images/img-16.avif', '/images/img-14.avif', '/images/img-15.avif']
      }
    }
  },
  {
    image: '/images/slide-05.webp',
    btitle: 'PayPal',
    btext: "PayPal's new refreshed brand identity marks the next chapter for PayPal in the lives of its customers and signals a new direction for the business and the brand: one that is simpler, cleaner, more modern and more optimistic.",
    keywords: {
      first: {
        label: 'Brand Identity',
        // images: ['/images/img-04.avif', '/images/img-05.avif', '/images/img-08.avif']
      },
      second: {
        label: 'Finance',
        // images: ['/images/img-16.avif', '/images/img-14.avif', '/images/img-15.avif']
      }
    }
  },
  {
    image: '/images/slide-06.webp',
    btitle: 'Channel 4',
    btext: "A new masterbrand for the UK’s most disruptive public service broadcaster.",
    keywords: {
      first: {
        label: 'Brand Identity',
        // images: ['/images/img-04.avif', '/images/img-05.avif', '/images/img-08.avif']
      },
      second: {
        label: 'Art & Culture',
        // images: ['/images/img-16.avif', '/images/img-14.avif', '/images/img-15.avif']
      }
    }
  },
  {
    image: '/images/slide-07.webp',
    btitle: 'Natural History Museum',
    btext: "Moving the Museum from catalogue to catalyst.",
    keywords: {
      first: {
        label: 'Industrial/Product Design',
        // images: ['/images/img-04.avif', '/images/img-05.avif', '/images/img-08.avif']
      },
      second: {
        label: 'Custom Brands',
        // images: ['/images/img-16.avif', '/images/img-14.avif', '/images/img-15.avif']
      }
    }
  },
  {
    image: '/images/slide-08.webp',
    btitle: 'ICD Beauty',
    btext: "Brand identity and packaging for the Seoul-based beauty brand merging biotechnology with daily rituals.",
    keywords: {
      first: {
        label: 'Brand Identity',
        // images: ['/images/img-04.avif', '/images/img-05.avif', '/images/img-08.avif']
      },
      second: {
        label: 'Entertainment',
        // images: ['/images/img-16.avif', '/images/img-14.avif', '/images/img-15.avif']
      }
    }
  },
  {
    image: '/images/slide-09.webp',
    btitle: 'Yoto',
    btext: "Industrial design, branding, visual identity, and packaging for an audio player that kids can control.",
    keywords: {
      first: {
        label: 'Packaging',
        // images: ['/images/img-04.avif', '/images/img-05.avif', '/images/img-08.avif']
      },
      second: {
        label: 'Fashion & Beauty',
        // images: ['/images/img-16.avif', '/images/img-14.avif', '/images/img-15.avif']
      }
    }
  },
  {
    image: '/images/slide-10.webp',
    btitle: 'Studio Theatre',
    btext: "Visual identity, environmental graphics and poster campaigns for the influential theater company in Washington, DC.",
    keywords: {
      first: {
        label: 'Signage & Environmental Graphics',
        // images: ['/images/img-04.avif', '/images/img-05.avif', '/images/img-08.avif']
      },
      second: {
        label: 'Art & Culture',
        // images: ['/images/img-16.avif', '/images/img-14.avif', '/images/img-15.avif']
      }
    }
  },
  {
    image: '/images/slide-11.webp',
    btitle: 'MIND',
    btext: "Brand identity framework for the data security platform.",
    keywords: {
      first: {
        label: 'Brand Identity',
        // images: ['/images/img-04.avif', '/images/img-05.avif', '/images/img-08.avif']
      },
      second: {
        label: 'Technology',
        // images: ['/images/img-16.avif', '/images/img-14.avif', '/images/img-15.avif']
      }
    }
  },
  {
    image: '/images/slide-12.webp',
    btitle: 'General Catalyst',
    btext: "Redefining the venture capital brand that is redefining what venture capital can be. Venture beyond.",
    keywords: {
      first: {
        label: 'Brand Identity',
        // images: ['/images/img-04.avif', '/images/img-05.avif', '/images/img-08.avif']
      },
      second: {
        label: 'Finance',
        // images: ['/images/img-16.avif', '/images/img-14.avif', '/images/img-15.avif']
      }
    }
  },
  // ...more slides
];

export default slides;