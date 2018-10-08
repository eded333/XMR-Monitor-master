import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import {MinerCardComponent} from "./miner-card/miner-card.component"
import {MinerCardHashrateComponent} from "./miner-card-hashrate/miner-card-hashrate.component"
import {MinerCardResultsComponent} from "./miner-card-results/miner-card-results.component"
import { MinerCardConnectionsComponent } from './miner-card-connections/miner-card-connections.component';
import { MinerCardErrorComponent } from './miner-card-error/miner-card-error.component';
import { LastSeenPipe } from './lastSeenPipe/lastSeen.pipe';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    TopNavigationComponent,
    SubNavigationComponent,
    LoaderComponent,
    LastSeenPipe,
    MinerCardComponent,
    MinerCardHashrateComponent,
    MinerCardResultsComponent,
    MinerCardConnectionsComponent,
    MinerCardErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TopNavigationComponent,
    LoaderComponent,
    SubNavigationComponent,
    LastSeenPipe,
    MinerCardComponent,
    MinerCardHashrateComponent,
    MinerCardResultsComponent,
    MinerCardConnectionsComponent,
    MinerCardErrorComponent
  ],
  providers:[
    DatePipe
  ]
})
export class SharedModule {}
