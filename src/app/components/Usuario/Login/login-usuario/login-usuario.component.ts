import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  formulario: any;
  erros: string [];

  constructor(private usuariosService: UsuariosService, 
    private router: Router) { }

  ngOnInit(): void {
    this.erros = [];

    this.formulario = new FormGroup({
      cpf: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
      senha: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    })
  }

  get propriedade(){
    return this.formulario.controls;
  }

  EnviarFormulario(): void{
    this.erros = [];
    const dadosLogin = this.formulario.value;

    this.usuariosService.LogarUsuario(dadosLogin).subscribe(resultado => {
      const cpfUsuarioLogado = resultado.cpfUsuarioLogado;
      const usuarioId = resultado.usuarioId;
      const nomeUsuarioLogado = resultado.usuarioNome;
      const tokenUsuarioLogado = resultado.tokenUsuarioLogado;

      localStorage.setItem('CpfUsuarioLogado', cpfUsuarioLogado);
      localStorage.setItem('NomeUsuarioLogado', nomeUsuarioLogado);      
      localStorage.setItem('UsuarioId', usuarioId);
      localStorage.setItem('TokenUsuarioLogado', tokenUsuarioLogado);

      this.router.navigate(['/cursos/listagemcursos']);
    },
    (err) => {
      if (err.status === 400){
        for(const campo in err.error.errors)
          if(err.error.errors.hasOwnProperty(campo))
          {
            this.erros.push(err.error.errors[campo]);
          }
      }else{
        this.erros.push(err.error);        
      }
    });
  }

}
