// _neu_generated_code__dont_modify_directly_
//append_imports_start

import * as sd_ojOOkGOzPuNgge52 from 'app/sd-services/auth'; //_splitter_
import * as sd_taxbwnmVnLmX0xn8 from 'app/sd-services/common'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class NeuServiceInvokerService {
  constructor(
    private sd_ojOOkGOzPuNgge52: sd_ojOOkGOzPuNgge52.auth,
    private sd_taxbwnmVnLmX0xn8: sd_taxbwnmVnLmX0xn8.common
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
