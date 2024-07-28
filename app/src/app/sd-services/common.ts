// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class common {
  public data: any;

  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_common

  async goBack(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_06KrLBLjKoDDinkp(bh);
      //appendnew_next_goBack
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z5fkQddnj59gYtGb');
    }
  }

  async setVariable(data: any = undefined, ...others) {
    let bh: any = {
      input: {
        data,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_wqYJlenU6aOtUo9l(bh);
      //appendnew_next_setVariable
      return (
        // formatting output variables
        {
          input: {
            data: bh.input.data,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ddUWlM1FFwamtgaQ');
    }
  }

  async getVariable(...others) {
    let bh: any = {
      input: {},
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_hMtyHgMJgLgUannO(bh);
      //appendnew_next_getVariable
      return (
        // formatting output variables
        {
          input: {},
          local: {
            data: bh.local.data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7la9rmA713xPkODo');
    }
  }
  //appendnew_flow_common_start

  async sd_06KrLBLjKoDDinkp(bh) {
    try {
      bh.location = this.__service_injector__.get(Location);
      bh = await this.sd_tAtwyOVd09bFBu4f(bh);
      //appendnew_next_sd_06KrLBLjKoDDinkp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_06KrLBLjKoDDinkp');
    }
  }

  async sd_tAtwyOVd09bFBu4f(bh) {
    try {
      bh.location.back();
      //appendnew_next_sd_tAtwyOVd09bFBu4f
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tAtwyOVd09bFBu4f');
    }
  }

  async sd_wqYJlenU6aOtUo9l(bh) {
    try {
      this.data = bh.input.data;
      //appendnew_next_sd_wqYJlenU6aOtUo9l
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wqYJlenU6aOtUo9l');
    }
  }

  async sd_hMtyHgMJgLgUannO(bh) {
    try {
      bh.local.data = this.data;
      //appendnew_next_sd_hMtyHgMJgLgUannO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hMtyHgMJgLgUannO');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_common_Catch
}
