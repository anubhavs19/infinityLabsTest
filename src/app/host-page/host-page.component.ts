import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { StorageService } from '../Services/storage-service.service';
import { HostData } from '../models/Host';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-host-page',
  templateUrl: './host-page.component.html',
  styleUrls: ['./host-page.component.css']
})
export class HostPageComponent implements OnInit {

  @Input() isEdit: boolean;
  @Input() index: number;
  @Input() childIndex: number;
  @Output() buttonAction: EventEmitter<any> = new EventEmitter();
  buttonLabel: String = "Add";

  // hostName: String;
  // loopBack: String;
  hostForm: FormGroup;
  // storage:StorageService;
  constructor(public storage: StorageService, public formBuilder: FormBuilder) {
    // this.storage = storage;

  }

  saveHost() {

    if (this.childIndex == undefined) {
      if (this.isEdit) {
        let host = this.storage.getHost(this.index);
        host.setHostName(this.hostForm.value.hostName);
        host.setLoopback(this.hostForm.value.loopBack);
        this.storage.setHost(this.index, host);
        this.buttonAction.emit();
      } else {
        this.storage.addHost(new HostData(this.hostForm.value.hostName, this.hostForm.value.loopBack));
        this.hostForm.reset();
      }
    } else {
      let host = this.storage.getHost(this.index);
      let interfaces = host.interfaces || [];
      console.log(this.childIndex);
      if (this.childIndex>-1) {
        interfaces[this.childIndex] = {interface: this.hostForm.value.hostName, ip:this.hostForm.value.loopBack};
      } else {
        interfaces.push({interface: this.hostForm.value.hostName, ip:this.hostForm.value.loopBack});
      }
      host.interfaces = interfaces;
      console.log(host);
      this.storage.setHost(this.index, host);
      this.hostForm.reset();
      this.buttonAction.emit();
    }
  }

  ngOnChanges() {
    console.log(this.childIndex);
    console.log(this.isEdit);
    console.log(this.index);
    this.initForm();
  }


  initForm() {
    let selectedHostName = this.isEdit ? (this.childIndex!=undefined ? (this.childIndex >-1? this.storage.getHost(this.index).interfaces[this.childIndex].interface :'') : this.storage.getHost(this.index).hostName ): '';
    let selectedloopback = this.isEdit ? this.childIndex!=undefined ? (this.childIndex >-1? this.storage.getHost(this.index).interfaces[this.childIndex].ip:'') : this.storage.getHost(this.index).loopback : '';
    
    this.hostForm = this.formBuilder.group({
      hostName: new FormControl(selectedHostName, [Validators.required, Validators.pattern("^[a-zA-Z0-9 _\-]*$")]),
      loopBack: new FormControl(selectedloopback, [Validators.required, Validators.pattern("^([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])$")])
    });
  }

  ngOnInit() {
    this.buttonLabel = this.isEdit ? "Save" : "Add";

    console.log(this.childIndex);
   
  }

}
