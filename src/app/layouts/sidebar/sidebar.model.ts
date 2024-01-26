export const SIDEBAR_ITEMS: SidebarVM[] = [
  {
    path: '',
    name: '品項管理',
    enabled: true
  },
  {
    path: '',
    name: '接收訂單',
    enabled: true
  },
  {
    path: '',
    name: '材料庫存管理',
    enabled: true
  },
  {
    path: '',
    name: '營運管理',
    enabled: true
  },
  {
    path: '',
    name: '進退貨管理',
    enabled: true
  },
]

export interface SidebarVM {
  path: string;
  name: string;
  enabled: boolean
}
