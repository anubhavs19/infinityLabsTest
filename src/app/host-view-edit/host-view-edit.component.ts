import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../Services/storage-service.service';

@Component({
  selector: 'app-host-view-edit',
  templateUrl: './host-view-edit.component.html',
  styleUrls: ['./host-view-edit.component.css']
})
export class HostViewEditComponent implements OnInit {


  @Input() index: number;
  hostData;


  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.hostData = this.storage.getHost(this.index);
  }

}
