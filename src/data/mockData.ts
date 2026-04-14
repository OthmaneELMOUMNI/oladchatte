import heroHome from '../assets/hero-home-stage.png';
import heroHomeMobile from '../assets/hero-home-mobile.png';

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
    bgImageMobile: string;
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
    contactMethods: Array<{
      label: string;
      value: string;
      href: string;
      icon: string;
    }>;
    email: string;
    emailDisplay: string;
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
    brand: 'Oulad Chatta Group',
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
    titlePrimary: 'Oulad Chatta Group',
    titleSecondary: 'A Living Voice of the Desert',
    description:
      "Formally founded in 1990 by Omar El Moumni (Chatta), Oulad Chatta was born from love and loyalty - a family's promise to keep their grandmother's desert music and poetry alive, breathing, and heard by the world.",
    ctaPrimary: {
      label: 'Book a Performance',
      href: '#contact',
    },
    ctaSecondary: {
      label: 'Meet the Ensemble',
      href: '#ensemble',
    },
    bgImage: heroHome,
    bgImageMobile: heroHomeMobile,
  },
  ancestry: {
    subtitle: 'The Lineage',
    title: 'Born of the Desert,\nCarried by Love',
    paragraphs: [
      'From the hidden treasures of heritage rises the Oulad Chatta Group - a family bound by blood, memory, and an unbreakable love for Hassani, Jalali, and Sahrawi desert music.',
      'This is not only music. It is a promise.',
      'A promise to protect the songs of the desert, to honour the voices of the ancestors, and to keep a culture alive for generations yet to come.',
      'The roots of Oulad Chatta reach back to the late 19th century, to Chatta, the great-grandmother of the group and one of the most powerful Sahrawi poets of southern Morocco, especially in the Tata region.',
      'In 1895, Chatta travelled from the deep desert to Taroudant, carrying nothing but courage, poetry, and faith. After the loss of her husband, she raised four sons alone, tending camels and sheep under the open sky. At night, she gave her children something greater than survival - words, rhythm, memory, and dignity.',
      'Through her voice, desert poetry lived. Through her love, culture survived.',
      'Her four sons carried her songs in their hearts and passed them to their children. The legacy continued through Hammad, who raised seven sons surrounded by poetry, music, and the wisdom of the desert. Generation after generation, the flame was never allowed to fade.',
      'From this lineage was born the Oulad Chatta Group.',
    ],
    quote: '"Through her voice, desert poetry lived. Through her love, culture survived."',
    image1:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAv__7cwNmVSMqr1wIqQiRFor8GybTJDufKNYuyjMHBh0a5F-QKT99tnz2qDqQ_XzLCWFMZ2gl1L2PwO09fUYBtLGTfS12usDdB3j9Nrf7mTJLWi4wcIsfdXzKDSM8EDj3pUXDcjuGzRpOO8-_YgjvW70Eqr3pZQmzIKv5CKMtpBu2B2cUgDvM5kpUahowSDlpTq4lVnuX5PKlhZ2FEBhUaavx06Bux-eBGMuHRmrYcW3M38-mEijElfD7MfHMcP1QlGv9TShkQjJKU',
    image2:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsE8JPPNX5oeew6YcoWQAnZtyUq3OHma0x3rgzQLAAGGOnw7FMhyoYrF_1hhWla1ufow19BVUMglfa3mJch3QIteQsHvdHRxSgnR5SRpPKUkg-dfKY71mvLhviAncVmztYS_Vo_h6A0agW0Hr-_MdieVsFO47HvNeO4vMOhLcsOspFzv6rAaj-T9zyYgKRfkDSCVMLyewKr3_zozxH3_8GqzjKF6tEQuxZFuGRDdaB_8O5BQozXFJ9RELVMd82-sRJj5XQVDv_YC_k',
  },
  ensemble: {
    subtitle: 'A Family That Sings as One',
    title: 'The Keepers of the Song',
    description:
      'Formally founded in 1990, Oulad Chatta is composed of six family members, united not only by heritage, but by a shared responsibility: to keep the music alive.\n\nTheir songs speak of the desert and the homeland, peace, freedom, human dignity, memory, loss, hope, and belonging.',
    members: [
      {
        name: 'El-Moumni Omar (Chatta)',
        role: 'Founder, desert poet, and voice of memory',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB_NGSTlaiaxTMnJmvOpkJxqUJb0pP1-EiAg8Vi4AlMlvGt4W2I3v4eAsCxX2GY-x_IYY7-IUeS5FEJykRhNekxB5aXICK7i4fIdy8g-yBMrzZsZSGicBUVFGaoJvfeCJ0mQDejJwhbbr8_W2QS1x-6c9R_8WOyNmSPKzD2T-k-0x4MvGCemrsMYQCPZKW0jnJdrjo-QFVqypEoxja9p-CMpDI4AN8DlX02NxPB3cIcne1AtvkKbrD1yK8K1RBrSGRbohwqLHBacrza',
        fallbackLabel: 'Omar',
      },
      {
        name: 'El-Moumni Mustapha (Chatta)',
        role: 'Master of the guembri and heartbeat of rhythm',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuChxUUr1bCzcLH-wqibyQtBTf-KoiFSahhmk3HUx3Lec5HG8CXaoG575-BRgOEB8SRHw-i6rTYEJGas5KI96RP3X6elCHiFJxYKkvpM_ZLLUq4XY3aR4RXSVcUGy9lbT9sLmTZNd9_COqbJV2hjZt7Ienqgn-jfdQvRintFH7zZVpSGFR7fxApuc08ldjNWKOQsuAPexlHUFkJZT0ShGHWAi6y4YCQxGu3pr5hdBgePXMZ-NY5g16-Wn4N5MvQpBbz5P8-A9hlAeWgP',
        fallbackLabel: 'Mustapha',
      },
      {
        name: 'El-Moumni Abdul Majid (Chatta)',
        role: 'A rare desert voice shaped by wind and sand',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB-dVXuZ35SwV6MbdPYCnKBbMQ3kY3IZ8eKiZx-u-KAYf2FVQTg4J-17EyNkFiaObjAJWLaPZQRRCoteytBt_ckwmKIgcS7MxJtpOEOFCYAgqnQS9GEfUFwDuN5rvlIy3wCY9GNDkFYTbaQovwwVOV8UTKHvxDokp3VLZTsUb0GmFmDunrcuaVPbDZgParYwPPz-IlkjxeEmimGuBauq3QxHPcPm7E7-4hEaYflvd-tQj3qKg9DRAErQD2Wj5vYYQ41rKyAnXEWQDQh',
        fallbackLabel: 'Abdul Majid',
      },
      {
        name: 'Al-Makhshuni Al-Habib',
        role: 'Guardian of the guedra, played seated as desert tradition demands',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAYe_0kalDjOnlt-OcVDVFGCQI2_zB8joNoUFIKoMPYvQBhYKeg75IPY2BN_ZmYgt1Wzez2rxob4nvptLx-5jKMUNoPsAqmRUCwAKfw2my4LAZqe2zDsFQ_QVQLqfbcb5sJ_CDj6Z8gwqMJ_ZL1TCAH6yXG4q1jfQLRXKcUT3kverFjMNCGQQXr5vR25RPxhV24VmwzZtSH17OGygqmKEZQIawtBOYZ0RyU94gTMeturSf9px4ibRltnEb1yHghzBZBbjnbe-ZG4m7a',
        fallbackLabel: 'Al-Habib',
      },
      {
        name: 'Mohamed Qadir',
        role: 'Guitarist weaving Hassani and Sahrawi improvisation',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCnbTJMlqFWnrO4qlyS3-isL5PzOFwIn5QKq10hBd3wat992Bfh4tqqMeohZl2p-z7Yf8nl2Ezg1YGG94OTal5C90loDzKBHOuNncrduycrrP9c7DWtdERHORQWlWdpYFNmTAQRxb3avDIFhPaiRrYJNmjD5DYdtIwB8bNAIKuheF8UGyiYuBbE3vqzPk0gHFUFZO49T2jp9MZbYMr6Il67n3sAwtQ5p-9yXQtNNN18fSCWh4Jn9KtGYw1Fk5-75EGxTNgVggyS26Hs',
        fallbackLabel: 'Mohamed Qadir',
      },
      {
        name: 'Hajj Muhammad Outanin',
        role: 'Guitarist bridging desert roots and the world',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD0aDLNWuKm4h3rsz30AfdY1Oi8-ynnae4m8X3QQvP5_6EaTgC_vYgN7FnBoOOu71tgb-oUw202GgS08CleHKVLv4x44aFadj3SnGaPwWE3oTVJnBkj59B6brrKTROpS98-PnyQ-7kzky2PGpYUzBSS351JNrRyXOG959QETF2lFCcbzi5xmgo7c6cD_l-RuQMD-FeklHDhvVCFhPKe1Udmv-XYxF3F_jQ2FVirpZ1RFuNDCY-Z70RZDJv1jxk4xpBSme27DL29BNLC',
        fallbackLabel: 'Hajj Muhammad',
      },
    ],
  },
  quote: {
    text:
      'We sing because we love.\nWe perform because we remember.\nWe continue because silence would mean forgetting.\nAs long as there is breath,\nas long as there is rhythm,\nthe desert will sing.',
    subtitle: 'Our Promise',
  },
  globalRepresentation: {
    bgImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSx-PnOWnzsnYct91E4e1E0mYyFUpt4toQAXasoQhoVUK8-3F7FTFyLbcZuvvMtrraq0GoutLrHrKMl2DTT8wwU5OE4MFWMl-slR1ozbYzXvr8TtPZAtYx-4w7t9x_h8beLkHGMpyt4hwpUJw73_auprI1gXOy2EWlOmY3WfCK4SWxv-2-kqqHXUXcJtFmgTmAAa7jSzZLyeiVe8-3zoK32qlCs5w854oRZJchktI3aYxRgHreRmYODCxYHIFbhQSwkAfXWZ-FHdCD',
    subtitle: 'Special Star',
    title: 'Managed with Care and Respect',
    description: 'Managed with care and respect by Samira under Special Star.',
    features: [] as Array<{
      title: string;
      description: string;
    }>,
  },
  inquiries: {
    subtitle: 'Inquiries',
    title: 'Contact Samira',
    description:
      'For performances, cultural invitations, media requests, and collaborations, reach out to Samira under Special Star using the form or email below.',
    contactMethods: [
      {
        label: 'Tel (Morocco)',
        value: '+212 750 189 940',
        href: 'tel:+212750189940',
        icon: 'call',
      },
      {
        label: 'WhatsApp (UK)',
        value: '+44 7956 123 446',
        href: 'https://wa.me/447956123446',
        icon: 'chat',
      },
      {
        label: 'WhatsApp (Morocco)',
        value: '+212 763 912 787',
        href: 'https://wa.me/212763912787',
        icon: 'chat',
      },
      {
        label: 'Email',
        value: 'info@specialstarsarl.com',
        href: 'mailto:info@specialstarsarl.com',
        icon: 'mail',
      },
    ],
    email: 'info@specialstarsarl.com',
    emailDisplay: 'info@specialstarsarl.com',
    submitLabel: 'Send Inquiry',
    successMessage:
      'Your email app should open with a pre-filled message to info@specialstarsarl.com. If it does not, send your request directly to info@specialstarsarl.com.',
  },
  footer: {
    brand: 'Oulad Chatta Group',
    links: [
      { name: 'Top', href: '#top' },
      { name: 'Representation', href: '#representation' },
      { name: 'Contact', href: '#contact' },
    ],
    copyright: 'Copyright Oulad Chatta. All music, poetry, and creative content are protected by copyright.',
  },
} satisfies SiteData;
