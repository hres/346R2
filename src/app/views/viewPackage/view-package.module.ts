import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ViewPackageComponent} from './view-package.component';

import {GetRecordService} from '../../services/getRecord.service'
import {ModalBoxModule} from '../../modal-box/modal-box.module'
import { BrowserModule } from '@angular/platform-browser';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
import {RouterModule} from '@angular/router';
import {CreateNftAsPreparedModule} from '../../createRecords/createNftPrepared/create-nft-as-prepared.module'
 import {CreateNftModule} from '../../createRecords/createNft/create-nft.module'


@NgModule({
    imports:[
        CommonModule,
        ConfirmBoxModule,
        ModalBoxModule,
        RouterModule,
        CreateNftAsPreparedModule,
        CreateNftModule
        
       
    ],
    declarations:[
    ViewPackageComponent
    ],
    providers: [
        GetRecordService
    ]

})


export class ViewPackageModule{

}

