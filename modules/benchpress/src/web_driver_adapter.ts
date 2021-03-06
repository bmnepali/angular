import {bind, provide, Provider} from '@angular/core/src/di';
import {BaseException, WrappedException} from '@angular/facade';
import {Map} from '@angular/facade';

/**
 * A WebDriverAdapter bridges API differences between different WebDriver clients,
 * e.g. JS vs Dart Async vs Dart Sync webdriver.
 * Needs one implementation for every supported WebDriver client.
 */
export abstract class WebDriverAdapter {
  static bindTo(delegateToken): Provider[] {
    return [bind(WebDriverAdapter).toFactory((delegate) => delegate, [delegateToken])];
  }

  waitFor(callback: Function): Promise<any> { throw new BaseException('NYI'); }
  executeScript(script: string): Promise<any> { throw new BaseException('NYI'); }
  executeAsyncScript(script: string): Promise<any> { throw new BaseException('NYI'); }
  capabilities(): Promise<Map<string, any>> { throw new BaseException('NYI'); }
  logs(type: string): Promise<any[]> { throw new BaseException('NYI'); }
}
