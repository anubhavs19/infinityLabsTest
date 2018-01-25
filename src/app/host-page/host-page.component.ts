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
  @Output() buttonAction: EventEmitter<any> = new EventEmitter();
  buttonLabel: String = "Add";

  // hostName: String;
  // loopBack: String;
  hostForm: FormGroup;
  // storage:StorageService;
  constructor(private storage: StorageService, private formBuilder: FormBuilder) {
    // this.storage = storage;
    
  }

  saveHost() {
    if (this.isEdit) {
      this.storage.setHost(this.index, new HostData(this.hostForm.value.hostName, this.hostForm.value.loopBack));
      this.buttonAction.emit();
    } else {
      this.storage.addHost(new HostData(this.hostForm.value.hostName, this.hostForm.value.loopBack));
      this.hostForm.reset();
    }
  }

  ngOnInit() {
    this.buttonLabel = this.isEdit ? "Save" : "Add";

    console.log(this.index);
    console.log(this.isEdit);
    console.log( this.storage.getHost(this.index));
    this.hostForm = this.formBuilder.group({
    hostName: new FormControl(this.isEdit? this.storage.getHost(this.index).hostName:'', [Validators.required, Validators.pattern("^[a-zA-Z0-9 _\-]*$")]),
    loopBack: new FormControl(this.isEdit? this.storage.getHost(this.index).loopback:'', [Validators.required, Validators.pattern("^([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])$")])
  });
  }

}
