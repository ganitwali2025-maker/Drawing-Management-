import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';

import { LandingView } from '../pages/LandingView';
import { LoadingView } from '../pages/LoadingView';
import { DashboardView } from '../pages/DashboardView';
import { DrawingRegisterView } from '../pages/DrawingRegisterView';
import { DisciplineDrawingsView } from '../pages/DisciplineDrawingsView';

import { dummyData } from '../data/drawings';
import { GOOGLE_SHEETS_API_URL } from '../utils/constants';
import { Drawing, DisciplineCounts } from '../types/index';

function LandingViewWrapper() {
  const navigate = useNavigate();
  return (
    <LandingView 
      view="landing" 
      setView={() => {}} 
      onLogin={() => navigate('/loading')} 
    />
  );
}

function LoadingViewWrapper() {
  const navigate = useNavigate();
  return (
    <LoadingView 
      onComplete={() => navigate('/dashboard')} 
    />
  );
}

function DashboardViewWrapper({ counts }: { counts: DisciplineCounts }) {
  const navigate = useNavigate();
  return (
    <DashboardView 
      onLogout={() => navigate('/')} 
      onRegister={() => navigate('/register')} 
      onDisciplineClick={(id) => navigate(`/drawings/${id}`)}
      counts={counts} 
    />
  );
}

function DrawingRegisterViewWrapper({ tableData, loading, counts, onRefresh }: { tableData: Drawing[], loading: boolean, counts: DisciplineCounts, onRefresh: () => void }) {
  const navigate = useNavigate();
  return (
    <DrawingRegisterView 
      onBack={() => navigate('/dashboard')} 
      tableData={tableData} 
      loading={loading} 
      counts={counts} 
      onRefresh={onRefresh} 
    />
  );
}

function DynamicDisciplineViewWrapper({ tableData }: { tableData: Drawing[] }) {
  const navigate = useNavigate();
  const { disciplineId } = useParams();
  
  // Mapping discipline ID to nice Title and filter keyword
  const discMap: Record<string, { title: string, keyword: string[] }> = {
    'civil': { title: 'Civil Drawings', keyword: ['civil'] },
    'structural': { title: 'Structural Drawings', keyword: ['structur'] },
    'mechanical': { title: 'Mechanical Drawings', keyword: ['mechanic'] },
    'electrical': { title: 'Electrical Drawings', keyword: ['electric'] },
    'piping': { title: 'Piping Drawings', keyword: ['piping', 'pipe'] },
    'instrumentation': { title: 'Instrumentation Drawings', keyword: ['instrument'] },
    'equipment': { title: 'Equipment Drawings', keyword: ['equip'] },
    'general': { title: 'General Arrangement', keyword: ['general', 'ga', 'g.a'] }
  };

  const config = discMap[disciplineId || ''] || { title: 'Drawings', keyword: [] };
  
  const discDrawings = tableData.filter(row => {
    const disc = (row.discipline || '').toLowerCase();
    return config.keyword.some(k => disc.includes(k));
  });

  return (
    <DisciplineDrawingsView 
      title={config.title}
      discipline={config.title.replace(' Drawings', '')}
      drawings={discDrawings}
      onBack={() => navigate('/dashboard')}
    />
  );
}

export const AppRoutes: React.FC = () => {
  const [tableData, setTableData] = useState<Drawing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSheetData = async () => {
      const sheetUrl = GOOGLE_SHEETS_API_URL;
      if (!sheetUrl) {
        setTableData(dummyData);
        setLoading(false);
        return;
      }
      
      try {
        const response = await fetch(sheetUrl);
        const result = await response.json();
        if (result && result.length > 0) {
          setTableData(result);
        } else {
          setTableData(dummyData);
        }
      } catch (err) {
        console.error("Failed to fetch sheet data", err);
        setTableData(dummyData);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSheetData();
  }, []);

  const refreshData = () => {
    setLoading(true);
    const sheetUrl = GOOGLE_SHEETS_API_URL;
    fetch(sheetUrl)
      .then(r => r.json())
      .then(res => {
        if (res && res.length > 0) setTableData(res);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const getDisciplineCount = (keywords: string[]) => {
    if (loading) return 0;
    return tableData.filter(row => {
      const disc = (row.discipline || '').toLowerCase();
      return keywords.some(k => disc.includes(k));
    }).length;
  };

  const disciplineCounts: DisciplineCounts = {
    civil: getDisciplineCount(['civil']),
    structural: getDisciplineCount(['structur']),
    mechanical: getDisciplineCount(['mechanic']),
    electrical: getDisciplineCount(['electric']),
    piping: getDisciplineCount(['piping', 'pipe']),
    instrument: getDisciplineCount(['instrument']),
    equipment: getDisciplineCount(['equip']),
    general: getDisciplineCount(['general', 'ga', 'g.a']),
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingViewWrapper />} />
        <Route path="/loading" element={<LoadingViewWrapper />} />
        <Route path="/dashboard" element={<DashboardViewWrapper counts={disciplineCounts} />} />
        <Route path="/register" element={<DrawingRegisterViewWrapper tableData={tableData} loading={loading} counts={disciplineCounts} onRefresh={refreshData} />} />
        <Route path="/drawings/:disciplineId" element={<DynamicDisciplineViewWrapper tableData={tableData} />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
