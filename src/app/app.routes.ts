import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CardapiosComponent } from './menu/cardapios/cardapios.component';
import { EventosComponent } from './menu/eventos/eventos.component';
import { HistoriaComponent } from './menu/historia/historia.component';
import { ReservasComponent } from './menu/reservas/reservas.component';
import { UnidadesComponent } from './menu/unidades/unidades.component';
import { ContatoComponent } from './menu/contato/contato.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'cardapios', component: CardapiosComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'historia', component: HistoriaComponent },
    { path: 'reservas', component: ReservasComponent },
    { path: 'unidades', component: UnidadesComponent },
    { path: 'contato', component: ContatoComponent},
    {path: '', component: HomeComponent}
];
