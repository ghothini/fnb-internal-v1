// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-notifications',
  templateUrl: './notifications.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class notificationsComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_4l6fOqwRtHCzgit6(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_4l6fOqwRtHCzgit6(bh) {
    try {
      bh = this.sd_mrqtlfcbEUzJW47B(bh);
      //appendnew_next_sd_4l6fOqwRtHCzgit6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4l6fOqwRtHCzgit6');
    }
  }

  refreshAllNotifications(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ubXpRE7VgabiSx5I(bh);
      //appendnew_next_refreshAllNotifications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_afQVAQK5AuZqi7aU');
    }
  }

  markNotificationRead(notification: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { notification };
      bh.local = {};
      bh = this.sd_cpugb9R5lEUFqxUt(bh);
      //appendnew_next_markNotificationRead
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RY58uZUbPhk6r221');
    }
  }

  deleteNotifications(notification: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { notification };
      bh.local = {};
      bh = this.sd_uyeczCzwvvdQuYOB(bh);
      //appendnew_next_deleteNotifications
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ijk3yA7Md5JK240p');
    }
  }

  goBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_8K0mU72hjxBrOfSl(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2Zlsuux8HLqSQate');
    }
  }

  markAllNotificationsRead(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_qGYVwd5JRpTACS2m(bh);
      //appendnew_next_markAllNotificationsRead
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ho5WV7Cib5vyYBPx');
    }
  }
  //appendnew_flow_notificationsComponent_start

  sd_mrqtlfcbEUzJW47B(bh) {
    try {
      this.page.notifications = [];
      this.page.allApplications = [];
      this.page.notificationsCount = 0;
      this.page.ssdUrl = undefined;
      bh = this.sd_cpWxHmt8xXvgdOfC(bh);
      //appendnew_next_sd_mrqtlfcbEUzJW47B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mrqtlfcbEUzJW47B');
    }
  }

  sd_cpWxHmt8xXvgdOfC(bh) {
    try {
      let outputVariables = this.refreshAllNotifications();

      //appendnew_next_sd_cpWxHmt8xXvgdOfC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cpWxHmt8xXvgdOfC');
    }
  }

  sd_ubXpRE7VgabiSx5I(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_pWRUgmVIWDiRMsuw(bh);
      //appendnew_next_sd_ubXpRE7VgabiSx5I
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ubXpRE7VgabiSx5I');
    }
  }

  sd_pWRUgmVIWDiRMsuw(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/get-notifications';

      console.log(document.cookie);
      bh = this.getAllNotifications(bh);
      //appendnew_next_sd_pWRUgmVIWDiRMsuw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pWRUgmVIWDiRMsuw');
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
      bh = this.sd_ibqwTHjU2iIDvISC(bh);
      //appendnew_next_getAllNotifications
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wVp1JFILHwMuaYVB');
    }
  }

  sd_ibqwTHjU2iIDvISC(bh) {
    try {
      const page = this.page;
      page.notifications = page.result.reverse();
      // Determine all unread
      page.notificationsCount = 0;
      page.notifications.forEach((notification) => {
        if (!notification.read) {
          page.notificationsCount++;
        }
      });
      //appendnew_next_sd_ibqwTHjU2iIDvISC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ibqwTHjU2iIDvISC');
    }
  }

  sd_cpugb9R5lEUFqxUt(bh) {
    try {
      const page = this.page;
      if (bh.input.notification.read) return;
      bh.url = page.ssdUrl + '/update-notification';
      bh.input.notification.read = true;
      page.notificationsCount--;
      bh = this.updateSelectedNotifcation(bh);
      //appendnew_next_sd_cpugb9R5lEUFqxUt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cpugb9R5lEUFqxUt');
    }
  }

  async updateSelectedNotifcation(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.notification,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_DFXKI2xhMMXJdvVv(bh);
      //appendnew_next_updateSelectedNotifcation
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HO4TyjUbwjHX7p4H');
    }
  }

  sd_DFXKI2xhMMXJdvVv(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Notification marked as read!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_DFXKI2xhMMXJdvVv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DFXKI2xhMMXJdvVv');
    }
  }

  sd_uyeczCzwvvdQuYOB(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_DFnblX3C4ICznG2C(bh);
      //appendnew_next_sd_uyeczCzwvvdQuYOB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uyeczCzwvvdQuYOB');
    }
  }

  sd_DFnblX3C4ICznG2C(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/delete-notification';
      // Sync count
      if (!bh.input.notification.read) {
        page.notificationsCount--;
      }
      bh = this.deleteSelectedNotification(bh);
      //appendnew_next_sd_DFnblX3C4ICznG2C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DFnblX3C4ICznG2C');
    }
  }

  async deleteSelectedNotification(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'delete',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.input.notification,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_ZfUVARRRPnkq7sea(bh);
      //appendnew_next_deleteSelectedNotification
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eqAGXcdZu9Ah7og6');
    }
  }

  sd_ZfUVARRRPnkq7sea(bh) {
    try {
      let outputVariables = this.refreshAllNotifications();

      bh = this.sd_QEDZpjqmnkgHfeGq(bh);
      //appendnew_next_sd_ZfUVARRRPnkq7sea
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZfUVARRRPnkq7sea');
    }
  }

  sd_QEDZpjqmnkgHfeGq(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Notification deleted successfully!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_QEDZpjqmnkgHfeGq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QEDZpjqmnkgHfeGq');
    }
  }

  async sd_8K0mU72hjxBrOfSl(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.goBack();

      //appendnew_next_sd_8K0mU72hjxBrOfSl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8K0mU72hjxBrOfSl');
    }
  }

  sd_qGYVwd5JRpTACS2m(bh) {
    try {
      const page = this.page;
      page.notifications.forEach((notification) => {
        notification.read = true;
      });
      page.notificationsCount = 0;
      //appendnew_next_sd_qGYVwd5JRpTACS2m
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qGYVwd5JRpTACS2m');
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
  //appendnew_flow_notificationsComponent_Catch
}
