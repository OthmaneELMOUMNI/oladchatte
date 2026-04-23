import heroHome from '../assets/hero-home-stage.png';
import hajjImage from '../assets/lhaj.png';
import mamoImage from '../assets/mamo.png';
import mjidImage from '../assets/mjid.jpeg';
import mostaphaImage from '../assets/MOSTAPHA.png';
import omarImage from '../assets/omar.png';

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
    instagram: string;
    links: SectionLink[];
    management: string;
    copyright: string;
  };
};

export const siteData = {
  navigation: {
    brand: 'Oulad Chatta Group',
    links: [
      { name: 'Home', href: '#top' },
      { name: 'About', href: '#ensemble' },
      { name: 'Heritage', href: '#heritage' },
      { name: 'Booking', href: '#booking' },
      { name: 'Contact', href: '#contact' },
    ],
    cta: {
      label: 'Book a Performance',
      href: '#booking',
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
    bgImageMobile: heroHome,
  },
  ancestry: {
    subtitle: '',
    title: 'Cultural Heritage',
    paragraphs: [
      'Oulad Chatta represents a living tradition of Sahrawi Hassani poetry and music, rooted in the cultural identity of the Moroccan desert. Their art form is passed down through generations, preserving oral storytelling, rhythm, and collective memory.',
      'Through traditional instruments such as the tidinit and tbal, the group expresses themes of desert life, history, migration, and social identity. Each performance is not only music, but a cultural transmission of heritage and knowledge.',
      'Oulad Chatta plays an important role in safeguarding intangible cultural heritage, ensuring that the voice, poetry, and traditions of the Sahrawi people continue to live and evolve for future generations.',
      'Oulad Chatta is available for:',
      '- International festivals',
      '- Cultural institutions',
      '- Theatre performances',
      '- Heritage and UNESCO programmes',
      '- Touring productions',
      'For booking enquiries, please contact our management team.',
    ],
    quote: '',
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
        image: omarImage,
        fallbackLabel: 'Omar',
      },
      {
        name: 'El-Moumni Mustapha (Chatta)',
        role: 'Master of the guembri and heartbeat of rhythm',
        image: mostaphaImage,
        fallbackLabel: 'Mustapha',
      },
      {
        name: 'El-Moumni Abdul Majid (Chatta)',
        role: 'A rare desert voice shaped by wind and sand',
        image: mjidImage,
        fallbackLabel: 'Abdul Majid',
      },
      {
        name: 'Al-Makhshuni Al-Habib',
        role: 'Guardian of the guedra, played seated as desert tradition demands',
        image: mamoImage,
        fallbackLabel: 'Al-Habib',
      },
      {
        name: 'Hajj Muhammad Outanin',
        role: 'Guitarist bridging desert roots and the world',
        image: hajjImage,
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
    description: 'Managed with care and respect under Special Star.',
    features: [] as Array<{
      title: string;
      description: string;
    }>,
  },
  inquiries: {
    subtitle: 'Inquiries',
    title: 'Contact',
    description:
      'For performances, cultural invitations, media requests, and collaborations, reach out through Special Star using the form or email below.',
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
    instagram: 'https://www.instagram.com/specialstar.worldmusic?igsh=MTRnOGRzbmNtazk5cw==',
    links: [
      { name: 'Home', href: '#top' },
      { name: 'About', href: '#ensemble' },
      { name: 'Heritage', href: '#heritage' },
      { name: 'Booking', href: '#booking' },
      { name: 'Contact', href: '#contact' },
    ],
    management: 'Managed with care and respect by Samira under Special Star.',
    copyright: '© Oulad Chatta. All music, poetry, and creative content are protected by copyright.',
  },
} satisfies SiteData;
