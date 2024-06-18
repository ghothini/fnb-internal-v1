// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { documentsComponent } from 'app/components/documents.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-rejected',
  templateUrl: './rejected.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class rejectedComponent {
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
      this.sd_qFrgghJPxWd6Rmu0(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_qFrgghJPxWd6Rmu0(bh) {
    try {
      bh = this.sd_G86oaH1aHeydTOCH(bh);
      //appendnew_next_sd_qFrgghJPxWd6Rmu0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qFrgghJPxWd6Rmu0');
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
      bh = this.sd_cPk7saCdWPA47Ujs(bh);
      //appendnew_next_refreshAllApplications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O6qhcSCArSRCipRn');
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
      bh = this.sd_AKlRYJ3Iw2mTTYRL(bh);
      //appendnew_next_rereshBinApplications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_loEfBMdALwh3eJyU');
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
      bh = this.sd_2LLZojgYc22drkcc(bh);
      //appendnew_next_determineUnreadNotifications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ngm9j4MpO96wnUWh');
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
      bh = this.sd_L4c8gGPjKHW31EMM(bh);
      //appendnew_next_close
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WSignOCHnVaLf4A1');
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
      bh = this.sd_Zm2Gl06TfNzTjbnv(bh);
      //appendnew_next_viewDocuments
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6jMP96dguX5HtMt8');
    }
  }
  //appendnew_flow_rejectedComponent_start

  sd_G86oaH1aHeydTOCH(bh) {
    try {
      bh = this.sd_sDUdsbqbg20wnQhd(bh);
      //appendnew_next_sd_G86oaH1aHeydTOCH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G86oaH1aHeydTOCH');
    }
  }

  sd_sDUdsbqbg20wnQhd(bh) {
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
      bh = this.sd_f4ZDfvw6F95K41LN(bh);
      //appendnew_next_sd_sDUdsbqbg20wnQhd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sDUdsbqbg20wnQhd');
    }
  }

  sd_f4ZDfvw6F95K41LN(bh) {
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
      bh = this.sd_zbSYHtV6Jt674Ede(bh);
      //appendnew_next_sd_f4ZDfvw6F95K41LN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f4ZDfvw6F95K41LN');
    }
  }

  sd_zbSYHtV6Jt674Ede(bh) {
    try {
      let outputVariables = this.refreshAllApplications();

      //appendnew_next_sd_zbSYHtV6Jt674Ede
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zbSYHtV6Jt674Ede');
    }
  }

  sd_cPk7saCdWPA47Ujs(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_2QWj1dltnRSwcqPo(bh);
      //appendnew_next_sd_cPk7saCdWPA47Ujs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cPk7saCdWPA47Ujs');
    }
  }

  sd_2QWj1dltnRSwcqPo(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/get-users';
      bh = this.getAllApplications(bh);
      //appendnew_next_sd_2QWj1dltnRSwcqPo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2QWj1dltnRSwcqPo');
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
      bh = this.sd_4Plukia7cJziGoZj(bh);
      //appendnew_next_getAllApplications
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JX6iIhebnFxWzQP0');
    }
  }

  sd_4Plukia7cJziGoZj(bh) {
    try {
      const page = this.page; // Exclude admin account
      page.result = page.result.filter(
        (account) => account.email !== 'admin@gmail.com'
      );

      bh.newDataSource = page.result.reverse().filter((user: any) => {
        return user.status == 'Declined';
      });

      page.applicationsDatasource = bh.newDataSource;
      page.backupapplicationsDatasource = page.applicationsDatasource;
      page.totalApplications = page.applicationsDatasource.length;
      page.notificationsApplications = page.result.filter(
        (application) => application.status === 'Pending'
      ).length;
      bh = this.sd_uQs962uROw6uAVCK(bh);
      //appendnew_next_sd_4Plukia7cJziGoZj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4Plukia7cJziGoZj');
    }
  }

  sd_uQs962uROw6uAVCK(bh) {
    try {
      let outputVariables = this.rereshBinApplications();

      bh = this.sd_jBhlnF9gk6eTiCda(bh);
      //appendnew_next_sd_uQs962uROw6uAVCK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uQs962uROw6uAVCK');
    }
  }

  sd_jBhlnF9gk6eTiCda(bh) {
    try {
      let outputVariables = this.determineUnreadNotifications();

      //appendnew_next_sd_jBhlnF9gk6eTiCda
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jBhlnF9gk6eTiCda');
    }
  }

  sd_AKlRYJ3Iw2mTTYRL(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/get-bin';
      bh = this.getAllBinApplications(bh);
      //appendnew_next_sd_AKlRYJ3Iw2mTTYRL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AKlRYJ3Iw2mTTYRL');
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
      bh = this.sd_xgzrY0jdQkaqYXxK(bh);
      //appendnew_next_getAllBinApplications
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SAD1XTxCCCpsIVDr');
    }
  }

  sd_xgzrY0jdQkaqYXxK(bh) {
    try {
      const page = this.page;
      page.binApplicationsCount = page.result.length;
      bh = this.sd_1GVB1BIoyPewjzXd(bh);
      //appendnew_next_sd_xgzrY0jdQkaqYXxK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xgzrY0jdQkaqYXxK');
    }
  }

  sd_1GVB1BIoyPewjzXd(bh) {
    try {
      let outputVariables = this.rereshBinApplications();

      //appendnew_next_sd_1GVB1BIoyPewjzXd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1GVB1BIoyPewjzXd');
    }
  }

  sd_2LLZojgYc22drkcc(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_S4yECKy3tVf7Qjkj(bh);
      //appendnew_next_sd_2LLZojgYc22drkcc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2LLZojgYc22drkcc');
    }
  }

  sd_S4yECKy3tVf7Qjkj(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/get-notifications';
      bh = this.getAllNotifications(bh);
      //appendnew_next_sd_S4yECKy3tVf7Qjkj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S4yECKy3tVf7Qjkj');
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
      bh = this.sd_UNN9pYzWlMQLf1Vh(bh);
      //appendnew_next_getAllNotifications
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t7LpQU7RYQGLInVv');
    }
  }

  sd_UNN9pYzWlMQLf1Vh(bh) {
    try {
      const page = this.page; // Determine all unread
      page.notificationsCount = 0;
      page.result.forEach((notification) => {
        if (!notification.read) {
          page.notificationsCount++;
        }
      });
      //appendnew_next_sd_UNN9pYzWlMQLf1Vh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UNN9pYzWlMQLf1Vh');
    }
  }

  sd_L4c8gGPjKHW31EMM(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.system);

      bh = this.sd_6vIXX826V2O1bDMS(bh);
      //appendnew_next_sd_L4c8gGPjKHW31EMM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L4c8gGPjKHW31EMM');
    }
  }

  sd_6vIXX826V2O1bDMS(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Rejected table closed', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_h3QGlYp0DREQ4FED(bh);
      //appendnew_next_sd_6vIXX826V2O1bDMS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6vIXX826V2O1bDMS');
    }
  }

  sd_h3QGlYp0DREQ4FED(bh) {
    try {
      let outputVariables = this.refreshAllApplications();

      bh = this.sd_cExgwisPoBIevV56(bh);
      //appendnew_next_sd_h3QGlYp0DREQ4FED
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h3QGlYp0DREQ4FED');
    }
  }

  sd_cExgwisPoBIevV56(bh) {
    try {
      let outputVariables = this.determineUnreadNotifications();

      //appendnew_next_sd_cExgwisPoBIevV56
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cExgwisPoBIevV56');
    }
  }

  sd_Zm2Gl06TfNzTjbnv(bh) {
    try {
      const documentsDialog = this.__page_injector__.get(MatDialog);
      const documentsDialogRef = documentsDialog.open(documentsComponent, {
        data: bh.input.row,
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zm2Gl06TfNzTjbnv');
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
  //appendnew_flow_rejectedComponent_Catch
}
