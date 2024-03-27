import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { DIALOG_SIZE, DialogConfig } from '../constants/dialog.constants';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDialog<T, D>(component: ComponentType<T>, dialogSize: DIALOG_SIZE, data: D): MatDialogRef<T, D> {
    const config = DialogConfig.find(config => config.type === dialogSize);

    const dialogConfig = {
      data,
      ...config?.config
    };

    return this.dialog.open(component, dialogConfig);
  }
}
