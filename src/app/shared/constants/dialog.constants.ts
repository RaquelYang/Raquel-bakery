export enum DIALOG_SIZE {
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
}

export interface DialogType {
  type: DIALOG_SIZE,
  config: DialogConfig;
}

export interface DialogConfig {
  autoFocus: boolean;
  disableClose: boolean;
  hasBackdrop: boolean;
  minHeight?: string;
  height?: string;
  width?: string;
  maxWidth?: string;
  maxHeight?: string;
  panelClass?: string;
}


export const DialogConfig: DialogType[] = [
  {
    type: DIALOG_SIZE.SM,
    config: {
      autoFocus: false,
      hasBackdrop: true,
      disableClose: true,
      maxWidth: '95vw',
      maxHeight: 'calc(95 * var(--vh))',
      panelClass: 'cus-dialog-sm'
    },
  },
  {
    type: DIALOG_SIZE.MD,
    config: {
      autoFocus: false,
      hasBackdrop: true,
      disableClose: true,
      maxWidth: '95vw',
      maxHeight: 'calc(95 * var(--vh))',
      panelClass: 'cus-dialog-md'
    },
  },
  {
    type: DIALOG_SIZE.LG,
    config: {
      autoFocus: false,
      hasBackdrop: true,
      disableClose: true,
      maxWidth: '95vw',
      maxHeight: 'calc(95 * var(--vh))',
      panelClass: 'cus-dialog-lg'
    },
  }
];
