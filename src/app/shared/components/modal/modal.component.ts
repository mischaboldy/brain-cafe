import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: 'modal.component.html',
  selector: 'app-modal'
})
export class ModalComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public size: String = 'lg';

  @Input()
  public noPadding: boolean = false;

  @Input()
  public options: NgbModalOptions = {
    ariaLabelledBy: 'modal-basic-title',
    backdrop: 'static',
    keyboard: false,
  };

  @ViewChild('modal')
  private modal: NgbModal;

  constructor(private _modalService: NgbModal) {
  }

  public ngOnInit() {
    this.options.windowClass ='modal-size-' + this.size;
  }

  public open() {
    this._modalService.open(this.modal, this.options);
  }

  public close() {
    this._modalService.dismissAll();
  }
}
