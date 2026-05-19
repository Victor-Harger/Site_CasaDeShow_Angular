import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPedidoComponent } from './listagem.component';

describe('ListagemComponent', () => {
  let component: ListagemPedidoComponent;
  let fixture: ComponentFixture<ListagemPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemPedidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
