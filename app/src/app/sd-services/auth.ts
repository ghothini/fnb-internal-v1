// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

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
export class auth {
  public tokenSubject: any;
  public refreshInProgress: any;

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

  //   service flows_auth

  async processLoginResults(loginResults: any = undefined, ...others) {
    let bh: any = {
      input: {
        loginResults,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_9pIEKdAkvVPKstpC(bh);
      //appendnew_next_processLoginResults
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_G33L0zNhU8SAOH44');
    }
  }

  async storeTokens(tokens: any = undefined, ...others) {
    let bh: any = {
      input: {
        tokens,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_xs16UjSTEXTy36wv(bh);
      //appendnew_next_storeTokens
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rKBePt8tMDml9hDI');
    }
  }

  async clearTokens(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_Hg7zQUzGXPC0hs8g(bh);
      bh = await this.sd_nmHwIN3R6VB8Qywl(bh);
      //appendnew_next_clearTokens
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QBTwkjHJHetSzLJZ');
    }
  }

  async getAccessToken(accessToken: any = undefined, ...others) {
    let bh: any = {
      input: {
        accessToken,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_KmmKQUUnQNDE4Eif(bh);
      //appendnew_next_getAccessToken
      return (
        // formatting output variables
        {
          input: {
            accessToken: bh.input.accessToken,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nk18gGVhtmfCGVvK');
    }
  }

  async getRefreshToken(refreshToken: any = undefined, ...others) {
    let bh: any = {
      input: {
        refreshToken,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_A9yxlT7aoo8qBdMP(bh);
      //appendnew_next_getRefreshToken
      return (
        // formatting output variables
        {
          input: {
            refreshToken: bh.input.refreshToken,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sgRTUBgfRRD04wyt');
    }
  }

  async logout(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_fT9Pg2P0uidxRHc4(bh);
      //appendnew_next_logout
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_djlNlJjpC2fmIXGB');
    }
  }
  //appendnew_flow_auth_start

  async sd_9pIEKdAkvVPKstpC(bh) {
    try {
      bh = await this.sd_0LyLXwETx3Qm87jX(bh);
      //appendnew_next_sd_9pIEKdAkvVPKstpC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9pIEKdAkvVPKstpC');
    }
  }

  async sd_0LyLXwETx3Qm87jX(bh) {
    try {
      this.tokenSubject = bh.input;
      this.refreshInProgress = false;
      //appendnew_next_sd_0LyLXwETx3Qm87jX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0LyLXwETx3Qm87jX');
    }
  }

  async sd_xs16UjSTEXTy36wv(bh) {
    try {
      bh.input.tokenSubject.next(bh.input.tokens.accessToken);
      console.log('bh.tokenSubject', bh.input.tokenSubject);
      bh = await this.sd_50maDWicmOXPr1NR(bh);
      //appendnew_next_sd_xs16UjSTEXTy36wv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xs16UjSTEXTy36wv');
    }
  }

  async sd_50maDWicmOXPr1NR(bh) {
    try {
      localStorage.setItem(
        'refreshToken',
        JSON.stringify(bh.input.tokens.accessToken)
      );
      bh = await this.sd_CCJgVh4Lb2rC3Foe(bh);
      //appendnew_next_sd_50maDWicmOXPr1NR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_50maDWicmOXPr1NR');
    }
  }

  async sd_CCJgVh4Lb2rC3Foe(bh) {
    try {
      localStorage.setItem(
        'accessToken',
        JSON.stringify(bh.input.tokens.accessToken)
      );
      //appendnew_next_sd_CCJgVh4Lb2rC3Foe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CCJgVh4Lb2rC3Foe');
    }
  }

  async sd_Hg7zQUzGXPC0hs8g(bh) {
    try {
      localStorage.removeItem('accessToken');
      //appendnew_next_sd_Hg7zQUzGXPC0hs8g
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Hg7zQUzGXPC0hs8g');
    }
  }

  async sd_nmHwIN3R6VB8Qywl(bh) {
    try {
      localStorage.removeItem('refreshToken');
      //appendnew_next_sd_nmHwIN3R6VB8Qywl
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nmHwIN3R6VB8Qywl');
    }
  }

  async sd_KmmKQUUnQNDE4Eif(bh) {
    try {
      bh.input.accessToken = JSON.parse(localStorage.getItem('accessToken'));
      //appendnew_next_sd_KmmKQUUnQNDE4Eif
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KmmKQUUnQNDE4Eif');
    }
  }

  async sd_A9yxlT7aoo8qBdMP(bh) {
    try {
      bh.input.refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
      //appendnew_next_sd_A9yxlT7aoo8qBdMP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_A9yxlT7aoo8qBdMP');
    }
  }

  async sd_fT9Pg2P0uidxRHc4(bh) {
    try {
      let outputVariables = await this.clearTokens();

      //appendnew_next_sd_fT9Pg2P0uidxRHc4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fT9Pg2P0uidxRHc4');
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
  //appendnew_flow_auth_Catch
}
