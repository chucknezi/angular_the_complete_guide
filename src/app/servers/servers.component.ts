import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created ';
  serverName = 'Test';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']

  constructor() { 
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000)

  }

  ngOnInit() {
  }

  onCreateServer(){
     this.serverCreated = true;
     this.servers.push(this.serverName)
     this.serverCreationStatus = 'Server was created! Name is' + this.serverName;
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  } 


}
