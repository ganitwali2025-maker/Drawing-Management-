export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  rating: number;
  salesCount: number;
  isPopular: boolean;
  isOngoing: boolean;
  progress?: number; // percentage completed (for ongoing books)
  daysLeft?: number; // for ongoing books / assignments
  color: string; // Tailind background color class or hex
  coverIcon: string; // icon type to render a beautiful 3D-like graphic
  bookmarked: boolean;
  liked: boolean;
}

export interface Student {
  id: string;
  name: string;
  avatar: string;
  email: string;
  level: string;
  activeCourses: number;
  attendanceRate: number;
  progress: number; // overall progress percentage
  joinedDate: string;
}

export interface Teacher {
  id: string;
  name: string;
  avatar: string;
  subject: string;
  experience: string;
  activeClasses: number;
  rating: number;
  status: 'online' | 'offline';
  nextClassTime: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: Teacher;
  category: string;
  lessonsCount: number;
  duration: string;
  rating: number;
  enrolled: boolean;
  progress?: number;
  color: string;
  image: string;
}

export interface LiveSession {
  id: string;
  title: string;
  teacher: Teacher;
  activeViewers: number;
  startTime: string;
  status: 'live' | 'upcoming' | 'ended';
  streamUrl: string;
  messages: Array<{ user: string; text: string; timestamp: string }>;
}

export interface PaymentItem {
  id: string;
  invoiceId: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending' | 'failed';
  paymentMethod: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  progress: number;
  daysLeft: number;
  avatar: string;
  unlocked: boolean;
}

export interface BestSale {
  id: string;
  title: string;
  rating: number;
  price: number;
  category: string;
  imageType: string;
  color: string;
}
