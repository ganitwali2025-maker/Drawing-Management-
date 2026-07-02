import { Book, Student, Teacher, Course, LiveSession, PaymentItem, Achievement, BestSale } from './types';

export const INITIAL_BOOKS: Book[] = [
  // Popular Section
  {
    id: 'pop-1',
    title: 'The book is an essential guide to modern UI design',
    author: 'Sarah Jenkins',
    category: 'Design',
    description: 'An exhaustive reference guide explaining modern interface patterns, visual weight, claymorphic styling, and functional micro-interactions.',
    rating: 4.8,
    salesCount: 1240,
    isPopular: true,
    isOngoing: false,
    color: 'from-blue-200 to-indigo-200',
    coverIcon: 'stacked_books',
    bookmarked: false,
    liked: true
  },
  {
    id: 'pop-2',
    title: 'The book is an essential key to creative writing',
    author: 'Julian Barnes',
    category: 'Writing',
    description: 'A masterpiece detailing the process of creating compelling narratives, storyboards, and rich structural metaphors in writing.',
    rating: 4.9,
    salesCount: 1450,
    isPopular: true,
    isOngoing: false,
    color: 'from-amber-100 to-orange-200',
    coverIcon: 'red_book',
    bookmarked: true,
    liked: false
  },
  {
    id: 'pop-3',
    title: 'The book is an essential study of user psychology',
    author: 'Dr. Helen Carter',
    category: 'Psychology',
    description: 'Understand the behavioral cues, decision-making pipelines, and psychological factors governing software interaction.',
    rating: 4.7,
    salesCount: 980,
    isPopular: true,
    isOngoing: false,
    color: 'from-purple-200 to-indigo-200',
    coverIcon: 'open_book',
    bookmarked: false,
    liked: false
  },
  {
    id: 'pop-4',
    title: 'The book is an essential guide to coffee and focus',
    author: 'Marc Andre',
    category: 'Productivity',
    description: 'Learn how environmental setup, small desk accessories, and ritualistic habits trigger high-productivity flow states.',
    rating: 4.6,
    salesCount: 1120,
    isPopular: true,
    isOngoing: false,
    color: 'from-pink-100 to-rose-200',
    coverIcon: 'coffee_cup',
    bookmarked: false,
    liked: true
  },

  // Ongoing Section
  {
    id: 'ong-1',
    title: 'The book is an essential guide to 3D rendering art',
    author: 'Kevyn Ramos',
    category: '3D Art',
    description: 'Master the physics-based rendering engines, global illumination, and mesh construction patterns inside modern design applications.',
    rating: 4.9,
    salesCount: 880,
    isPopular: false,
    isOngoing: true,
    progress: 72,
    daysLeft: 4,
    color: 'from-violet-100 to-purple-200',
    coverIcon: 'tilted_stacked',
    bookmarked: true,
    liked: true
  },
  {
    id: 'ong-2',
    title: 'The book is an essential course in character logic',
    author: 'Irham Shidiq',
    category: 'Illustration',
    description: 'Create whimsical, friendly clay-styled characters with expressive gestures, vector grids, and adorable color palettes.',
    rating: 4.8,
    salesCount: 1040,
    isPopular: false,
    isOngoing: true,
    progress: 45,
    daysLeft: 9,
    color: 'from-cyan-100 to-emerald-100',
    coverIcon: 'cute_cloud_book',
    bookmarked: false,
    liked: true
  },
  {
    id: 'ong-3',
    title: 'The book is an essential step to career scaling',
    author: 'Lisa Sterling',
    category: 'Business',
    description: 'Step-by-step framework to transition from junior executioner to key design or product lead in modern organizations.',
    rating: 4.7,
    salesCount: 620,
    isPopular: false,
    isOngoing: true,
    progress: 89,
    daysLeft: 2,
    color: 'from-fuchsia-100 to-pink-200',
    coverIcon: 'yellow_ladder',
    bookmarked: true,
    liked: false
  },
  {
    id: 'ong-4',
    title: 'The book is an essential manual for layout precision',
    author: 'David Müller',
    category: 'Design',
    description: 'Deep dive into Swiss typography, strict typographic hierarchy, baseline alignment, and grid architectures.',
    rating: 4.9,
    salesCount: 1530,
    isPopular: false,
    isOngoing: true,
    progress: 20,
    daysLeft: 14,
    color: 'from-blue-100 to-sky-200',
    coverIcon: 'book_and_pencil',
    bookmarked: false,
    liked: false
  }
];

export const INITIAL_STUDENTS: Student[] = [
  {
    id: 'std-1',
    name: 'Chloe Watson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
    email: 'chloe.watson@skillset.edu',
    level: 'Advanced',
    activeCourses: 4,
    attendanceRate: 98,
    progress: 88,
    joinedDate: 'Jan 12, 2026'
  },
  {
    id: 'std-2',
    name: 'Irham Muhammad Shidiq',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120',
    email: 'irham.shidiq@skillset.edu',
    level: 'Intermediate',
    activeCourses: 5,
    attendanceRate: 94,
    progress: 68,
    joinedDate: 'Feb 20, 2026'
  },
  {
    id: 'std-3',
    name: 'Emily Chen',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120',
    email: 'emily.chen@skillset.edu',
    level: 'Advanced',
    activeCourses: 3,
    attendanceRate: 100,
    progress: 92,
    joinedDate: 'Oct 05, 2025'
  },
  {
    id: 'std-4',
    name: 'Marcus Rashford',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120',
    email: 'marcus.r@skillset.edu',
    level: 'Beginner',
    activeCourses: 2,
    attendanceRate: 85,
    progress: 33,
    joinedDate: 'May 10, 2026'
  },
  {
    id: 'std-5',
    name: 'Aisha Al-Mansoor',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
    email: 'aisha.m@skillset.edu',
    level: 'Advanced',
    activeCourses: 6,
    attendanceRate: 97,
    progress: 75,
    joinedDate: 'Nov 15, 2025'
  }
];

export const INITIAL_TEACHERS: Teacher[] = [
  {
    id: 'tch-1',
    name: 'Prof. Albus Gable',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120',
    subject: '3D Graphics & Spatial Art',
    experience: '12 years',
    activeClasses: 3,
    rating: 4.9,
    status: 'online',
    nextClassTime: 'Today, 4:00 PM'
  },
  {
    id: 'tch-2',
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120',
    subject: 'Typography & Layout Systems',
    experience: '8 years',
    activeClasses: 4,
    rating: 4.8,
    status: 'online',
    nextClassTime: 'Tomorrow, 10:00 AM'
  },
  {
    id: 'tch-3',
    name: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120',
    subject: 'User Psychology & UI Patterns',
    experience: '6 years',
    activeClasses: 2,
    rating: 4.7,
    status: 'offline',
    nextClassTime: 'Friday, 1:00 PM'
  }
];

export const INITIAL_COURSES: Course[] = [
  {
    id: 'crs-1',
    title: 'Mastering 3D Claymorphism in Modern Web Layouts',
    instructor: INITIAL_TEACHERS[0],
    category: 'Design',
    lessonsCount: 24,
    duration: '18h 45m',
    rating: 4.9,
    enrolled: true,
    progress: 72,
    color: 'from-purple-500 to-indigo-600',
    image: 'claymorphism'
  },
  {
    id: 'crs-2',
    title: 'Advanced Swiss Typography & Layout Systems',
    instructor: INITIAL_TEACHERS[1],
    category: 'Typography',
    lessonsCount: 16,
    duration: '12h 10m',
    rating: 4.8,
    enrolled: true,
    progress: 20,
    color: 'from-rose-500 to-orange-500',
    image: 'typography'
  },
  {
    id: 'crs-3',
    title: 'Behavioral UX and Product Engineering',
    instructor: INITIAL_TEACHERS[2],
    category: 'UX Research',
    lessonsCount: 30,
    duration: '22h 15m',
    rating: 4.7,
    enrolled: false,
    color: 'from-cyan-500 to-blue-600',
    image: 'ux_behavior'
  }
];

export const INITIAL_LIVE_SESSIONS: LiveSession[] = [
  {
    id: 'live-1',
    title: 'Interactive Critique: 3D Book Layouts & Soft Clay Shading',
    teacher: INITIAL_TEACHERS[0],
    activeViewers: 142,
    startTime: 'Started 20 mins ago',
    status: 'live',
    streamUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    messages: [
      { user: 'Irham Shidiq', text: 'This lighting setup makes the book spine look extremely real!', timestamp: '22:45' },
      { user: 'Emily Chen', text: 'Can we achieve this shadow complexity strictly using CSS?', timestamp: '22:47' },
      { user: 'Prof. Albus', text: 'Absolutely Emily, standard Tailwind box shadow extensions do the trick!', timestamp: '22:48' },
      { user: 'Chloe Watson', text: 'Is the recording going to be posted to the courses tab?', timestamp: '22:50' },
      { user: 'Marcus', text: 'Loving the live visual exercises.', timestamp: '22:52' }
    ]
  },
  {
    id: 'live-2',
    title: 'Mastering SVG Path Morphing and Fluid Web Animations',
    teacher: INITIAL_TEACHERS[1],
    activeViewers: 0,
    startTime: 'Tomorrow, 10:00 AM',
    status: 'upcoming',
    streamUrl: '',
    messages: []
  }
];

export const INITIAL_PAYMENTS: PaymentItem[] = [
  {
    id: 'pay-1',
    invoiceId: 'INV-2026-004',
    amount: 49.00,
    date: 'Jun 15, 2026',
    status: 'paid',
    paymentMethod: 'Credit Card (**** 4242)',
    description: 'SkillSet Pro monthly subscription fee'
  },
  {
    id: 'pay-2',
    invoiceId: 'INV-2026-003',
    amount: 12.50,
    date: 'Jun 02, 2026',
    status: 'paid',
    paymentMethod: 'PayPal (ganitwali2025@gmail.com)',
    description: 'Purchase of custom guide "The book is an essential key to creative writing"'
  },
  {
    id: 'pay-3',
    invoiceId: 'INV-2026-002',
    amount: 49.00,
    date: 'May 15, 2026',
    status: 'paid',
    paymentMethod: 'Credit Card (**** 4242)',
    description: 'SkillSet Pro monthly subscription fee'
  },
  {
    id: 'pay-4',
    invoiceId: 'INV-2026-001',
    amount: 49.00,
    date: 'Apr 15, 2026',
    status: 'paid',
    paymentMethod: 'Credit Card (**** 4242)',
    description: 'SkillSet Pro monthly subscription fee'
  }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: 'UI Craftsman',
    description: 'Gain 68% progress across advanced UI modules',
    progress: 68,
    daysLeft: 7,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
    unlocked: true
  },
  {
    id: 'ach-2',
    title: 'Daily Reader Master',
    description: 'Read 33% progress in visual storytelling guides',
    progress: 33,
    daysLeft: 12,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120',
    unlocked: true
  }
];

export const INITIAL_BEST_SALES: BestSale[] = [
  {
    id: 'bs-1',
    title: 'Grow green',
    rating: 4.5,
    price: 15.00,
    category: 'Ecology',
    imageType: 'plant_pot',
    color: 'from-emerald-100 to-green-200'
  },
  {
    id: 'bs-2',
    title: 'Raise a plant',
    rating: 4.0,
    price: 18.50,
    category: 'Gardening',
    imageType: 'watering_can',
    color: 'from-teal-100 to-cyan-200'
  },
  {
    id: 'bs-3',
    title: 'One question a day',
    rating: 4.5,
    price: 12.00,
    category: 'Self-help',
    imageType: 'purple_journal',
    color: 'from-purple-100 to-indigo-200'
  },
  {
    id: 'bs-4',
    title: 'Unplug day',
    rating: 4.0,
    price: 14.00,
    category: 'Mindfulness',
    imageType: 'unplug_coffee',
    color: 'from-orange-100 to-amber-200'
  },
  {
    id: 'bs-5',
    title: 'Best year journal',
    rating: 3.5,
    price: 22.00,
    category: 'Planning',
    imageType: 'gold_journal',
    color: 'from-pink-100 to-red-200'
  }
];
