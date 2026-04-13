import heroImage from '../assets/hero.png';

type SectionLink = {
  name: string;
  href: `#${string}`;
};

type ActionLink = {
  label: string;
  href: `#${string}` | `mailto:${string}`;
};

type EnsembleMember = {
  name: string;
  role: string;
  image: string;
  fallbackLabel: string;
};

type SiteData = {
  navigation: {
    brand: string;
    links: SectionLink[];
    cta: ActionLink;
  };
  hero: {
    subtitle: string;
    titlePrimary: string;
    titleSecondary: string;
    description: string;
    ctaPrimary: ActionLink;
    ctaSecondary: ActionLink;
    bgImage: string;
  };
  ancestry: {
    subtitle: string;
    title: string;
    paragraphs: string[];
    quote: string;
    image1: string;
    image2: string;
  };
  ensemble: {
    subtitle: string;
    title: string;
    description: string;
    members: EnsembleMember[];
  };
  quote: {
    text: string;
    subtitle: string;
  };
  globalRepresentation: {
    bgImage: string;
    subtitle: string;
    title: string;
    description: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  };
  inquiries: {
    subtitle: string;
    title: string;
    description: string;
    email: string;
    emailDisplay: string;
    locations: string;
    submitLabel: string;
    successMessage: string;
  };
  footer: {
    brand: string;
    links: SectionLink[];
    copyright: string;
  };
};

export const siteData = {
  navigation: {
    brand: 'Oulad Chatta',
    links: [
      { name: 'Heritage', href: '#heritage' },
      { name: 'Ensemble', href: '#ensemble' },
      { name: 'Representation', href: '#representation' },
      { name: 'Contact', href: '#contact' },
    ],
    cta: {
      label: 'Book a Performance',
      href: '#contact',
    },
  },
  hero: {
    subtitle: 'Hassani Heritage',
    titlePrimary: 'Oulad Chatta',
    titleSecondary: 'A Living Voice of the Desert',
    description:
      'Preserving Sahrawi Hassani poetry, music, and oral memory for new generations and international audiences.',
    ctaPrimary: {
      label: 'Book a Performance',
      href: '#contact',
    },
    ctaSecondary: {
      label: 'Meet the Ensemble',
      href: '#ensemble',
    },
    bgImage: heroImage,
  },
  ancestry: {
    subtitle: 'The Ancestry',
    title: 'Born of the Desert,\nCarried by Love',
    paragraphs: [
      'In 1895, a journey began across the shifting sands of the Tata region. It was here that Chatta, a master of desert poetry and resonance, laid the foundations of what would become a generational legacy.',
      'Today, Oulad Chatta stands as a living vessel for the Sahrawi spirit. Their music is not merely performance; it is a ritual of memory, an echo of the wind through the acacia trees, and the pulse of the Saharan night.',
    ],
    quote: '"The sand remembers every song we never finished."',
    image1:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAv__7cwNmVSMqr1wIqQiRFor8GybTJDufKNYuyjMHBh0a5F-QKT99tnz2qDqQ_XzLCWFMZ2gl1L2PwO09fUYBtLGTfS12usDdB3j9Nrf7mTJLWi4wcIsfdXzKDSM8EDj3pUXDcjuGzRpOO8-_YgjvW70Eqr3pZQmzIKv5CKMtpBu2B2cUgDvM5kpUahowSDlpTq4lVnuX5PKlhZ2FEBhUaavx06Bux-eBGMuHRmrYcW3M38-mEijElfD7MfHMcP1QlGv9TShkQjJKU',
    image2:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsE8JPPNX5oeew6YcoWQAnZtyUq3OHma0x3rgzQLAAGGOnw7FMhyoYrF_1hhWla1ufow19BVUMglfa3mJch3QIteQsHvdHRxSgnR5SRpPKUkg-dfKY71mvLhviAncVmztYS_Vo_h6A0agW0Hr-_MdieVsFO47HvNeO4vMOhLcsOspFzv6rAaj-T9zyYgKRfkDSCVMLyewKr3_zozxH3_8GqzjKF6tEQuxZFuGRDdaB_8O5BQozXFJ9RELVMd82-sRJj5XQVDv_YC_k',
  },
  ensemble: {
    subtitle: 'The Ensemble',
    title: 'The Keepers of the Song',
    description:
      'Six masters of resonance, each a guardian of a specific thread in the tapestry of Hassani culture.',
    members: [
      {
        name: 'Omar',
        role: 'Master of the Guembri',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB_NGSTlaiaxTMnJmvOpkJxqUJb0pP1-EiAg8Vi4AlMlvGt4W2I3v4eAsCxX2GY-x_IYY7-IUeS5FEJykRhNekxB5aXICK7i4fIdy8g-yBMrzZsZSGicBUVFGaoJvfeCJ0mQDejJwhbbr8_W2QS1x-6c9R_8WOyNmSPKzD2T-k-0x4MvGCemrsMYQCPZKW0jnJdrjo-QFVqypEoxja9p-CMpDI4AN8DlX02NxPB3cIcne1AtvkKbrD1yK8K1RBrSGRbohwqLHBacrza',
        fallbackLabel: 'Omar',
      },
      {
        name: 'Mustapha',
        role: 'Guardian of the Guedra',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuChxUUr1bCzcLH-wqibyQtBTf-KoiFSahhmk3HUx3Lec5HG8CXaoG575-BRgOEB8SRHw-i6rTYEJGas5KI96RP3X6elCHiFJxYKkvpM_ZLLUq4XY3aR4RXSVcUGy9lbT9sLmTZNd9_COqbJV2hjZt7Ienqgn-jfdQvRintFH7zZVpSGFR7fxApuc08ldjNWKOQsuAPexlHUFkJZT0ShGHWAi6y4YCQxGu3pr5hdBgePXMZ-NY5g16-Wn4N5MvQpBbz5P8-A9hlAeWgP',
        fallbackLabel: 'Mustapha',
      },
      {
        name: 'Abdul Majid',
        role: "The Poet's Voice",
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB-dVXuZ35SwV6MbdPYCnKBbMQ3kY3IZ8eKiZx-u-KAYf2FVQTg4J-17EyNkFiaObjAJWLaPZQRRCoteytBt_ckwmKIgcS7MxJtpOEOFCYAgqnQS9GEfUFwDuN5rvlIy3wCY9GNDkFYTbaQovwwVOV8UTKHvxDokp3VLZTsUb0GmFmDunrcuaVPbDZgParYwPPz-IlkjxeEmimGuBauq3QxHPcPm7E7-4hEaYflvd-tQj3qKg9DRAErQD2Wj5vYYQ41rKyAnXEWQDQh',
        fallbackLabel: 'Abdul Majid',
      },
      {
        name: 'Al-Habib',
        role: 'Master of Rhythm',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAYe_0kalDjOnlt-OcVDVFGCQI2_zB8joNoUFIKoMPYvQBhYKeg75IPY2BN_ZmYgt1Wzez2rxob4nvptLx-5jKMUNoPsAqmRUCwAKfw2my4LAZqe2zDsFQ_QVQLqfbcb5sJ_CDj6Z8gwqMJ_ZL1TCAH6yXG4q1jfQLRXKcUT3kverFjMNCGQQXr5vR25RPxhV24VmwzZtSH17OGygqmKEZQIawtBOYZ0RyU94gTMeturSf9px4ibRltnEb1yHghzBZBbjnbe-ZG4m7a',
        fallbackLabel: 'Al-Habib',
      },
      {
        name: 'Mohamed Qadir',
        role: 'Strings of the Soul',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCnbTJMlqFWnrO4qlyS3-isL5PzOFwIn5QKq10hBd3wat992Bfh4tqqMeohZl2p-z7Yf8nl2Ezg1YGG94OTal5C90loDzKBHOuNncrduycrrP9c7DWtdERHORQWlWdpYFNmTAQRxb3avDIFhPaiRrYJNmjD5DYdtIwB8bNAIKuheF8UGyiYuBbE3vqzPk0gHFUFZO49T2jp9MZbYMr6Il67n3sAwtQ5p-9yXQtNNN18fSCWh4Jn9KtGYw1Fk5-75EGxTNgVggyS26Hs',
        fallbackLabel: 'Mohamed Qadir',
      },
      {
        name: 'Hajj Muhammad',
        role: 'The Oral Historian',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD0aDLNWuKm4h3rsz30AfdY1Oi8-ynnae4m8X3QQvP5_6EaTgC_vYgN7FnBoOOu71tgb-oUw202GgS08CleHKVLv4x44aFadj3SnGaPwWE3oTVJnBkj59B6brrKTROpS98-PnyQ-7kzky2PGpYUzBSS351JNrRyXOG959QETF2lFCcbzi5xmgo7c6cD_l-RuQMD-FeklHDhvVCFhPKe1Udmv-XYxF3F_jQ2FVirpZ1RFuNDCY-Z70RZDJv1jxk4xpBSme27DL29BNLC',
        fallbackLabel: 'Hajj Muhammad',
      },
    ],
  },
  quote: {
    text: '"We sing because we love. We perform because we remember."',
    subtitle: 'The Eternal Vow',
  },
  globalRepresentation: {
    bgImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSx-PnOWnzsnYct91E4e1E0mYyFUpt4toQAXasoQhoVUK8-3F7FTFyLbcZuvvMtrraq0GoutLrHrKMl2DTT8wwU5OE4MFWMl-slR1ozbYzXvr8TtPZAtYx-4w7t9x_h8beLkHGMpyt4hwpUJw73_auprI1gXOy2EWlOmY3WfCK4SWxv-2-kqqHXUXcJtFmgTmAAa7jSzZLyeiVe8-3zoK32qlCs5w854oRZJchktI3aYxRgHreRmYODCxYHIFbhQSwkAfXWZ-FHdCD',
    subtitle: 'Special Star SARL',
    title: 'Global Representation',
    description:
      'Oulad Chatta is exclusively managed and represented globally by Special Star SARL. We facilitate seamless collaborations between these desert masters and international festival promoters, ensuring a high standard of cultural production.',
    features: [
      {
        title: 'International Touring',
        description:
          'Full logistical support for European, Asian, and American festival circuits.',
      },
      {
        title: 'Cultural Education',
        description:
          'Curated masterclasses and academic residencies for festivals, universities, and cultural institutions.',
      },
    ],
  },
  inquiries: {
    subtitle: 'Inquiries',
    title: 'Secure the Legacy',
    description:
      'For booking inquiries, press kits, residency invitations, and archival research requests, send us a message below. Our management team responds within 48 hours.',
    email: 'management@eternalecho.com',
    emailDisplay: 'MANAGEMENT@ETERNALECHO.COM',
    locations: 'Casablanca | Tata | Paris',
    submitLabel: 'Send Inquiry',
    successMessage:
      'Your email app should open with a pre-filled inquiry. If it does not, send your request directly to MANAGEMENT@ETERNALECHO.COM.',
  },
  footer: {
    brand: 'Oulad Chatta',
    links: [
      { name: 'Top', href: '#top' },
      { name: 'Representation', href: '#representation' },
      { name: 'Contact', href: '#contact' },
    ],
    copyright: `© ${new Date().getFullYear()} Oulad Chatta. Global representation by Special Star SARL.`,
  },
} satisfies SiteData;
