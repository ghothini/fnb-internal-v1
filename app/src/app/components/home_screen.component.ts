// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home_screen',
  templateUrl: './home_screen.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class home_screenComponent {
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
      this.sd_jaKlYPsg7uOB7wfn(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_jaKlYPsg7uOB7wfn(bh) {
    try {
      bh = this.sd_cIOjaip67QY0S8pL(bh);
      //appendnew_next_sd_jaKlYPsg7uOB7wfn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jaKlYPsg7uOB7wfn');
    }
  }

  //appendnew_flow_home_screenComponent_start

  sd_cIOjaip67QY0S8pL(bh) {
    try {
      bh = this.sd_8cJi1YwCRZoxmrVc(bh);
      //appendnew_next_sd_cIOjaip67QY0S8pL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cIOjaip67QY0S8pL');
    }
  }

  sd_8cJi1YwCRZoxmrVc(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      bh = this.sd_wLVxoWxbiEOx382s(bh);
      //appendnew_next_sd_8cJi1YwCRZoxmrVc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8cJi1YwCRZoxmrVc');
    }
  }

  sd_wLVxoWxbiEOx382s(bh) {
    try {
      const page = this.page;
      setTimeout(() => {
        page.router.navigate(['/landing']);
      }, 5000);
      //appendnew_next_sd_wLVxoWxbiEOx382s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wLVxoWxbiEOx382s');
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
  //appendnew_flow_home_screenComponent_Catch
}
