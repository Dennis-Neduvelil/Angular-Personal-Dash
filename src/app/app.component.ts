import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  bg:string='https://source.unsplash.com/random/1920x1080'

  loadingImage:boolean=false

  title = 'personalDash';

  date: Date = new Date();  

  async changeBG(){
    this.loadingImage=true
    const res=await fetch('https://source.unsplash.com/random/1920x1080',{
      method:'HEAD'
    })

    if (res.url===this.bg){
       this.changeBG()
    }
    this.loadingImage=false
    this.bg=res.url
  }
  ngOnInit(): void {
      timer(0,1000).subscribe(()=>{
        this.date=new Date();
      })
  }
}
