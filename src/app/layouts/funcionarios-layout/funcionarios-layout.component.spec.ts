import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosLayoutComponent } from './funcionarios-layout.component';

describe('FuncionariosLayoutComponent', () => {
  let component: FuncionariosLayoutComponent;
  let fixture: ComponentFixture<FuncionariosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionariosLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionariosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
