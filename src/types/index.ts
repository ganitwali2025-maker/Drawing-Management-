import { ComponentType } from 'react';

export interface Drawing {
  sr?: number;
  desc: string;
  dwgNo: string;
  title: string;
  discipline: string;
  link: string;
  rev: string;
  date: string;
  remark: string;
}

export interface DisciplineCounts {
  civil: number;
  structural: number;
  mechanical: number;
  electrical: number;
  piping: number;
  instrument: number;
  equipment: number;
  general: number;
}

export interface LandingHeaderProps {
  onLogin: () => void;
}

export interface DashboardHeaderProps {
  onLogout: () => void;
  onRegister: () => void;
}

export interface RegisterHeaderProps {
  onBack: () => void;
}

export interface DisciplineCardProps {
  icon: ComponentType<any>;
  title: string;
  desc: string;
  count: number;
  image?: string;
  imgSize?: string;
  imgClass?: string;
  blendMode?: string;
  onClick?: () => void;
}

export interface ActionCardProps {
  icon: ComponentType<any>;
  title: string;
  desc: string;
  btnText: string;
  colorTheme: 'green' | 'purple' | 'orange' | 'amber';
  onClick?: () => void;
}

export interface TableProps {
  tableData: Drawing[];
  loading: boolean;
}

export interface LoadingViewProps {
  onComplete: () => void;
}

export interface AddDrawingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}
