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
  selector: 'bh-approved',
  templateUrl: './approved.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class approvedComponent {
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
      this.sd_xwqezHTwsGuL0KGl(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_xwqezHTwsGuL0KGl(bh) {
    try {
      bh = this.sd_lGS5ftHrf8VbNQ2C(bh);
      //appendnew_next_sd_xwqezHTwsGuL0KGl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xwqezHTwsGuL0KGl');
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
      bh = this.sd_jASRSXaAyAbcTyLZ(bh);
      //appendnew_next_refreshAllApplications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f2wp6IzZnm9XWaQ6');
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
      bh = this.sd_iyRRyicTkYEmT9CH(bh);
      //appendnew_next_rereshBinApplications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EPLyog1jb5iU7vLy');
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
      bh = this.sd_Rx7CrOncMhxdPWSy(bh);
      //appendnew_next_determineUnreadNotifications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xiTugemDzXfNB4aO');
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
      bh = this.sd_22FhoQpB1c9ypKVo(bh);
      //appendnew_next_close
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Fk9vbctNZZmFRVL4');
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
      bh = this.sd_uWLpuPMKwkJPijhL(bh);
      //appendnew_next_viewDocuments
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5JXFxuQxctbEa9tP');
    }
  }
  //appendnew_flow_approvedComponent_start

  sd_lGS5ftHrf8VbNQ2C(bh) {
    try {
      bh = this.sd_qCJLjqDp4mVeuXqA(bh);
      //appendnew_next_sd_lGS5ftHrf8VbNQ2C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lGS5ftHrf8VbNQ2C');
    }
  }

  sd_qCJLjqDp4mVeuXqA(bh) {
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
      bh = this.sd_R86kR1CwKPe04Sua(bh);
      //appendnew_next_sd_qCJLjqDp4mVeuXqA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qCJLjqDp4mVeuXqA');
    }
  }

  sd_R86kR1CwKPe04Sua(bh) {
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
      bh = this.sd_TpTyI7FdIj7VbaYO(bh);
      //appendnew_next_sd_R86kR1CwKPe04Sua
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_R86kR1CwKPe04Sua');
    }
  }

  sd_TpTyI7FdIj7VbaYO(bh) {
    try {
      let outputVariables = this.refreshAllApplications();

      //appendnew_next_sd_TpTyI7FdIj7VbaYO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TpTyI7FdIj7VbaYO');
    }
  }

  sd_jASRSXaAyAbcTyLZ(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_JGfmyzNyfokff8pt(bh);
      //appendnew_next_sd_jASRSXaAyAbcTyLZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jASRSXaAyAbcTyLZ');
    }
  }

  sd_JGfmyzNyfokff8pt(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/get-users';
      bh = this.getAllApplications(bh);
      //appendnew_next_sd_JGfmyzNyfokff8pt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JGfmyzNyfokff8pt');
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
      bh = this.sd_ounTU43rUmGDc7rO(bh);
      //appendnew_next_getAllApplications
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jK7i1bJsoAFj0mM5');
    }
  }

  sd_ounTU43rUmGDc7rO(bh) {
    try {
      const page = this.page; // Exclude admin account
      page.result = page.result.filter(
        (account) => account.email !== 'admin@gmail.com'
      );

      bh.newDataSource = page.result.reverse().filter((user: any) => {
        return user.status == 'Approved';
      });

      page.applicationsDatasource = bh.newDataSource;
      page.backupapplicationsDatasource = page.applicationsDatasource;
      page.totalApplications = page.applicationsDatasource.length;
      page.notificationsApplications = page.result.filter(
        (application) => application.status === 'Pending'
      ).length;
      bh = this.sd_dXDHYhiXjTi5sWny(bh);
      //appendnew_next_sd_ounTU43rUmGDc7rO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ounTU43rUmGDc7rO');
    }
  }

  sd_dXDHYhiXjTi5sWny(bh) {
    try {
      let outputVariables = this.rereshBinApplications();

      bh = this.sd_s38AhYYZf0OXMpEc(bh);
      //appendnew_next_sd_dXDHYhiXjTi5sWny
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dXDHYhiXjTi5sWny');
    }
  }

  sd_s38AhYYZf0OXMpEc(bh) {
    try {
      let outputVariables = this.determineUnreadNotifications();

      //appendnew_next_sd_s38AhYYZf0OXMpEc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s38AhYYZf0OXMpEc');
    }
  }

  sd_iyRRyicTkYEmT9CH(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/get-bin';
      bh = this.getAllBinApplications(bh);
      //appendnew_next_sd_iyRRyicTkYEmT9CH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iyRRyicTkYEmT9CH');
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
      bh = this.sd_b5VOtXcYQbYmB2hN(bh);
      //appendnew_next_getAllBinApplications
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_H64edbkInBhWmwNR');
    }
  }

  sd_b5VOtXcYQbYmB2hN(bh) {
    try {
      const page = this.page;
      page.binApplicationsCount = page.result.length;
      bh = this.sd_7WUT7yjztp9Ryt2E(bh);
      //appendnew_next_sd_b5VOtXcYQbYmB2hN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b5VOtXcYQbYmB2hN');
    }
  }

  sd_7WUT7yjztp9Ryt2E(bh) {
    try {
      let outputVariables = this.rereshBinApplications();

      //appendnew_next_sd_7WUT7yjztp9Ryt2E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7WUT7yjztp9Ryt2E');
    }
  }

  sd_Rx7CrOncMhxdPWSy(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_kEc0dwElojnl1rV6(bh);
      //appendnew_next_sd_Rx7CrOncMhxdPWSy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Rx7CrOncMhxdPWSy');
    }
  }

  sd_kEc0dwElojnl1rV6(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/get-notifications';
      bh = this.getAllNotifications(bh);
      //appendnew_next_sd_kEc0dwElojnl1rV6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kEc0dwElojnl1rV6');
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
      bh = this.sd_PMx0Pwq44j67OG8e(bh);
      //appendnew_next_getAllNotifications
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tY7NpT6ErPjN6VN1');
    }
  }

  sd_PMx0Pwq44j67OG8e(bh) {
    try {
      const page = this.page; // Determine all unread
      page.notificationsCount = 0;
      page.result.forEach((notification) => {
        if (!notification.read) {
          page.notificationsCount++;
        }
      });
      //appendnew_next_sd_PMx0Pwq44j67OG8e
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PMx0Pwq44j67OG8e');
    }
  }

  sd_22FhoQpB1c9ypKVo(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(bh.system);

      bh = this.sd_vbg6b3tAXecuczdv(bh);
      //appendnew_next_sd_22FhoQpB1c9ypKVo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_22FhoQpB1c9ypKVo');
    }
  }

  sd_vbg6b3tAXecuczdv(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Approved table closed', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_t0tjYj4G0f6uvbv0(bh);
      //appendnew_next_sd_vbg6b3tAXecuczdv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vbg6b3tAXecuczdv');
    }
  }

  sd_t0tjYj4G0f6uvbv0(bh) {
    try {
      let outputVariables = this.refreshAllApplications();

      bh = this.sd_da8cROatf2G1L8OY(bh);
      //appendnew_next_sd_t0tjYj4G0f6uvbv0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t0tjYj4G0f6uvbv0');
    }
  }

  sd_da8cROatf2G1L8OY(bh) {
    try {
      let outputVariables = this.determineUnreadNotifications();

      //appendnew_next_sd_da8cROatf2G1L8OY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_da8cROatf2G1L8OY');
    }
  }

  sd_uWLpuPMKwkJPijhL(bh) {
    try {
      const documentsDialog = this.__page_injector__.get(MatDialog);
      const documentsDialogRef = documentsDialog.open(documentsComponent, {
        data: bh.input.row,
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uWLpuPMKwkJPijhL');
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
  //appendnew_flow_approvedComponent_Catch
}
