import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DanhmucComponent } from './components/danhmuc/danhmuc.component';
import { HomeComponent } from './components/home/home.component';
import { DonhangComponent } from './components/donhang/donhang.component';
import { AboutComponent } from './components/about/about.component';
import { KhachhangComponent } from './components/khachhang/khachhang.component';
import { LoginComponent } from './components/login/login.component';
import { HinhanhComponent } from './components/hinhanh/hinhanh.component';
import { ThongbaoComponent } from './components/thongbao/thongbao.component';
import { MathangComponent } from './components/mathang/mathang.component';
import { TongketComponent } from './components/tongket/tongket.component';
import { ListComponent } from './components/list/list.component';
import { ThemsuaComponent } from './components/themsua/themsua.component';
import { AboutsComponent } from './components/abouts/abouts.component';
import { HttpClient } from '@angular/common/http';
import { QlspComponent } from './components/qlsp/qlsp.component';
import { SphamComponent } from './components/spham/spham.component';
import { InspComponent } from './components/insp/insp.component';

const routes: Routes = [

{path:'main', component:MainComponent},
{path:'danhmuc', component:DanhmucComponent},
{path:'home', component:HomeComponent},
{path:'donhang',component:DonhangComponent},
{path:'about',component:AboutComponent},
{path:'khachhang',component:KhachhangComponent},
{path:'donhang',component:DonhangComponent},
{path:'login',component:LoginComponent},
{path:'hinhanh',component:HinhanhComponent},
{path:'thongbao',component:ThongbaoComponent},
{path:'mathang',component:MathangComponent},
{path:'tongket',component:TongketComponent},
{path:'list',component:ListComponent},
{path:'themsua',component:ThemsuaComponent},
{path:'abouts', component:AboutsComponent},
{path:'HttpClient',component:HttpClient},
{path:'qlsp', component:QlspComponent},
{path:'spham',component:SphamComponent},
{path:'insp',component:InspComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
