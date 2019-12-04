import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ns-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
  moduleId: module.id
})
export class StackComponent implements OnInit {
    programList: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
      this.getProgramList();
  }

  getProgramList() {
    this.httpClient.get('http://192.168.10.139:8084/admissionTestSetUp/getAllEnableProgram')
        .subscribe(
            res => {
                console.log('program :', res);
                this.programList = res;
            },
            msg => {
                console.error(`Error: ${msg.status} ${msg.message}`);
            }
        );
}

}
