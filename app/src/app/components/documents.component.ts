// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-documents',
  templateUrl: './documents.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class documentsComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_QSUIq8cWbo4kbEZw(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_QSUIq8cWbo4kbEZw(bh) {
    try {
      bh = this.sd_JLnZRKp9vdtYOKhX(bh);
      //appendnew_next_sd_QSUIq8cWbo4kbEZw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QSUIq8cWbo4kbEZw');
    }
  }

  close(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_bgp5jANal3ujnCLc(bh);
      //appendnew_next_close
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8vZHPTw2ogWRsNgO');
    }
  }

  viewDocument(file: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { file };
      bh.local = {};
      bh = this.sd_tHzlBp2QsQe8dM8B(bh);
      //appendnew_next_viewDocument
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8StyUlyJhxXr7GUq');
    }
  }
  //appendnew_flow_documentsComponent_start

  sd_JLnZRKp9vdtYOKhX(bh) {
    try {
      bh = this.sd_eydr5vbtKQNw0zr4(bh);
      //appendnew_next_sd_JLnZRKp9vdtYOKhX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JLnZRKp9vdtYOKhX');
    }
  }

  sd_eydr5vbtKQNw0zr4(bh) {
    try {
      this.page.idDocument = undefined;
      this.page.paySlipDocument = undefined;
      bh = this.sd_zd3wtPpEE4qzWbWF(bh);
      //appendnew_next_sd_eydr5vbtKQNw0zr4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eydr5vbtKQNw0zr4');
    }
  }

  sd_zd3wtPpEE4qzWbWF(bh) {
    try {
      this.page.result = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_z8qo1z1rTcAqivnB(bh);
      //appendnew_next_sd_zd3wtPpEE4qzWbWF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zd3wtPpEE4qzWbWF');
    }
  }

  sd_z8qo1z1rTcAqivnB(bh) {
    try {
      const page = this.page;
      page.idDocument = page.result.idDocument;
      page.paySlipDocument = page.result.paySlipDocument;
      this.sd_Er0v7AchoqEYqvNM(bh);
      //appendnew_next_sd_z8qo1z1rTcAqivnB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z8qo1z1rTcAqivnB');
    }
  }

  sd_Er0v7AchoqEYqvNM(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.idDocument);
      //appendnew_next_sd_Er0v7AchoqEYqvNM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Er0v7AchoqEYqvNM');
    }
  }

  sd_bgp5jANal3ujnCLc(bh) {
    try {
      const _dialogRef = this.__page_injector__.get(MatDialogRef);
      _dialogRef.close('closed');

      //appendnew_next_sd_bgp5jANal3ujnCLc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bgp5jANal3ujnCLc');
    }
  }

  sd_tHzlBp2QsQe8dM8B(bh) {
    try {
      this.page.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_BPzjTy9FApg7wHXv(bh);
      //appendnew_next_sd_tHzlBp2QsQe8dM8B
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tHzlBp2QsQe8dM8B');
    }
  }

  sd_BPzjTy9FApg7wHXv(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdUrl + `/download-file/${bh.input.file}`;
      bh = this.fetchFile(bh);
      //appendnew_next_sd_BPzjTy9FApg7wHXv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BPzjTy9FApg7wHXv');
    }
  }

  async fetchFile(bh) {
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
      this.sd_5M6PniZ7a68EiluA(bh);
      //appendnew_next_fetchFile
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KO6iwAlwjsbqDz7A');
    }
  }

  sd_5M6PniZ7a68EiluA(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.result);
      //appendnew_next_sd_5M6PniZ7a68EiluA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5M6PniZ7a68EiluA');
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
  //appendnew_flow_documentsComponent_Catch
}
