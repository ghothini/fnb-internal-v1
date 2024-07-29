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
import { common } from 'app/sd-services/common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-OTP',
  templateUrl: './OTP.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class OTPComponent {
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
      this.sd_quHLvlWZfFvNdzfu(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_quHLvlWZfFvNdzfu(bh) {
    try {
      bh = this.sd_RN5JWwPlrOAgK2Ng(bh);
      //appendnew_next_sd_quHLvlWZfFvNdzfu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_quHLvlWZfFvNdzfu');
    }
  }

  submit(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_KdAzCHwtQZbvh8pa(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J5y7P2mtH2gy3OKO');
    }
  }
  //appendnew_flow_OTPComponent_start

  sd_RN5JWwPlrOAgK2Ng(bh) {
    try {
      this.page.showSpinner = false;
      bh = this.sd_c8SYRbibVHSmE0dW(bh);
      //appendnew_next_sd_RN5JWwPlrOAgK2Ng
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RN5JWwPlrOAgK2Ng');
    }
  }

  sd_c8SYRbibVHSmE0dW(bh) {
    try {
      bh = this.sd_Z4L9T439uVOSyY9M(bh);
      //appendnew_next_sd_c8SYRbibVHSmE0dW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c8SYRbibVHSmE0dW');
    }
  }

  async sd_Z4L9T439uVOSyY9M(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.getVariable();
      bh.result = outputVariables.local.data;

      bh = this.sd_a3KGKKYtSYvjXyv9(bh);
      //appendnew_next_sd_Z4L9T439uVOSyY9M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z4L9T439uVOSyY9M');
    }
  }

  sd_a3KGKKYtSYvjXyv9(bh) {
    try {
      const page = this.page;
      page.otpForm = new FormGroup({
        otp: new FormControl('', [Validators.required]),
      });
      //appendnew_next_sd_a3KGKKYtSYvjXyv9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a3KGKKYtSYvjXyv9');
    }
  }

  async sd_KdAzCHwtQZbvh8pa(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.otpForm.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_5GhiiQomFkl7hn6V(bh);
      } else {
        bh = await this.sd_AfqdzF3f8fUMkVjY(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KdAzCHwtQZbvh8pa');
    }
  }

  sd_5GhiiQomFkl7hn6V(bh) {
    try {
      const page = this.page;
      page.showSpinner = true;
      bh = this.sd_ze8PoxDv8DNiw45p(bh);
      //appendnew_next_sd_5GhiiQomFkl7hn6V
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5GhiiQomFkl7hn6V');
    }
  }

  sd_ze8PoxDv8DNiw45p(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_YlDvWl1HnjZ7TTNW(bh);
      //appendnew_next_sd_ze8PoxDv8DNiw45p
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ze8PoxDv8DNiw45p');
    }
  }

  sd_YlDvWl1HnjZ7TTNW(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + '/get-users';
      bh = this.sd_qKa0nFfmah9auusX(bh);
      //appendnew_next_sd_YlDvWl1HnjZ7TTNW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YlDvWl1HnjZ7TTNW');
    }
  }

  async sd_qKa0nFfmah9auusX(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.otpForm.value,
      };
      this.page.resultOTP = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_s9WS9JMQM9Ze9aDv(bh);
      //appendnew_next_sd_qKa0nFfmah9auusX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qKa0nFfmah9auusX');
    }
  }

  async sd_s9WS9JMQM9Ze9aDv(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.getVariable();
      bh.result = outputVariables.local.data;

      bh = this.sd_kSZxwrYYZKi3TKmy(bh);
      //appendnew_next_sd_s9WS9JMQM9Ze9aDv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s9WS9JMQM9Ze9aDv');
    }
  }

  sd_kSZxwrYYZKi3TKmy(bh) {
    try {
      const page = this.page;
      bh.found = page.resultOTP.filter((user: any) => {
        return bh.result[0].email == user.email;
      });
      bh.foundUser = bh.found[0];
      bh = this.sd_xIvGD4xg1IuTQEBV(bh);
      //appendnew_next_sd_kSZxwrYYZKi3TKmy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kSZxwrYYZKi3TKmy');
    }
  }

  async sd_xIvGD4xg1IuTQEBV(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.foundUser.OTP,
          this.page.otpForm.controls['otp'].value,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_qAYDDpkkA68uczrY(bh);
      } else {
        bh = await this.sd_CxDaK6XPaaNyqOKg(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xIvGD4xg1IuTQEBV');
    }
  }

  sd_qAYDDpkkA68uczrY(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_faXGHburPcnthRol(bh);
      //appendnew_next_sd_qAYDDpkkA68uczrY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qAYDDpkkA68uczrY');
    }
  }

  async sd_faXGHburPcnthRol(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/reset_password');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_faXGHburPcnthRol
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_faXGHburPcnthRol');
    }
  }

  sd_CxDaK6XPaaNyqOKg(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Invalid OTP', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      bh = this.sd_0dlxJZS9Brb3KW0p(bh);
      //appendnew_next_sd_CxDaK6XPaaNyqOKg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CxDaK6XPaaNyqOKg');
    }
  }

  sd_0dlxJZS9Brb3KW0p(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      //appendnew_next_sd_0dlxJZS9Brb3KW0p
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0dlxJZS9Brb3KW0p');
    }
  }

  sd_AfqdzF3f8fUMkVjY(bh) {
    try {
      this.__page_injector__.get(MatSnackBar).open('Please fill in OTP', 'OK', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_AfqdzF3f8fUMkVjY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AfqdzF3f8fUMkVjY');
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
  //appendnew_flow_OTPComponent_Catch
}
