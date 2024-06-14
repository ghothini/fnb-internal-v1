// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { confirmationComponent } from 'app/components/confirmation.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-bin',
  templateUrl: './bin.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class binComponent {
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
      this.sd_TtR0aNeYm0CQu7nU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_TtR0aNeYm0CQu7nU(bh) {
    try {
      bh = this.sd_Nl48BFmHErwb0WwS(bh);
      //appendnew_next_sd_TtR0aNeYm0CQu7nU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TtR0aNeYm0CQu7nU');
    }
  }

  sd_IZjtmmBWKM1zSBqr(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_KL0gpXHAnGd85kYJ(bh);
      //appendnew_next_sd_IZjtmmBWKM1zSBqr
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IZjtmmBWKM1zSBqr');
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
      bh = this.sd_LYyzDzjkK5yX2PEc(bh);
      //appendnew_next_searchTable
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7HqqK2ym3dPFJ2n8');
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
      bh = this.sd_LCa1PC7l4xPwojFS(bh);
      //appendnew_next_declineApplication
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IE6UZeNgRbDOJ7YN');
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
      bh = this.sd_bS1fv5V64fgeWDq5(bh);
      //appendnew_next_approveApplication
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q4KCst8Kh6P2Kuf9');
    }
  }

  restoreApplication(application: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { application };
      bh.local = {};
      bh = this.sd_eCeYbLqtTbMu8dSb(bh);
      //appendnew_next_restoreApplication
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ImnWYmhuCmQCyMZw');
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
      bh = this.sd_0WSmntFqt280OuZ9(bh);
      //appendnew_next_refreshAllApplications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8nywLx4UDqALXoO8');
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
      bh = this.sd_y9vd4wJPUvlub98v(bh);
      //appendnew_next_generateTempPassword
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uzMtsdHYyrbm1Sf0');
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
      bh = this.sd_ESgNJZhZtlvs1uQ2(bh);
      //appendnew_next_determineUnreadNotifications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gBcuUrMeQmpmL7rO');
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
      bh = this.sd_4mlvZaOTTv0JglQj(bh);
      //appendnew_next_rereshBinApplications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CjucTRebSSzt5WrG');
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
      bh = this.sd_yIB6tEruy2gDFcp9(bh);
      //appendnew_next_openBin
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x8JzywSEKSrKvLGb');
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
      bh = this.sd_zu0sZZ5uovqQvHkc(bh);
      //appendnew_next_onPageChange
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9Kd9tWZ7rmOkYjce');
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
      bh = this.sd_qmOYVyNzIiSl4qN2(bh);
      //appendnew_next_updateApplicationToShow
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vpvy7lyqjan3eBU6');
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
      bh = this.sd_m6hVv30fpugqDiFt(bh);
      //appendnew_next_logOut
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2zgbhignRJLZ9OkB');
    }
  }

  close(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_DEgGq4dH8ruzsqIF(bh);
      //appendnew_next_close
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UAHsTRvUmu7QzkEi');
    }
  }
  //appendnew_flow_binComponent_start

  sd_Nl48BFmHErwb0WwS(bh) {
    try {
      bh = this.sd_tpl5MNqPHrhoE85R(bh);
      //appendnew_next_sd_Nl48BFmHErwb0WwS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nl48BFmHErwb0WwS');
    }
  }

  sd_tpl5MNqPHrhoE85R(bh) {
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
      bh = this.sd_Gg5i5yS0s2gpt7XP(bh);
      //appendnew_next_sd_tpl5MNqPHrhoE85R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tpl5MNqPHrhoE85R');
    }
  }

  sd_Gg5i5yS0s2gpt7XP(bh) {
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
      bh = this.sd_tzt7FALxgIpTqlwt(bh);
      //appendnew_next_sd_Gg5i5yS0s2gpt7XP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gg5i5yS0s2gpt7XP');
    }
  }

  sd_tzt7FALxgIpTqlwt(bh) {
    try {
      let outputVariables = this.refreshAllApplications();

      //appendnew_next_sd_tzt7FALxgIpTqlwt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tzt7FALxgIpTqlwt');
    }
  }

  sd_KL0gpXHAnGd85kYJ(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_d6jvPeIgIy6BJqGn(bh);
      //appendnew_next_sd_KL0gpXHAnGd85kYJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KL0gpXHAnGd85kYJ');
    }
  }

  sd_d6jvPeIgIy6BJqGn(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + '';
      //appendnew_next_sd_d6jvPeIgIy6BJqGn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d6jvPeIgIy6BJqGn');
    }
  }

  sd_LYyzDzjkK5yX2PEc(bh) {
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
      //appendnew_next_sd_LYyzDzjkK5yX2PEc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LYyzDzjkK5yX2PEc');
    }
  }

  sd_LCa1PC7l4xPwojFS(bh) {
    try {
      const page = this.page;
      bh.dialogData = {
        ...bh.input.application,
        isDeclingApplication: true,
      };
      bh = this.sd_wPtlUphxK0aZMmgk(bh);
      //appendnew_next_sd_LCa1PC7l4xPwojFS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LCa1PC7l4xPwojFS');
    }
  }

  sd_wPtlUphxK0aZMmgk(bh) {
    try {
      const confirmationDialog = this.__page_injector__.get(MatDialog);
      const confirmationDialogRef = confirmationDialog.open(
        confirmationComponent,
        { data: bh.dialogData, hasBackdrop: false, width: '400px' }
      );
      confirmationDialogRef.afterClosed().subscribe((event) => {
        this.page.result = event;
        this.sd_H1yQDiEOKUwV5LNM(bh);

        //appendnew_next_sd_wPtlUphxK0aZMmgk;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wPtlUphxK0aZMmgk');
    }
  }

  async sd_H1yQDiEOKUwV5LNM(bh) {
    try {
      if (
        this.sdService.operators['false'](
          this.page.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_1FRxXRbTTO20Xh98(bh);
      } else {
        bh = await this.sd_fk181zj6cHxjbw2O(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H1yQDiEOKUwV5LNM');
    }
  }

  sd_fk181zj6cHxjbw2O(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/decline';
      bh.input.application.status = bh.input.status;
      bh.input.application['reason'] = page.result;
      bh.input.application.collection = 'users';
      page.showSpinner = true;
      bh = this.saveAndSendDeclinedEmail(bh);
      //appendnew_next_sd_fk181zj6cHxjbw2O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fk181zj6cHxjbw2O');
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
      bh = this.sd_UWVnOKwSxKwQWUcN(bh);
      //appendnew_next_saveAndSendDeclinedEmail
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jSCKB3Z5MtVectfn');
    }
  }

  sd_UWVnOKwSxKwQWUcN(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_tCpk7EM7NItvd4bu(bh);
      //appendnew_next_sd_UWVnOKwSxKwQWUcN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UWVnOKwSxKwQWUcN');
    }
  }

  sd_tCpk7EM7NItvd4bu(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Application declined successfully!', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_tCpk7EM7NItvd4bu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tCpk7EM7NItvd4bu');
    }
  }

  sd_1FRxXRbTTO20Xh98(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Action cancelled.', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_1FRxXRbTTO20Xh98
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1FRxXRbTTO20Xh98');
    }
  }

  sd_bS1fv5V64fgeWDq5(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_q7iETnjS3nD1PZox(bh);
      //appendnew_next_sd_bS1fv5V64fgeWDq5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bS1fv5V64fgeWDq5');
    }
  }

  sd_q7iETnjS3nD1PZox(bh) {
    try {
      let outputVariables = this.generateTempPassword();

      bh = this.sd_BLBQl61oosZX8udb(bh);
      //appendnew_next_sd_q7iETnjS3nD1PZox
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q7iETnjS3nD1PZox');
    }
  }

  sd_BLBQl61oosZX8udb(bh) {
    try {
      const page = this.page;
      bh.input.application['password'] = page.tempPassword;

      bh.url = page.ssdUrl + '/approve';
      bh.input.application.status = bh.input.status;
      page.showSpinner = true;
      bh = this.saveAndSendApprovedEmail(bh);
      //appendnew_next_sd_BLBQl61oosZX8udb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BLBQl61oosZX8udb');
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
      bh = this.sd_1iCdTuvgCKsOhjgh(bh);
      //appendnew_next_saveAndSendApprovedEmail
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zidVzSPGKqs4DHO0');
    }
  }

  sd_1iCdTuvgCKsOhjgh(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/add-limits';
      bh.body = {
        _id: new Date().getTime(),
        email: bh.input.application.email,
        basicWithdrawal: 3000,
      };
      bh = this.saveDefaultLimits(bh);
      //appendnew_next_sd_1iCdTuvgCKsOhjgh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1iCdTuvgCKsOhjgh');
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
      bh = this.sd_owXT3CR5iey5WFA3(bh);
      //appendnew_next_saveDefaultLimits
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Q5rUQHSu6gWhF1W1');
    }
  }

  sd_owXT3CR5iey5WFA3(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_owdsdjr8KWZqhWDh(bh);
      //appendnew_next_sd_owXT3CR5iey5WFA3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_owXT3CR5iey5WFA3');
    }
  }

  sd_owdsdjr8KWZqhWDh(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Application approved successfully!', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_owdsdjr8KWZqhWDh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_owdsdjr8KWZqhWDh');
    }
  }

  sd_eCeYbLqtTbMu8dSb(bh) {
    try {
      const page = this.page;
      bh.dialogData = {
        ...bh.input.application,
        isDeclingApplication: false,
      };

      page.showSpinner = true;
      bh = this.sd_Fg0YSXnN1R1CX4SP(bh);
      //appendnew_next_sd_eCeYbLqtTbMu8dSb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eCeYbLqtTbMu8dSb');
    }
  }

  sd_Fg0YSXnN1R1CX4SP(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_XXI8gfEE8szeTuq3(bh);
      //appendnew_next_sd_Fg0YSXnN1R1CX4SP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fg0YSXnN1R1CX4SP');
    }
  }

  sd_XXI8gfEE8szeTuq3(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/restore-from-bin';
      page.showSpinner = true;
      bh = this.restoreApplicationBack(bh);
      //appendnew_next_sd_XXI8gfEE8szeTuq3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XXI8gfEE8szeTuq3');
    }
  }

  async restoreApplicationBack(bh) {
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
      bh = this.sd_2pPxyEfkRZRenu9d(bh);
      //appendnew_next_restoreApplicationBack
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IHx8vxj4rGKEjy49');
    }
  }

  sd_2pPxyEfkRZRenu9d(bh) {
    try {
      const page = this.page;
      bh.input.application['collection'] = 'bin-applications';

      bh.del_URL = page.ssdUrl + '/delete';
      bh = this.deleteBinApplication(bh);
      //appendnew_next_sd_2pPxyEfkRZRenu9d
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2pPxyEfkRZRenu9d');
    }
  }

  async deleteBinApplication(bh) {
    try {
      let requestOptions = {
        url: bh.del_URL,
        method: 'delete',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.application,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_Y4r4IJ8LoW4sXDde(bh);
      //appendnew_next_deleteBinApplication
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZQbMqnSE8P65OIfN');
    }
  }

  sd_Y4r4IJ8LoW4sXDde(bh) {
    try {
      let outputVariables = this.refreshAllApplications();

      bh = this.sd_tEWFbRlAw50uEV3z(bh);
      //appendnew_next_sd_Y4r4IJ8LoW4sXDde
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y4r4IJ8LoW4sXDde');
    }
  }

  sd_tEWFbRlAw50uEV3z(bh) {
    try {
      let outputVariables = this.rereshBinApplications();

      bh = this.sd_nxY8nnt0QsHLZmlP(bh);
      //appendnew_next_sd_tEWFbRlAw50uEV3z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tEWFbRlAw50uEV3z');
    }
  }

  sd_nxY8nnt0QsHLZmlP(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;

      bh = this.sd_lklnD1MxZsDm8Mqz(bh);
      //appendnew_next_sd_nxY8nnt0QsHLZmlP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nxY8nnt0QsHLZmlP');
    }
  }

  sd_lklnD1MxZsDm8Mqz(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Application restored successfully!', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_lklnD1MxZsDm8Mqz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lklnD1MxZsDm8Mqz');
    }
  }

  sd_0WSmntFqt280OuZ9(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_uYX9Nk0lVRc6u8su(bh);
      //appendnew_next_sd_0WSmntFqt280OuZ9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0WSmntFqt280OuZ9');
    }
  }

  sd_uYX9Nk0lVRc6u8su(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/get-bin';
      bh = this.getAllApplications(bh);
      //appendnew_next_sd_uYX9Nk0lVRc6u8su
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uYX9Nk0lVRc6u8su');
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
      bh = this.sd_VSyvbATDjLNiC3f0(bh);
      //appendnew_next_getAllApplications
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8OecDrFgFhQyms0S');
    }
  }

  sd_VSyvbATDjLNiC3f0(bh) {
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
      bh = this.sd_QZzMaK44FOlk3s7C(bh);
      //appendnew_next_sd_VSyvbATDjLNiC3f0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VSyvbATDjLNiC3f0');
    }
  }

  sd_QZzMaK44FOlk3s7C(bh) {
    try {
      let outputVariables = this.determineUnreadNotifications();

      bh = this.sd_1oSUkAMaUhwFqp9a(bh);
      //appendnew_next_sd_QZzMaK44FOlk3s7C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QZzMaK44FOlk3s7C');
    }
  }

  sd_1oSUkAMaUhwFqp9a(bh) {
    try {
      let outputVariables = this.rereshBinApplications();

      //appendnew_next_sd_1oSUkAMaUhwFqp9a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1oSUkAMaUhwFqp9a');
    }
  }

  sd_y9vd4wJPUvlub98v(bh) {
    try {
      const page = this.page;
      let unique: any = new Date().getTime().toString();
      unique = unique.split('');
      page.tempPassword = `${unique[unique.length - 1]}${
        unique[unique.length - 2]
      }${unique[unique.length - 3]}${unique[unique.length - 4]}`;

      //appendnew_next_sd_y9vd4wJPUvlub98v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_y9vd4wJPUvlub98v');
    }
  }

  sd_ESgNJZhZtlvs1uQ2(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_uZ6AzBvjHS5KbSWS(bh);
      //appendnew_next_sd_ESgNJZhZtlvs1uQ2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ESgNJZhZtlvs1uQ2');
    }
  }

  sd_uZ6AzBvjHS5KbSWS(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/get-notifications';
      bh = this.getAllNotifications(bh);
      //appendnew_next_sd_uZ6AzBvjHS5KbSWS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uZ6AzBvjHS5KbSWS');
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
      bh = this.sd_5VKCyG2rWoqDv8Ga(bh);
      //appendnew_next_getAllNotifications
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IRGXCgKXhn0sljfa');
    }
  }

  sd_5VKCyG2rWoqDv8Ga(bh) {
    try {
      const page = this.page; // Determine all unread
      page.notificationsCount = 0;
      page.result.forEach((notification) => {
        if (!notification.read) {
          page.notificationsCount++;
        }
      });
      //appendnew_next_sd_5VKCyG2rWoqDv8Ga
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5VKCyG2rWoqDv8Ga');
    }
  }

  sd_4mlvZaOTTv0JglQj(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/get-bin';
      bh = this.getAllBinApplications(bh);
      //appendnew_next_sd_4mlvZaOTTv0JglQj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4mlvZaOTTv0JglQj');
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
      bh = this.sd_qH60C55JZgyw8van(bh);
      //appendnew_next_getAllBinApplications
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dD4tUbI03sSLpOoz');
    }
  }

  sd_qH60C55JZgyw8van(bh) {
    try {
      const page = this.page;
      page.binApplicationsCount = page.result.length;
      bh = this.sd_CXRpVoA9Y7tqxrrD(bh);
      //appendnew_next_sd_qH60C55JZgyw8van
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qH60C55JZgyw8van');
    }
  }

  sd_CXRpVoA9Y7tqxrrD(bh) {
    try {
      let outputVariables = this.determineUnreadNotifications();

      //appendnew_next_sd_CXRpVoA9Y7tqxrrD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CXRpVoA9Y7tqxrrD');
    }
  }

  sd_yIB6tEruy2gDFcp9(bh) {
    try {
      const page = this.page;
      bh.message = `${page.binApplicationsCount} applications in bin`;
      bh = this.sd_CxzDTc2be7vpPJ2F(bh);
      //appendnew_next_sd_yIB6tEruy2gDFcp9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yIB6tEruy2gDFcp9');
    }
  }

  sd_CxzDTc2be7vpPJ2F(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open(bh.message, 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_733jszxJrodRYAzs(bh);
      //appendnew_next_sd_CxzDTc2be7vpPJ2F
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CxzDTc2be7vpPJ2F');
    }
  }

  sd_733jszxJrodRYAzs(bh) {
    try {
      const binDialog = this.__page_injector__.get(MatDialog);
      const binDialogRef = binDialog.open(binComponent, { data: bh.input.row });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_733jszxJrodRYAzs');
    }
  }

  sd_zu0sZZ5uovqQvHkc(bh) {
    try {
      const page = this.page;
      page.currentPageIndex = bh.input.ev.pageIndex;
      bh = this.sd_Nu9R2HT6RwgrMqWZ(bh);
      //appendnew_next_sd_zu0sZZ5uovqQvHkc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zu0sZZ5uovqQvHkc');
    }
  }

  sd_Nu9R2HT6RwgrMqWZ(bh) {
    try {
      let outputVariables = this.updateApplicationToShow(undefined);

      //appendnew_next_sd_Nu9R2HT6RwgrMqWZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nu9R2HT6RwgrMqWZ');
    }
  }

  sd_qmOYVyNzIiSl4qN2(bh) {
    try {
      const page = this.page;
      bh.startIndex = page.currentPageIndex * bh.input.itemsPerPage;
      bh.endIndex = bh.startIndex + bh.input.itemsPerPage;
      page.applicationsDatasource = page.backupapplicationsDatasource.slice(
        bh.startIndex,
        bh.endIndex
      );
      //appendnew_next_sd_qmOYVyNzIiSl4qN2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qmOYVyNzIiSl4qN2');
    }
  }

  sd_m6hVv30fpugqDiFt(bh) {
    try {
      const page = this.page;
      sessionStorage.clear();
      bh = this.sd_koX3bawnP0g68frd(bh);
      //appendnew_next_sd_m6hVv30fpugqDiFt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_m6hVv30fpugqDiFt');
    }
  }

  async sd_koX3bawnP0g68frd(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_L3pSQ0hjUudWl6f1(bh);
      //appendnew_next_sd_koX3bawnP0g68frd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_koX3bawnP0g68frd');
    }
  }

  sd_L3pSQ0hjUudWl6f1(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Logged out successfully!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_L3pSQ0hjUudWl6f1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L3pSQ0hjUudWl6f1');
    }
  }

  sd_DEgGq4dH8ruzsqIF(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.system);

      bh = this.sd_UTCWWtOrd8SO8AgF(bh);
      //appendnew_next_sd_DEgGq4dH8ruzsqIF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DEgGq4dH8ruzsqIF');
    }
  }

  sd_UTCWWtOrd8SO8AgF(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Bin closed', 'Ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_iIxUe6c6UZt3XfHV(bh);
      //appendnew_next_sd_UTCWWtOrd8SO8AgF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UTCWWtOrd8SO8AgF');
    }
  }

  sd_iIxUe6c6UZt3XfHV(bh) {
    try {
      let outputVariables = this.refreshAllApplications();

      bh = this.sd_rzMKKFtDXxLbOgkK(bh);
      //appendnew_next_sd_iIxUe6c6UZt3XfHV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iIxUe6c6UZt3XfHV');
    }
  }

  sd_rzMKKFtDXxLbOgkK(bh) {
    try {
      let outputVariables = this.rereshBinApplications();

      //appendnew_next_sd_rzMKKFtDXxLbOgkK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rzMKKFtDXxLbOgkK');
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
  //appendnew_flow_binComponent_Catch
}
