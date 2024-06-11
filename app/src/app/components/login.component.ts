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
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
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
      this.sd_067EIhPzoj00TD8n(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_067EIhPzoj00TD8n(bh) {
    try {
      bh = this.sd_TjkPVEbAriVxUGU8(bh);
      //appendnew_next_sd_067EIhPzoj00TD8n
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_067EIhPzoj00TD8n');
    }
  }

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_PwxrdKb0sVoffo0H(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1yeMLJsBJrcc4YOB');
    }
  }
  //appendnew_flow_loginComponent_start

  sd_TjkPVEbAriVxUGU8(bh) {
    try {
      this.page.loginFormGroup = undefined;
      this.page.showSpinner = false;
      bh = this.sd_TU8awjf02zDKU8bg(bh);
      //appendnew_next_sd_TjkPVEbAriVxUGU8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TjkPVEbAriVxUGU8');
    }
  }

  sd_TU8awjf02zDKU8bg(bh) {
    try {
      bh = this.sd_CUlFVbunbCXqDqNf(bh);
      //appendnew_next_sd_TU8awjf02zDKU8bg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TU8awjf02zDKU8bg');
    }
  }

  sd_CUlFVbunbCXqDqNf(bh) {
    try {
      const page = this.page;
      page.loginFormGroup = new FormGroup({
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/),
        ]),
        password: new FormControl('', Validators.required),
      });
      bh = this.sd_Y6zVDo16uck2PP68(bh);
      //appendnew_next_sd_CUlFVbunbCXqDqNf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CUlFVbunbCXqDqNf');
    }
  }

  sd_Y6zVDo16uck2PP68(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_EfI2MVEk466TDqUC(bh);
      //appendnew_next_sd_Y6zVDo16uck2PP68
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y6zVDo16uck2PP68');
    }
  }

  sd_EfI2MVEk466TDqUC(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/add-admin';
      bh.body = {
        email: 'admin@gmail.com',
        password: '123',
      };
      bh = this.sd_KAXopNbB1Yf1ZfJu(bh);
      //appendnew_next_sd_EfI2MVEk466TDqUC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EfI2MVEk466TDqUC');
    }
  }

  async sd_KAXopNbB1Yf1ZfJu(bh) {
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
      //appendnew_next_sd_KAXopNbB1Yf1ZfJu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KAXopNbB1Yf1ZfJu');
    }
  }

  sd_PwxrdKb0sVoffo0H(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.loginFormGroup.invalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_uV7TrG1ga2apU9My(bh);
      } else if (
        this.sdService.operators['false'](
          this.page.loginFormGroup.invalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_sXae2vqreNGEKqG9(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PwxrdKb0sVoffo0H');
    }
  }

  sd_uV7TrG1ga2apU9My(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('All input fields are required!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_uV7TrG1ga2apU9My
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uV7TrG1ga2apU9My');
    }
  }

  sd_sXae2vqreNGEKqG9(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + '/login';
      page.showSpinner = true;
      bh = this.sd_VlcmZhae8kiUq4TB(bh);
      //appendnew_next_sd_sXae2vqreNGEKqG9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sXae2vqreNGEKqG9');
    }
  }

  async sd_VlcmZhae8kiUq4TB(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.loginFormGroup.value,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_2yA4pVSr3wRZuG29(bh);
      //appendnew_next_sd_VlcmZhae8kiUq4TB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VlcmZhae8kiUq4TB');
    }
  }

  sd_2yA4pVSr3wRZuG29(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_9l3AQWs4nBxeUT5w(bh);
      //appendnew_next_sd_2yA4pVSr3wRZuG29
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2yA4pVSr3wRZuG29');
    }
  }

  sd_9l3AQWs4nBxeUT5w(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.result.emailNotFound,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_xEHgD3DfzwOE0qzl(bh);
      } else if (
        this.sdService.operators['null'](
          this.page.result.emailNotFound,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ADwlOiJAslaM32mM(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9l3AQWs4nBxeUT5w');
    }
  }

  sd_xEHgD3DfzwOE0qzl(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Account does not exist!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_xEHgD3DfzwOE0qzl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xEHgD3DfzwOE0qzl');
    }
  }

  sd_ADwlOiJAslaM32mM(bh) {
    try {
      const page = this.page;
      if (page.result.message) {
        bh.invalidPassword = true;
      } else {
        bh.invalidPassword = false;
      }
      bh = this.sd_JjKay8h1XaKGCsUv(bh);
      //appendnew_next_sd_ADwlOiJAslaM32mM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ADwlOiJAslaM32mM');
    }
  }

  sd_JjKay8h1XaKGCsUv(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.invalidPassword,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_QVHlwl1jc2GXv7CF(bh);
      } else if (
        this.sdService.operators['false'](
          bh.invalidPassword,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.authenticateLoginUsingJwt(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JjKay8h1XaKGCsUv');
    }
  }

  sd_QVHlwl1jc2GXv7CF(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Email and password combination is incorrect!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_QVHlwl1jc2GXv7CF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QVHlwl1jc2GXv7CF');
    }
  }

  async authenticateLoginUsingJwt(bh) {
    try {
      const authInstance: auth = this.__page_injector__.get(auth);

      let outputVariables = await authInstance.processLoginResults(
        this.page.result
      );

      bh = this.sd_MlzINw8msRwsijIQ(bh);
      //appendnew_next_authenticateLoginUsingJwt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z6nSCrNUjFcxLZJ8');
    }
  }

  sd_MlzINw8msRwsijIQ(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      bh = this.sd_yK3GsYxe0N0zq5lv(bh);
      //appendnew_next_sd_MlzINw8msRwsijIQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MlzINw8msRwsijIQ');
    }
  }

  sd_yK3GsYxe0N0zq5lv(bh) {
    try {
      sessionStorage.setItem('currentUser', JSON.stringify(this.page.result));
      bh = this.sd_cfzcqunrH59twmRL(bh);
      //appendnew_next_sd_yK3GsYxe0N0zq5lv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yK3GsYxe0N0zq5lv');
    }
  }

  async sd_cfzcqunrH59twmRL(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/landing');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_S74xH2ANvdGxxW9y(bh);
      //appendnew_next_sd_cfzcqunrH59twmRL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cfzcqunrH59twmRL');
    }
  }

  sd_S74xH2ANvdGxxW9y(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Logged in successfully!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_S74xH2ANvdGxxW9y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_S74xH2ANvdGxxW9y');
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
  //appendnew_flow_loginComponent_Catch
}
