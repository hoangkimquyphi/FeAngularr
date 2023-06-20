import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { SubbjectService } from 'src/app/service/subbject.service'; 
@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.css']
})
export class AboutsComponent implements OnInit{
  title ="About pages";
  subjects:any;
  constructor(private subject: SubbjectService, private stdSrv: StudentService ) {


  }
  ngOnInit(): void {
    this.subject.getList().subscribe(res => {
      console.log(res);
      this.subjects = res;

  })
  }

}
