import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage-service.service';


declare var jQuery: any;
@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit {

  size: number = 2;
  pageNum: number = 1;
  list;
  selectedIndex: number = -1;
  selectedChildIndex: number = -1;
  constructor(public storage: StorageService) {
    this.list = storage.getHostPage(this.pageNum, this.size)/*.subscribe(items=>{
      console.log(items);
  })*/;

    console.log(this.list);
  }

  resetChildIndex() {
    this.selectedChildIndex = -1;
  }
  resetIndex() {
    console.log("Hello");
    this.selectedIndex = -1;
    jQuery("#myModal").modal("hide");
  }

  deleteChildItem(index) {
    let currentHost = this.storage.getHost(this.selectedIndex);
    currentHost.interfaces.splice(index, 1);
    this.storage.setHost(this.selectedIndex, currentHost);
  }

  deleteItem(index) {
    this.storage.deleteHost(index);
    let maxPage = this.storage.getMaxPage(this.size);
    if (this.pageNum > maxPage) {
      this.pageNum = maxPage;
    }
  }

  ngOnInit() {
  }

}
