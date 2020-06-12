import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonHarness} from '@angular/material/button/testing';
import { SocialLoginModule, AuthServiceConfig, AuthService } from 'angularx-social-login';
import { provideConfig } from './app.module';
import { HttpClientModule } from '@angular/common/http';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';


let loader: HarnessLoader;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        {
          provide: AuthServiceConfig,
          useFactory: provideConfig
        },
        AuthService
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Material'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Material');
  });
  it('buttons should work', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness); // length: 3
    const firstButton = await loader.getHarness(MatButtonHarness); // === buttons[0]
  });

  it('should mark confirmed when ok button clicked', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const login = await loader.getHarness(MatButtonHarness.with({text: 'Sign In With Google'}));
    //expect(fixture.componentInstance.loggedIn).toBe(false);
    //expect(await login.isDisabled()).toBe(false);
    await login.click();
    //expect(fixture.componentInstance.loggedIn).toBe(true);
  });


  it('should work', async () => {
    //const footerLoader = await loader.getChildLoader('.podalanga');
    const cancel = await loader.getHarness(MatButtonHarness.with({text: 'Sign In With Google'}));
    //const footerButton = await footerLoader.getHarness(MatButtonHarness);
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('Material app is running!');
  // });
});
