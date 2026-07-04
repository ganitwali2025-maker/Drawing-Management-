import { Drawing } from '../types';

export const baseData: Drawing[] = [
  { desc: 'Feed hopper', dwgNo: 'SIES-RMIPL-CVL-FDHP-001-R01', title: 'CIVIL FOUNDATION, PLAN, FOOTING, AND TIE BEAM DETAIL DRAWING OF FEED HOPPER', discipline: 'Civil', link: '#', rev: 'R01', date: '23/08/2023', remark: '' },
  { desc: 'Feed hopper', dwgNo: 'SIES-RMIPL-STR-FDHP-01', title: 'INSERT PLATE DETAILS AT 4.0 LVL', discipline: 'Structure', link: '#', rev: '0', date: '20/06/2023', remark: '' },
  { desc: 'Feed hopper', dwgNo: 'SIES-RMIPL-STR-FDHP-02', title: 'STRUCTURE DETAIL DRAWING OF FEED HOPPER', discipline: 'Structure', link: '#', rev: '0', date: '10/10/2023', remark: '' },
  { desc: 'Feed hopper', dwgNo: 'SIES-RMIPL-STR-FDHP-03', title: 'GRIZZLY DETAIL FOR FEED HOPPER', discipline: 'Structure', link: '#', rev: '0', date: '02/08/2024', remark: '' },
  { desc: 'Feed hopper', dwgNo: 'AAMD/066/23-24/AVF/G.A.- 001', title: 'GENERAL ARRANGEMENT DRAWING OF VIBRO FEEDER SIZE - 800 X 700', discipline: 'Equipment', link: '#', rev: '0', date: '19/08/2023', remark: '' },
  { desc: 'Jaw crusher', dwgNo: 'SIES-RMIPL-CVL-JAWC-01', title: 'FOUNDATION DETAIL FOR JAW CRUSHER BUILDING AT 0.000M LEVEL', discipline: 'Civil', link: '#', rev: '0', date: '23/03/2023', remark: '' },
  { desc: 'Jaw crusher', dwgNo: 'SIES-RMIPL-CVL-JAWC-02', title: 'COLUMN DETAIL FOR JAW CRUSHER BUILDING UPTO 2.175 M LVL', discipline: 'Civil', link: '#', rev: '0', date: '10/08/2023', remark: '' },
  { desc: 'Jaw crusher', dwgNo: 'SIES-RMIPL-CVL-JAWC-03', title: 'INSERT PLATE DETAIL FOR JAW CRUSHER BUILDING AT 0.000M LEVEL', discipline: 'Civil', link: '#', rev: '0', date: '19/08/2023', remark: '' },
  { desc: 'Jaw crusher', dwgNo: 'SIES-RMIPL-GA-JAWC-01', title: 'GENERAL ARRANGEMENT DRAWING OF JAW CRUSHER BUILDING', discipline: 'General arrangement', link: '#', rev: '0', date: '19/10/2023', remark: '' },
  { desc: 'Jaw crusher', dwgNo: 'SIES-RMIPL-STR-JAWC-01', title: 'PLAN DETAIL FOR JAW CRUSHER BUILDING AT 2.500M LEVEL', discipline: 'Structure', link: '#', rev: '0', date: '20/10/2023', remark: '' },
];

export const dummyData: Drawing[] = Array.from({ length: 50 }, (_, i) => ({
  ...baseData[i % baseData.length],
  sr: i + 1,
}));
