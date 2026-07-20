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
  title?: string;
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

export interface BOMItem {
  srNo: number;
  itemDescription: string;
  materialGrade: string;
  qty: number;
  length: number;
  unitWeight: number;
  totalWeight: number;
}

export interface DrawingDetail extends Drawing {
  projectName?: string;
  areaLocation?: string;
  sheetSize?: string;
  scale?: string;
  createdBy?: string;
  checkedBy?: string;
  approvedBy?: string;
  status?: string;
  description?: string;
  bomItems?: BOMItem[];
}
