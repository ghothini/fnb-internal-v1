// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup, Validators } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-email_verification',
  templateUrl: './email_verification.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class email_verificationComponent {
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
      this.sd_rHt5lnX5d9AlwXpr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_rHt5lnX5d9AlwXpr(bh) {
    try {
      bh = this.sd_5OHZQGEf4Z32Rdne(bh);
      //appendnew_next_sd_rHt5lnX5d9AlwXpr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rHt5lnX5d9AlwXpr');
    }
  }

  submitEmail(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_bKRz7pWdYtoGwkPu(bh);
      //appendnew_next_submitEmail
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KpLAjvUN6EiML3gZ');
    }
  }
  //appendnew_flow_email_verificationComponent_start

  sd_5OHZQGEf4Z32Rdne(bh) {
    try {
      this.page.showSpinner = false;
      bh = this.sd_qe9nrNFxo1lKheBU(bh);
      //appendnew_next_sd_5OHZQGEf4Z32Rdne
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5OHZQGEf4Z32Rdne');
    }
  }

  sd_qe9nrNFxo1lKheBU(bh) {
    try {
      bh = this.sd_EDCIjVXT2fHf7emi(bh);
      //appendnew_next_sd_qe9nrNFxo1lKheBU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qe9nrNFxo1lKheBU');
    }
  }

  sd_EDCIjVXT2fHf7emi(bh) {
    try {
      const page = this.page;
      page.emailFormGroup = new FormGroup({
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/),
        ]),
      });
      //appendnew_next_sd_EDCIjVXT2fHf7emi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EDCIjVXT2fHf7emi');
    }
  }

  async sd_bKRz7pWdYtoGwkPu(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.input.form.invalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_vyy4BOkFGknLtfnw(bh);
      } else {
        bh = await this.sd_1pUa0oomgyBJNYR8(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bKRz7pWdYtoGwkPu');
    }
  }

  sd_vyy4BOkFGknLtfnw(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please fill in your email', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_vyy4BOkFGknLtfnw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vyy4BOkFGknLtfnw');
    }
  }

  sd_1pUa0oomgyBJNYR8(bh) {
    try {
      const page = this.page;
      page.showSpinner = true;
      bh = this.sd_ZJkQ03iOysZf3qv0(bh);
      //appendnew_next_sd_1pUa0oomgyBJNYR8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1pUa0oomgyBJNYR8');
    }
  }

  sd_ZJkQ03iOysZf3qv0(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_SfSVTtBqnOKoepaQ(bh);
      //appendnew_next_sd_ZJkQ03iOysZf3qv0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZJkQ03iOysZf3qv0');
    }
  }

  sd_SfSVTtBqnOKoepaQ(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + '/verification';
      bh = this.sd_J1klgcPg8ZZ3f1X9(bh);
      //appendnew_next_sd_SfSVTtBqnOKoepaQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SfSVTtBqnOKoepaQ');
    }
  }

  async sd_J1klgcPg8ZZ3f1X9(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.emailFormGroup.value,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_qtAlwOYGlkubwDrk(bh);
      //appendnew_next_sd_J1klgcPg8ZZ3f1X9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J1klgcPg8ZZ3f1X9');
    }
  }

  sd_qtAlwOYGlkubwDrk(bh) {
    try {
      const page = this.page;
      console.log(page.result);
      //appendnew_next_sd_qtAlwOYGlkubwDrk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qtAlwOYGlkubwDrk');
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
  //appendnew_flow_email_verificationComponent_Catch
}
