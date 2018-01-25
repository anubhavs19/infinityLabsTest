import { Component, OnInit } from '@angular/core';
import { StorageService } from '../Services/storage-service.service';


declare var jQuery:any;
@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit {

  size: number = 2;
  pageNum: number = 1;
  list;
  selectedIndex: number=-1;
  constructor(private storage: StorageService) {
    this.list = storage.getHostPage(this.pageNum, this.size)/*.subscribe(items=>{
      console.log(items);
  })*/;

    console.log(this.list);
  }

  resetIndex(){
    console.log("Hello");
    this.selectedIndex=-1;
    jQuery("#myModal").modal("hide");
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
