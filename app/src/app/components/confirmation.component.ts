// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-confirmation',
  templateUrl: './confirmation.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirmationComponent {
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
      this.sd_Jn1Pp7cB7BzsVPK8(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Jn1Pp7cB7BzsVPK8(bh) {
    try {
      bh = this.sd_Is3XtPezsDeG8gII(bh);
      //appendnew_next_sd_Jn1Pp7cB7BzsVPK8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Jn1Pp7cB7BzsVPK8');
    }
  }

  confirmAction(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_O8X7XezzrdxNwaDm(bh);
      //appendnew_next_confirmAction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JmP54qCMvENeTrhd');
    }
  }

  closeDialog(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_ZyfGFaJ6OOLd54Vh(bh);
      //appendnew_next_closeDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IK8OhSLt6qnk4kjm');
    }
  }

  actionConfirmed(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_e6dFX6ZYKZthl31k(bh);
      //appendnew_next_actionConfirmed
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Tkk53wM8NG90F1Ye');
    }
  }
  //appendnew_flow_confirmationComponent_start

  sd_Is3XtPezsDeG8gII(bh) {
    try {
      this.page.confirmationEmail = undefined;
      this.page.confirmationField = { email: '' };
      this.page.actionConfirmed = false;
      this.page.isDeclingApplication = false;
      bh = this.sd_xuAmsqteH2y0XvWg(bh);
      //appendnew_next_sd_Is3XtPezsDeG8gII
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Is3XtPezsDeG8gII');
    }
  }

  sd_xuAmsqteH2y0XvWg(bh) {
    try {
      bh.dialogData = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_BXbMER2GStQ41VsC(bh);
      //appendnew_next_sd_xuAmsqteH2y0XvWg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xuAmsqteH2y0XvWg');
    }
  }

  sd_BXbMER2GStQ41VsC(bh) {
    try {
      const page = this.page;
      if (bh.dialogData.isDeclingApplication) {
        page.isDeclingApplication = true;
      } else {
        page.confirmationEmail = bh.dialogData.email;
      }
      //appendnew_next_sd_BXbMER2GStQ41VsC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BXbMER2GStQ41VsC');
    }
  }

  sd_O8X7XezzrdxNwaDm(bh) {
    try {
      const page = this.page;
      if (page.isDeclingApplication) {
        // Decline application
        if (page.confirmationField.email.trim()) {
          page.actionConfirmed = page.confirmationField.email;
        } else {
          page.actionConfirmed = false;
        }
      } else {
        // Application to bin
        if (page.confirmationField.email === page.confirmationEmail) {
          page.actionConfirmed = true;
        } else {
          page.actionConfirmed = false;
        }
      }
      //appendnew_next_sd_O8X7XezzrdxNwaDm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_O8X7XezzrdxNwaDm');
    }
  }

  sd_ZyfGFaJ6OOLd54Vh(bh) {
    try {
      const page = this.page;
      page.actionConfirmed = false;
      bh = this.sd_b4gJZwGTMMOVmX71(bh);
      //appendnew_next_sd_ZyfGFaJ6OOLd54Vh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZyfGFaJ6OOLd54Vh');
    }
  }

  sd_b4gJZwGTMMOVmX71(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.actionConfirmed);

      //appendnew_next_sd_b4gJZwGTMMOVmX71
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b4gJZwGTMMOVmX71');
    }
  }

  sd_e6dFX6ZYKZthl31k(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close(this.page.actionConfirmed);

      //appendnew_next_sd_e6dFX6ZYKZthl31k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e6dFX6ZYKZthl31k');
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
  //appendnew_flow_confirmationComponent_Catch
}
