import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CursosService } from '../app/services/cursos.service';
import { CursoTiposService } from '../app/services/curso-tipos.service';
import { FuncoesService } from '../app/services/funcoes.service';
import { OfertasService } from './services/ofertas.service';
import { AuthGuardService } from './services/auth-guard.service';

import { ListagemCursosComponent, DialogExclusaoCursosComponent } from './components/Curso/listagem-cursos/listagem-cursos.component';
import { NovoCursoComponent } from './components/Curso/novo-curso/novo-curso.component';
import { AtualizarCursoComponent } from './components/Curso/atualizar-curso/atualizar-curso.component';

import { ListagemFuncoesComponent, DialogExclusaoFuncoesComponente } from './components/Funcao/listagem-funcoes/listagem-funcoes.component';
import { NovaFuncaoComponent } from './components/Funcao/nova-funcao/nova-funcao.component';
import { AtualizarFuncaoComponent } from './components/Funcao/atualizar-funcao/atualizar-funcao.component';

import { NovaOfertaComponent } from './components/Oferta/nova-oferta/nova-oferta.component';
import { ListagemOfertasComponent, DialogExclusaoOfertasComponent } from './components/Oferta/listagem-ofertas/listagem-ofertas.component';
import { AtualizarOfertaComponent } from './components/Oferta/atualizar-oferta/atualizar-oferta.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RegistrarUsuarioComponent } from './components/Usuario/Registro/registrar-usuario/registrar-usuario.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule } from 'ngx-mask';
import { LoginUsuarioComponent } from './components/Usuario/Login/login-usuario/login-usuario.component';
import { JwtModule } from '@auth0/angular-jwt';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './components/Dashboard/header/header.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

export function PegarTokenUsuario(){
  return localStorage.getItem("TokenUsuarioLogado");
}

@NgModule({
  declarations: [
    AppComponent,
    ListagemCursosComponent,
    NovoCursoComponent,
    AtualizarCursoComponent,
    DialogExclusaoCursosComponent,
    ListagemFuncoesComponent,
    NovaFuncaoComponent,
    AtualizarFuncaoComponent,
    DialogExclusaoFuncoesComponente,
    RegistrarUsuarioComponent,
    LoginUsuarioComponent,
    DashboardComponent,
    HeaderComponent,
    NovaOfertaComponent,
    ListagemOfertasComponent,
    AtualizarOfertaComponent,
    DialogExclusaoOfertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatProgressBarModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),
    JwtModule.forRoot({
      config:{
        tokenGetter: PegarTokenUsuario,
        allowedDomains: ['localhost:5099'],
        disallowedRoutes: []
      }      
    }),
    MatSidenavModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [
    CursosService,
    CursoTiposService,
    FuncoesService,
    OfertasService,
    AuthGuardService,    
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
