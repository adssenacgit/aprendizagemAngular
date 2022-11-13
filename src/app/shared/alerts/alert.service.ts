import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private _snackbar: MatSnackBar) { }

  onError = () => {
    this._snackbar.open('Erro ao encontrar algum curso!', 'Fechar', {
      duration: 5000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    })
  }
}
