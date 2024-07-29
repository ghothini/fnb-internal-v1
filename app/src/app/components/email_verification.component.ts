// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormControl, FormGroup, Validators } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { auth } from 'app/sd-services/auth'; //_splitter_
import { common } from 'app/sd-services/common'; //_splitter_
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

  submitEmail(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_dtYk2lMuH9w9LARI(bh);
      //appendnew_next_submitEmail
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KpLAjvUN6EiML3gZ');
    }
  }
  //appendnew_flow_email_verificationComponent_start

  sd_5OHZQGEf4Z32Rdne(bh) {
    try {
      this.page.showSpinner = false;
      bh = this.sd_a0vC0Zrzab6zGvNs(bh);
      //appendnew_next_sd_5OHZQGEf4Z32Rdne
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5OHZQGEf4Z32Rdne');
    }
  }

  sd_a0vC0Zrzab6zGvNs(bh) {
    try {
      bh = this.sd_EDCIjVXT2fHf7emi(bh);
      //appendnew_next_sd_a0vC0Zrzab6zGvNs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a0vC0Zrzab6zGvNs');
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

  sd_dtYk2lMuH9w9LARI(bh) {
    try {
      const page = this.page;
      sessionStorage.clear();
      bh = this.sd_bKRz7pWdYtoGwkPu(bh);
      //appendnew_next_sd_dtYk2lMuH9w9LARI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dtYk2lMuH9w9LARI');
    }
  }

  async sd_bKRz7pWdYtoGwkPu(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.emailFormGroup.invalid,
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
      bh.url = page.ssdURL + '/get-users';
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
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_YEpKwdNwPrsO2iJF(bh);
      //appendnew_next_sd_J1klgcPg8ZZ3f1X9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J1klgcPg8ZZ3f1X9');
    }
  }

  sd_YEpKwdNwPrsO2iJF(bh) {
    try {
      const page = this.page;
      bh.admin = page.result.filter((user: any) => {
        return page.emailFormGroup.controls['email'].value == user.email;
      });
      bh = this.sd_h47Jvhq4eG70MMF4(bh);
      //appendnew_next_sd_YEpKwdNwPrsO2iJF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YEpKwdNwPrsO2iJF');
    }
  }

  async sd_h47Jvhq4eG70MMF4(bh) {
    try {
      if (
        this.sdService.operators['nempty'](
          bh.admin,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_xtwpqkIb8LlhAtSP(bh);
      } else {
        bh = await this.sd_Rq12yjClVJlNc5e1(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_h47Jvhq4eG70MMF4');
    }
  }

  async sd_xtwpqkIb8LlhAtSP(bh) {
    try {
      const authInstance: auth = this.__page_injector__.get(auth);

      let outputVariables = await authInstance.generateRandomNumber(
        this.page.emailFormGroup.email
      );
      bh.result = outputVariables.local.random;

      bh = this.sd_9W2naYgDjrVpyfbp(bh);
      //appendnew_next_sd_xtwpqkIb8LlhAtSP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xtwpqkIb8LlhAtSP');
    }
  }

  sd_9W2naYgDjrVpyfbp(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + '/forgot-password';

      bh.body = {
        otp: bh.result,
        email: bh.admin[0].email,
      };
      bh = this.sd_FCWbu5aIJXF3Qeyr(bh);
      //appendnew_next_sd_9W2naYgDjrVpyfbp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9W2naYgDjrVpyfbp');
    }
  }

  async sd_FCWbu5aIJXF3Qeyr(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_diNCSOWFKooReRgq(bh);
      //appendnew_next_sd_FCWbu5aIJXF3Qeyr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FCWbu5aIJXF3Qeyr');
    }
  }

  sd_diNCSOWFKooReRgq(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_nZhLih6Y46jDbpPU(bh);
      //appendnew_next_sd_diNCSOWFKooReRgq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_diNCSOWFKooReRgq');
    }
  }

  async sd_nZhLih6Y46jDbpPU(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/OTP');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      bh = this.sd_hizoZ86s31Ddxj8W(bh);
      //appendnew_next_sd_nZhLih6Y46jDbpPU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nZhLih6Y46jDbpPU');
    }
  }

  async sd_hizoZ86s31Ddxj8W(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.setVariable(bh.admin);
      bh.result = outputVariables.input.data;

      //appendnew_next_sd_hizoZ86s31Ddxj8W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hizoZ86s31Ddxj8W');
    }
  }

  sd_Rq12yjClVJlNc5e1(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Invalid admin email', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_MMaeBPmnESpRH7CC(bh);
      //appendnew_next_sd_Rq12yjClVJlNc5e1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Rq12yjClVJlNc5e1');
    }
  }

  sd_MMaeBPmnESpRH7CC(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      //appendnew_next_sd_MMaeBPmnESpRH7CC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MMaeBPmnESpRH7CC');
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
