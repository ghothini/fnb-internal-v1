// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { confirmationComponent } from 'app/components/confirmation.component'; //_splitter_
import { documentsComponent } from 'app/components/documents.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-landing',
  templateUrl: './landing.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class landingComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_0waufxsguIs33RX9(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_0waufxsguIs33RX9(bh) {
    try {
      bh = this.sd_XqeYPgbpYKVgKo5j(bh);
      //appendnew_next_sd_0waufxsguIs33RX9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0waufxsguIs33RX9');
    }
  }

  searchTable(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_yzhir2BQSs2Qq9uU(bh);
      //appendnew_next_searchTable
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6GVAxn4AayNmyQyt');
    }
  }

  declineApplication(
    status: any = undefined,
    application: any = undefined,
    ...others
  ) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { status, application };
      bh.local = {};
      bh = this.sd_dFoGYYqd79Z2OeuM(bh);
      //appendnew_next_declineApplication
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6R42INIMU8iNSVdy');
    }
  }

  approveApplication(
    status: any = undefined,
    application: any = undefined,
    ...others
  ) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { status, application };
      bh.local = {};
      bh = this.sd_nlmsQp0FW3D9QpMT(bh);
      //appendnew_next_approveApplication
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BouGGqdUz4IZ6FO3');
    }
  }

  deleteApplication(application: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { application };
      bh.local = {};
      bh = this.sd_od4kGVV5pwgVzQ0D(bh);
      //appendnew_next_deleteApplication
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DzPesJxUP2XvFcFy');
    }
  }

  refreshAllApplications(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_fmBYJ9KcKXEXShMn(bh);
      //appendnew_next_refreshAllApplications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tIYrijY8PLWPXslR');
    }
  }

  generateTempPassword(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_qPD3rEcugGRS2Q8H(bh);
      //appendnew_next_generateTempPassword
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bjkg5W4WsFY6el6C');
    }
  }

  determineUnreadNotifications(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Cylkuf1GL6PQ3lvf(bh);
      //appendnew_next_determineUnreadNotifications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5klZ6yucalBUxgpr');
    }
  }

  rereshBinApplications(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_947JKs6lwGaxKOU4(bh);
      //appendnew_next_rereshBinApplications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G6QEVTk7GiXzrAqy');
    }
  }

  openBin(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_tjJiACCFL9p8lfHD(bh);
      //appendnew_next_openBin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EmFJF0a4C8NC16Xd');
    }
  }

  onPageChange(ev: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { ev };
      bh.local = {};
      bh = this.sd_OUlvWeCKx2ckKzYm(bh);
      //appendnew_next_onPageChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OLy0tufC8SclMH2S');
    }
  }

  updateApplicationToShow(itemsPerPage: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { itemsPerPage };
      bh.local = {};
      bh = this.sd_S6Voa068vwzb1i5k(bh);
      //appendnew_next_updateApplicationToShow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tjyp90Lv9Wkwsih3');
    }
  }

  logOut(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_FAMRNEmdq7fYH5WV(bh);
      //appendnew_next_logOut
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D9c4lYik9ITVZrVw');
    }
  }

  viewDocuments(row: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { row };
      bh.local = {};
      bh = this.sd_JoFb2Fos9tpQJqdy(bh);
      //appendnew_next_viewDocuments
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BN7VaNvftR1KW90X');
    }
  }
  //appendnew_flow_landingComponent_start

  sd_XqeYPgbpYKVgKo5j(bh) {
    try {
      bh = this.sd_Ti7TFNc8x4TYLPgB(bh);
      //appendnew_next_sd_XqeYPgbpYKVgKo5j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XqeYPgbpYKVgKo5j');
    }
  }

  sd_Ti7TFNc8x4TYLPgB(bh) {
    try {
      this.page.overviewCards = undefined;
      this.page.applicationsDatasource = [];
      this.page.searchValue = '';
      this.page.backupapplicationsDatasource = undefined;
      this.page.showSpinner = false;
      this.page.tempPassword = undefined;
      this.page.notificationsCount = 0;
      this.page.binApplicationsCount = 0;
      this.page.totalApplications = 0;
      this.page.currentPageIndex = undefined;
      bh = this.sd_ZktKQLIVolBWuIqe(bh);
      //appendnew_next_sd_Ti7TFNc8x4TYLPgB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ti7TFNc8x4TYLPgB');
    }
  }

  sd_ZktKQLIVolBWuIqe(bh) {
    try {
      const page = this.page;
      page.overviewCards = [
        {
          imgSrc:
            'https://www.fnb.co.za/_assets/images/mm/fnb/pc/products/15/DDA13/card.png?v=3.14.0',
          label: 'Easy PAYU',
          amt: '0',
        },
        {
          imgSrc:
            'https://www.fnb.co.za/_assets/images/mm/fnb/pc/products/15/DDA13/card.png?v=3.14.0',
          label: 'Easy Smart',
          amt: '0',
        },
        {
          imgSrc:
            'https://www.fnb.co.za/_assets/images/mm/fnb/pc/products/15/DDAQ1/card.png?v=3.14.0',
          label: 'Aspire',
          amt: '0',
        },
      ];
      bh = this.sd_uMOfoPWt0gcE0NfI(bh);
      //appendnew_next_sd_ZktKQLIVolBWuIqe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZktKQLIVolBWuIqe');
    }
  }

  sd_uMOfoPWt0gcE0NfI(bh) {
    try {
      let outputVariables = this.refreshAllApplications();

      //appendnew_next_sd_uMOfoPWt0gcE0NfI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uMOfoPWt0gcE0NfI');
    }
  }

  sd_yzhir2BQSs2Qq9uU(bh) {
    try {
      const page = this.page;
      const searchResults = [];
      page.backupapplicationsDatasource.forEach((row) => {
        if (
          row.title.toLowerCase().includes(page.searchValue) ||
          row.surname.toLowerCase().includes(page.searchValue)
        ) {
          searchResults.push(row);
        } else if (
          row.email.toLowerCase().includes(page.searchValue.toString())
        ) {
          searchResults.push(row);
        } else if (
          row.status.toLowerCase().includes(page.searchValue.toString())
        ) {
          searchResults.push(row);
        }
        // To add for date
      });
      page.applicationsDatasource = searchResults;
      //appendnew_next_sd_yzhir2BQSs2Qq9uU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yzhir2BQSs2Qq9uU');
    }
  }

  sd_dFoGYYqd79Z2OeuM(bh) {
    try {
      const page = this.page;
      bh.dialogData = {
        ...bh.input.application,
        isDeclingApplication: true,
      };
      bh = this.sd_RjBtZjPwU2fzeTju(bh);
      //appendnew_next_sd_dFoGYYqd79Z2OeuM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dFoGYYqd79Z2OeuM');
    }
  }

  sd_RjBtZjPwU2fzeTju(bh) {
    try {
      const confirmationDialog = this.__page_injector__.get(MatDialog);
      const confirmationDialogRef = confirmationDialog.open(
        confirmationComponent,
        { data: bh.dialogData, hasBackdrop: false, width: '400px' }
      );
      confirmationDialogRef.afterClosed().subscribe((event) => {
        this.page.result = event;
        this.sd_OXFrVCOtdeCVHvqs(bh);

        //appendnew_next_sd_RjBtZjPwU2fzeTju;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RjBtZjPwU2fzeTju');
    }
  }

  async sd_OXFrVCOtdeCVHvqs(bh) {
    try {
      if (
        this.sdService.operators['false'](
          this.page.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_xUsp4ELIGY08kmmJ(bh);
      } else {
        bh = await this.sd_K0w4uyZ4DwckOIr5(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OXFrVCOtdeCVHvqs');
    }
  }

  sd_K0w4uyZ4DwckOIr5(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/decline';
      bh.input.application.status = bh.input.status;
      bh.input.application['reason'] = page.result;
      bh.input.application.collection = 'users';
      page.showSpinner = true;
      bh = this.saveAndSendDeclinedEmail(bh);
      //appendnew_next_sd_K0w4uyZ4DwckOIr5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K0w4uyZ4DwckOIr5');
    }
  }

  async saveAndSendDeclinedEmail(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.application,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_rXXuZLY9jf2DoJnx(bh);
      //appendnew_next_saveAndSendDeclinedEmail
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dmlo884nqgA6Ez7J');
    }
  }

  sd_rXXuZLY9jf2DoJnx(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_ybdb4P2kH06c5jot(bh);
      //appendnew_next_sd_rXXuZLY9jf2DoJnx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rXXuZLY9jf2DoJnx');
    }
  }

  sd_ybdb4P2kH06c5jot(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Application declined successfully!', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_ybdb4P2kH06c5jot
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ybdb4P2kH06c5jot');
    }
  }

  sd_xUsp4ELIGY08kmmJ(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Action cancelled.', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_xUsp4ELIGY08kmmJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xUsp4ELIGY08kmmJ');
    }
  }

  sd_nlmsQp0FW3D9QpMT(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_BmLPs1p5pq3yKZG3(bh);
      //appendnew_next_sd_nlmsQp0FW3D9QpMT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nlmsQp0FW3D9QpMT');
    }
  }

  sd_BmLPs1p5pq3yKZG3(bh) {
    try {
      let outputVariables = this.generateTempPassword();

      bh = this.sd_2CgpR3NbQ7PSHY0M(bh);
      //appendnew_next_sd_BmLPs1p5pq3yKZG3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BmLPs1p5pq3yKZG3');
    }
  }

  sd_2CgpR3NbQ7PSHY0M(bh) {
    try {
      const page = this.page;
      bh.input.application['password'] = page.tempPassword;
      bh.url = page.ssdUrl + '/approve';
      bh.input.application.status = bh.input.status;
      page.showSpinner = true;
      bh = this.saveAndSendApprovedEmail(bh);
      //appendnew_next_sd_2CgpR3NbQ7PSHY0M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2CgpR3NbQ7PSHY0M');
    }
  }

  async saveAndSendApprovedEmail(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.application,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_zELNJANGTQK0MrII(bh);
      //appendnew_next_saveAndSendApprovedEmail
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NdO7oF7j5pDSeGMA');
    }
  }

  sd_zELNJANGTQK0MrII(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/add-limits';
      bh.body = {
        _id: new Date().getTime(),
        email: bh.input.application.email,
        basicWithdrawal: 3000,
      };
      bh = this.saveDefaultLimits(bh);
      //appendnew_next_sd_zELNJANGTQK0MrII
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zELNJANGTQK0MrII');
    }
  }

  async saveDefaultLimits(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_Ab5PFpPCWXLqFdqv(bh);
      //appendnew_next_saveDefaultLimits
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0qREdHHWHiVtwU8s');
    }
  }

  sd_Ab5PFpPCWXLqFdqv(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_Tv9eNsR7rNobQYNe(bh);
      //appendnew_next_sd_Ab5PFpPCWXLqFdqv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ab5PFpPCWXLqFdqv');
    }
  }

  sd_Tv9eNsR7rNobQYNe(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Application approved successfully!', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_Tv9eNsR7rNobQYNe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tv9eNsR7rNobQYNe');
    }
  }

  sd_od4kGVV5pwgVzQ0D(bh) {
    try {
      const page = this.page;
      bh.dialogData = {
        ...bh.input.application,
        isDeclingApplication: false,
      };
      bh = this.sd_G3kwCgVkEdSlEPGZ(bh);
      //appendnew_next_sd_od4kGVV5pwgVzQ0D
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_od4kGVV5pwgVzQ0D');
    }
  }

  sd_G3kwCgVkEdSlEPGZ(bh) {
    try {
      const confirmationDialog = this.__page_injector__.get(MatDialog);
      const confirmationDialogRef = confirmationDialog.open(
        confirmationComponent,
        { data: bh.dialogData, hasBackdrop: false, width: '400px' }
      );
      confirmationDialogRef.afterClosed().subscribe((event) => {
        this.page.result = event;
        this.sd_akQV9EcVDrGkugA3(bh);

        //appendnew_next_sd_G3kwCgVkEdSlEPGZ;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G3kwCgVkEdSlEPGZ');
    }
  }

  sd_akQV9EcVDrGkugA3(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_CymERuJGmaEDgl2i(bh);
      } else if (
        this.sdService.operators['false'](
          this.page.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_PBkEkyrWSpq6lwx3(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_akQV9EcVDrGkugA3');
    }
  }

  sd_CymERuJGmaEDgl2i(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_a813v9ru7lcb8Qhy(bh);
      //appendnew_next_sd_CymERuJGmaEDgl2i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CymERuJGmaEDgl2i');
    }
  }

  sd_a813v9ru7lcb8Qhy(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/add-to-bin';
      page.showSpinner = true;
      bh = this.addApplicationToBin(bh);
      //appendnew_next_sd_a813v9ru7lcb8Qhy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a813v9ru7lcb8Qhy');
    }
  }

  async addApplicationToBin(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.application,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_YAIVoXkYIAEITXcI(bh);
      //appendnew_next_addApplicationToBin
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k9G9nnL71HioDzv9');
    }
  }

  sd_YAIVoXkYIAEITXcI(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/delete';
      bh.input.application['collection'] = 'users';
      bh = this.removeAccountApplication(bh);
      //appendnew_next_sd_YAIVoXkYIAEITXcI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YAIVoXkYIAEITXcI');
    }
  }

  async removeAccountApplication(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'delete',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.application,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_xbLfg6DxNlzJhD1Q(bh);
      //appendnew_next_removeAccountApplication
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vVzMnCClFIW3xRnO');
    }
  }

  sd_xbLfg6DxNlzJhD1Q(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;

      bh = this.sd_qG8LRGuP4bDGoPJc(bh);
      //appendnew_next_sd_xbLfg6DxNlzJhD1Q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xbLfg6DxNlzJhD1Q');
    }
  }

  sd_qG8LRGuP4bDGoPJc(bh) {
    try {
      let outputVariables = this.refreshAllApplications();

      bh = this.sd_bWzG5UwtssgN9fKy(bh);
      //appendnew_next_sd_qG8LRGuP4bDGoPJc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qG8LRGuP4bDGoPJc');
    }
  }

  sd_bWzG5UwtssgN9fKy(bh) {
    try {
      let outputVariables = this.rereshBinApplications();

      bh = this.sd_zUktgDhtzfiJRYbT(bh);
      //appendnew_next_sd_bWzG5UwtssgN9fKy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bWzG5UwtssgN9fKy');
    }
  }

  sd_zUktgDhtzfiJRYbT(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Application deleted successfully!', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_zUktgDhtzfiJRYbT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zUktgDhtzfiJRYbT');
    }
  }

  sd_PBkEkyrWSpq6lwx3(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Action cancelled.', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_PBkEkyrWSpq6lwx3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PBkEkyrWSpq6lwx3');
    }
  }

  sd_fmBYJ9KcKXEXShMn(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_aKHtEN9phj9uy2Bs(bh);
      //appendnew_next_sd_fmBYJ9KcKXEXShMn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fmBYJ9KcKXEXShMn');
    }
  }

  sd_aKHtEN9phj9uy2Bs(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/get-users';
      bh = this.getAllApplications(bh);
      //appendnew_next_sd_aKHtEN9phj9uy2Bs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aKHtEN9phj9uy2Bs');
    }
  }

  async getAllApplications(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_eYmRFoR6hl5KBA4C(bh);
      //appendnew_next_getAllApplications
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a3bbSntskuCoDbcA');
    }
  }

  sd_eYmRFoR6hl5KBA4C(bh) {
    try {
      const page = this.page; // Exclude admin account
      page.result = page.result.filter(
        (account) => account.email !== 'admin@gmail.com'
      );
      page.applicationsDatasource = page.result.reverse();
      page.backupapplicationsDatasource = page.applicationsDatasource;
      page.totalApplications = page.applicationsDatasource.length;
      page.notificationsApplications = page.result.filter(
        (application) => application.status === 'Pending'
      ).length;
      bh = this.sd_p7mp53wBL17LrHmi(bh);
      //appendnew_next_sd_eYmRFoR6hl5KBA4C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eYmRFoR6hl5KBA4C');
    }
  }

  sd_p7mp53wBL17LrHmi(bh) {
    try {
      let outputVariables = this.determineUnreadNotifications();

      bh = this.sd_F5zkDCn8LvkHqS0p(bh);
      //appendnew_next_sd_p7mp53wBL17LrHmi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p7mp53wBL17LrHmi');
    }
  }

  sd_F5zkDCn8LvkHqS0p(bh) {
    try {
      let outputVariables = this.rereshBinApplications();

      //appendnew_next_sd_F5zkDCn8LvkHqS0p
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F5zkDCn8LvkHqS0p');
    }
  }

  sd_qPD3rEcugGRS2Q8H(bh) {
    try {
      const page = this.page;
      let unique: any = new Date().getTime().toString();
      unique = unique.split('');
      page.tempPassword = `${unique[unique.length - 1]}${
        unique[unique.length - 2]
      }${unique[unique.length - 3]}${unique[unique.length - 4]}`;

      //appendnew_next_sd_qPD3rEcugGRS2Q8H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qPD3rEcugGRS2Q8H');
    }
  }

  sd_Cylkuf1GL6PQ3lvf(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_5YKnINQj7eWzJord(bh);
      //appendnew_next_sd_Cylkuf1GL6PQ3lvf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Cylkuf1GL6PQ3lvf');
    }
  }

  sd_5YKnINQj7eWzJord(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/get-notifications';
      bh = this.getAllNotifications(bh);
      //appendnew_next_sd_5YKnINQj7eWzJord
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5YKnINQj7eWzJord');
    }
  }

  async getAllNotifications(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_rxvIufPBBu448fMM(bh);
      //appendnew_next_getAllNotifications
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hu3MFyLaGY1b8Fu5');
    }
  }

  sd_rxvIufPBBu448fMM(bh) {
    try {
      const page = this.page; // Determine all unread
      page.notificationsCount = 0;
      page.result.forEach((notification) => {
        if (!notification.read) {
          page.notificationsCount++;
        }
      });
      //appendnew_next_sd_rxvIufPBBu448fMM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rxvIufPBBu448fMM');
    }
  }

  sd_947JKs6lwGaxKOU4(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/get-bin';
      bh = this.getAllBinApplications(bh);
      //appendnew_next_sd_947JKs6lwGaxKOU4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_947JKs6lwGaxKOU4');
    }
  }

  async getAllBinApplications(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_qXHqVSsLbrnAMGaf(bh);
      //appendnew_next_getAllBinApplications
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dBXcVjqk9xEQyCjX');
    }
  }

  sd_qXHqVSsLbrnAMGaf(bh) {
    try {
      const page = this.page;
      page.binApplicationsCount = page.result.length;
      bh = this.sd_tPNA98U1fBT66LOz(bh);
      //appendnew_next_sd_qXHqVSsLbrnAMGaf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qXHqVSsLbrnAMGaf');
    }
  }

  sd_tPNA98U1fBT66LOz(bh) {
    try {
      let outputVariables = this.determineUnreadNotifications();

      //appendnew_next_sd_tPNA98U1fBT66LOz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tPNA98U1fBT66LOz');
    }
  }

  sd_tjJiACCFL9p8lfHD(bh) {
    try {
      const page = this.page;
      bh.message = `${page.binApplicationsCount} applications in bin`;
      bh = this.sd_howTFM4FU1etuxSu(bh);
      //appendnew_next_sd_tjJiACCFL9p8lfHD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tjJiACCFL9p8lfHD');
    }
  }

  sd_howTFM4FU1etuxSu(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.message, 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_howTFM4FU1etuxSu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_howTFM4FU1etuxSu');
    }
  }

  sd_OUlvWeCKx2ckKzYm(bh) {
    try {
      const page = this.page;
      page.currentPageIndex = bh.input.ev.pageIndex;
      bh = this.sd_Gp8Lcn9QdmeSc9PK(bh);
      //appendnew_next_sd_OUlvWeCKx2ckKzYm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OUlvWeCKx2ckKzYm');
    }
  }

  sd_Gp8Lcn9QdmeSc9PK(bh) {
    try {
      let outputVariables = this.updateApplicationToShow(bh.input.ev.pageSize);

      //appendnew_next_sd_Gp8Lcn9QdmeSc9PK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gp8Lcn9QdmeSc9PK');
    }
  }

  sd_S6Voa068vwzb1i5k(bh) {
    try {
      const page = this.page;
      bh.startIndex = page.currentPageIndex * bh.input.itemsPerPage;
      bh.endIndex = bh.startIndex + bh.input.itemsPerPage;
      page.applicationsDatasource = page.backupapplicationsDatasource.slice(
        bh.startIndex,
        bh.endIndex
      );
      //appendnew_next_sd_S6Voa068vwzb1i5k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S6Voa068vwzb1i5k');
    }
  }

  sd_FAMRNEmdq7fYH5WV(bh) {
    try {
      const page = this.page;
      sessionStorage.clear();
      bh = this.sd_ZsBs1B88XMhDOeFB(bh);
      //appendnew_next_sd_FAMRNEmdq7fYH5WV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FAMRNEmdq7fYH5WV');
    }
  }

  async sd_ZsBs1B88XMhDOeFB(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_nmbbkfhW43svj0pJ(bh);
      //appendnew_next_sd_ZsBs1B88XMhDOeFB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZsBs1B88XMhDOeFB');
    }
  }

  sd_nmbbkfhW43svj0pJ(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Logged out successfully!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_nmbbkfhW43svj0pJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nmbbkfhW43svj0pJ');
    }
  }

  sd_JoFb2Fos9tpQJqdy(bh) {
    try {
      const documentsDialog = this.__page_injector__.get(MatDialog);
      const documentsDialogRef = documentsDialog.open(documentsComponent, {
        data: bh.input.row,
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JoFb2Fos9tpQJqdy');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_landingComponent_Catch
}
