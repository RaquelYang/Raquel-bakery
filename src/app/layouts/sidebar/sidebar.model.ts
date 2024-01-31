export const SIDEBAR_ITEMS: SidebarVM[] = [
  {
    path: '/dashboard/inventory-management',
    name: '品項管理',
    enabled: true
  },
  {
    path: '/dashboard/items-management',
    name: '接收訂單',
    enabled: true
  },
  {
    path: '/dashboard/operations-management',
    name: '材料庫存管理',
    enabled: true
  },
  {
    path: '/dashboard/receive-order',
    name: '營運管理',
    enabled: true
  },
  {
    path: '/dashboard/test-form',
    name: 'Form-Test',
    enabled: true
  }
]

export interface SidebarVM {
  path: string;
  name: string;
  enabled: boolean
}
