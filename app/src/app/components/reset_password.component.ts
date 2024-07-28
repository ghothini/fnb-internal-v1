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
  selector: 'bh-reset_password',
  templateUrl: './reset_password.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class reset_passwordComponent {
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
      this.sd_1JiUpyHJA3Z5aCxM(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1JiUpyHJA3Z5aCxM(bh) {
    try {
      bh = this.sd_wDrALPSvJKa4Numg(bh);
      //appendnew_next_sd_1JiUpyHJA3Z5aCxM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1JiUpyHJA3Z5aCxM');
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
      bh = this.sd_13PXKzAUpcvfDT3y(bh);
      //appendnew_next_submitEmail
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gchMGEM4IAlcp0lo');
    }
  }
  //appendnew_flow_reset_passwordComponent_start

  sd_wDrALPSvJKa4Numg(bh) {
    try {
      this.page.showSpinner = false;
      bh = this.sd_dl9L2FSp887AOlYY(bh);
      //appendnew_next_sd_wDrALPSvJKa4Numg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wDrALPSvJKa4Numg');
    }
  }

  sd_dl9L2FSp887AOlYY(bh) {
    try {
      bh = this.sd_lfn2kKUEs82rCBFn(bh);
      //appendnew_next_sd_dl9L2FSp887AOlYY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dl9L2FSp887AOlYY');
    }
  }

  sd_lfn2kKUEs82rCBFn(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('admin'));
      bh = this.sd_X0jjGMdhOBvBByBp(bh);
      //appendnew_next_sd_lfn2kKUEs82rCBFn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lfn2kKUEs82rCBFn');
    }
  }

  async sd_X0jjGMdhOBvBByBp(bh) {
    try {
      const commonInstance: common = this.__page_injector__.get(common);

      let outputVariables = await commonInstance.getVariable();
      bh.result = outputVariables.local.data;

      bh = this.sd_5G8j7UJA7FaAVEgO(bh);
      //appendnew_next_sd_X0jjGMdhOBvBByBp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X0jjGMdhOBvBByBp');
    }
  }

  sd_5G8j7UJA7FaAVEgO(bh) {
    try {
      const page = this.page;
      page.passwordFormGroup = new FormGroup({
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
        email: new FormControl(bh.result[0].email),
      });
      //appendnew_next_sd_5G8j7UJA7FaAVEgO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5G8j7UJA7FaAVEgO');
    }
  }

  sd_13PXKzAUpcvfDT3y(bh) {
    try {
      const page = this.page;
      page.showSpinner = true;

      console.log('first script ==>', page.passwordFormGroup.value);
      bh = this.sd_CoDm9SlVxY7t1dZD(bh);
      //appendnew_next_sd_13PXKzAUpcvfDT3y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_13PXKzAUpcvfDT3y');
    }
  }

  async sd_CoDm9SlVxY7t1dZD(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.passwordFormGroup.invalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_jotkOcDDqF8CGWqw(bh);
      } else {
        bh = await this.sd_E6MI687XciUekktn(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CoDm9SlVxY7t1dZD');
    }
  }

  sd_jotkOcDDqF8CGWqw(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please fill in all fields', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_aF3WT1QExhXEvpkQ(bh);
      //appendnew_next_sd_jotkOcDDqF8CGWqw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jotkOcDDqF8CGWqw');
    }
  }

  sd_aF3WT1QExhXEvpkQ(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      //appendnew_next_sd_aF3WT1QExhXEvpkQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aF3WT1QExhXEvpkQ');
    }
  }

  async sd_E6MI687XciUekktn(bh) {
    try {
      if (
        this.sdService.operators['se'](
          this.page.passwordFormGroup.controls['password'].value,
          this.page.passwordFormGroup.controls['confirmPassword'].value,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_gwvoqeZQi70KHRH8(bh);
      } else {
        bh = await this.sd_dWqmfi671RF9Pp95(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_E6MI687XciUekktn');
    }
  }

  sd_gwvoqeZQi70KHRH8(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_tcwnBWoe9fGcuh1H(bh);
      //appendnew_next_sd_gwvoqeZQi70KHRH8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gwvoqeZQi70KHRH8');
    }
  }

  sd_tcwnBWoe9fGcuh1H(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + '/reset-password';

      bh.body = page.passwordFormGroup;
      delete bh.body.value.confirmPassword;
      bh.newAdmin = bh.body.value;

      bh = this.sd_HdUsIlq9pNpLGwEI(bh);
      //appendnew_next_sd_tcwnBWoe9fGcuh1H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tcwnBWoe9fGcuh1H');
    }
  }

  async sd_HdUsIlq9pNpLGwEI(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'put',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.passwordFormGroup.value,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_9n3g0GjyeAHca6Bb(bh);
      //appendnew_next_sd_HdUsIlq9pNpLGwEI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HdUsIlq9pNpLGwEI');
    }
  }

  sd_9n3g0GjyeAHca6Bb(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;

      bh = this.sd_DZp9QHGhYXF8ps92(bh);
      //appendnew_next_sd_9n3g0GjyeAHca6Bb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9n3g0GjyeAHca6Bb');
    }
  }

  async sd_DZp9QHGhYXF8ps92(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/login');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_REAnTJdSG88AbOAw(bh);
      //appendnew_next_sd_DZp9QHGhYXF8ps92
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DZp9QHGhYXF8ps92');
    }
  }

  sd_REAnTJdSG88AbOAw(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Password changed successfully', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_REAnTJdSG88AbOAw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_REAnTJdSG88AbOAw');
    }
  }

  sd_dWqmfi671RF9Pp95(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open("passwords don't match", 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_3b1FaGRDByJYhiLO(bh);
      //appendnew_next_sd_dWqmfi671RF9Pp95
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dWqmfi671RF9Pp95');
    }
  }

  sd_3b1FaGRDByJYhiLO(bh) {
    try {
      const page = this.page;
      page.showSpinner = false;
      //appendnew_next_sd_3b1FaGRDByJYhiLO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3b1FaGRDByJYhiLO');
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
  //appendnew_flow_reset_passwordComponent_Catch
}
