import { Injectable } from '@angular/core';
import { HostData } from '../models/Host';

import {  Subject, Observable } from 'rxjs/Rx';
import 'rxjs';  


const HOST_DATA = "hostData";

@Injectable()
export class StorageService {
  storedHost: Array<HostData> = [];
  constructor() { 
    this.storedHost = JSON.parse(localStorage.getItem(HOST_DATA))|| [];
  }

  addHost(data: HostData) {
    this.storedHost.push(data);
    localStorage.setItem(HOST_DATA, JSON.stringify(this.storedHost));
    console.log(this.storedHost)
  }

  setHost(index, data) {
    this.storedHost[index] = data;
    localStorage.setItem(HOST_DATA, JSON.stringify(this.storedHost));
  }

  deleteHost(index){
    this.storedHost.splice(index, 1);
    localStorage.setItem(HOST_DATA, JSON.stringify(this.storedHost));
  }

  getHost(index){
    return this.storedHost[index];
  }

  getHostPage(pageNum, size){
    let startIndex = (pageNum-1)*size;
    let data=[];
    console.log(this.storedHost)
    // return Observable.from(this.storedHost).map(res=>{console.log(res);data.push(res); return data;});
    return this.storedHost.slice(startIndex, startIndex+size);
  }

  getMaxPage(size){
    return Math.ceil(this.storedHost.length/size);
  }

  getPages(pageNum, size){
    console.log(Array(Math.ceil(this.storedHost.length/size)).fill(1).map((x,i)=>i+1));
    return Array((Math.ceil(this.storedHost.length/size))).fill(1).map((x,i)=>i+1);
  }

}
