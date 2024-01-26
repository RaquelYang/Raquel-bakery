export const SIDEBAR_ITEMS: SidebarVM[] = [
  {
    path: '/dashboard',
    name: '品項管理',
    enabled: true
  },
  {
    path: '/dashboard',
    name: '接收訂單',
    enabled: true
  },
  {
    path: '/dashboard',
    name: '材料庫存管理',
    enabled: true
  },
  {
    path: '/dashboard',
    name: '營運管理',
    enabled: true
  },
  {
    path: '/dashboard',
    name: '進退貨管理',
    enabled: true
  },
]

export interface SidebarVM {
  path: string;
  name: string;
  enabled: boolean
}
