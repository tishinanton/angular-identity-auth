import { UiKitModule } from './ui-kit.module';

describe('UiKitModule', () => {
  let uiKitModule: UiKitModule;

  beforeEach(() => {
    uiKitModule = new UiKitModule();
  });

  it('should create an instance', () => {
    expect(uiKitModule).toBeTruthy();
  });
});
