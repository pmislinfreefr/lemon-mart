import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerComponent } from './manager.component';
import { MaterialModule } from '../material.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';
import { ManagerMaterialModule } from './manager.material.module';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { SharedComponentsModule } from '../shared-components.module';
import { UserTableComponent } from './user-table/user-table.component';
import { UserResolve } from '../user/user.resolve';
import { UserService } from '../user/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    UserManagementComponent,
    ReceiptLookupComponent,
    UserTableComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule,
    ManagerMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    FlexLayoutModule,
  ],
  providers: [UserService, AuthGuardService, UserResolve],
})
export class ManagerModule {}
