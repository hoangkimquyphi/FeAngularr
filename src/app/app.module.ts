import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ThemsuaComponent } from './components/themsua/themsua.component';
import { AboutsComponent } from './components/abouts/abouts.component';
import { QlspComponent } from './components/qlsp/qlsp.component';
import { SphamComponent } from './components/spham/spham.component';
import { InspComponent } from './components/insp/insp.component';
import { QlphantrangComponent } from './components/qlphantrang/qlphantrang.component';
import { AddProductComponent } from './add-product/add-product.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DanhmucComponent,
    HomeComponent,
    DonhangComponent,
    AboutComponent,
    KhachhangComponent,
    LoginComponent,
    HinhanhComponent,
    ThongbaoComponent,
    MathangComponent,
    TongketComponent,
    ListComponent,
    ProductCategoryComponent,
    ThemsuaComponent,
    AboutsComponent,
    QlspComponent,
    SphamComponent,
    InspComponent,
    QlphantrangComponent,
    AddProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
