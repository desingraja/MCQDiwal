import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import {Router} from '@angular/router';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-admincontent',
  templateUrl: './admincontent.component.html',
  styleUrls: ['./admincontent.component.css']
})
export class AdmincontentComponent implements OnInit {

  constructor(private tcs:ServiceService,private router:Router) { }

open(){
}
submitt(e,f){
document.getElementById('loginid').style.display='none';
  if((e=='tezos')&&(f=='&#MNW123'))
  {
    this.tcs.style();

  }
  else if((e!='')&&(f!='')){
        this.router.navigate(['/arul'])
  }
  else{
    alert("plz fill valid details only")
  }

}

// array:any=[]
// value:any=[]
// _name
// _mail
// _id



// fun() {
//   this.tcs.getuserdetail().subscribe(res => {

//     this.array = res;
//     console.log(this.array);

//     for (let i = 0; i < this.array.length; i++) {
//       this._name = this.array[i].name;
//       this._id = this.array[i].empid;
//       this._mail = this.array[i].mail;

//       if ((this._name != null && this._name != undefined) && (this._id != null && this._id!=undefined
//          ) && (this._mail != null && this._mail != undefined)) {


//       console.log(this._id)

//         // this.value.push(this._name);
//         // this.value.push(this._id);
//         // this.value.push(this._mail)

//         var detail={
//           name:this._name,
//           empid:this._id,
//           mail:this._mail
          
//          }
         
//          this.value.push(detail);
//         //  console.log(this.value)



//       }

//     }


//   })

// }
  ngOnInit() {
    this.fun()
   
  }

}
