import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public productData : any = [];
  public selectedProduct : any = [];
  public selectedProdIndex : number | null = null;
  ngOnInit(): void {
    this.productData = [
      {
        "prodName": "OnePlus Nord Buds 2",
        "price": 1099.99,
        "rating": 4.5,
        "imgLink": "https://m.media-amazon.com/images/I/61-ZYvldY+L._AC_UY327_FMwebp_QL65_.jpg",
        "description": "OnePlus Nord Buds 2 TWS in Ear Earbuds with Mic,Upto 25dB ANC 12.4mm Dynamic Titanium Drivers, Playback:Upto 36hr case, 4-Mic Design, IP55 Rating, Fast Charging [Thunder Gray]"
      },
      {
        "prodName": "boAt Airdopes 141",
        "price": 999.99,
        "rating": 4.3,
        "imgLink": "https://m.media-amazon.com/images/I/619gHpSiOXL._SY450_.jpg",
        "description": "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Cyan Cider)"
      },
      {
        "prodName": "Noise Buds VS104",
        "price": 799.99,
        "rating": 4.7,
        "imgLink": "https://m.media-amazon.com/images/I/51+e7yrgPpL._SY355_.jpg",
        "description": "Noise Buds VS104 Truly Wireless Earbuds with 45H of Playtime, Quad Mic with ENC, Instacharge(10 min=200 min), 13mm Driver,Low Latency, BT v5.2 (Mint Green)"
      },
      {
        "prodName": "OnePlus Buds Z2",
        "price": 899.99,
        "rating": 4.6,
        "imgLink": "https://m.media-amazon.com/images/I/51YiSywGQtL._AC_UY327_FMwebp_QL65_.jpg",
        "description": "OnePlus Buds Z2 Bluetooth Truly Wireless in Ear Earbuds with mic, Active Noise Cancellation, 10 Minutes Flash Charge & Upto 38 Hours Battery [Matte Black]"
      },
      {
        "prodName": "boAt Airdopes 121",
        "price": 749.99,
        "rating": 4.4,
        "imgLink": "https://m.media-amazon.com/images/I/61piyvBPXEL._SY355_.jpg",
        "description": "boAt Airdopes 121 V2 Plus TWS Earbuds with 50 HRS Playtime,Quad Mics w/ENx™ Tech,ASAP™ Charging, Beast™ Mode(50ms Low Latency),BTv5.3 & IPX4(Slate Grey)"
      },
      {
        "prodName": "Sony WF-1000XM4",
        "price": 279.99,
        "rating": 4.8,
        "imgLink": "https://th.bing.com/th?q=Sony+WF+1000XM4+Noise+Cancelling&w=138&h=138&c=7&o=5&dpr=1.3&pid=1.7&mkt=en-IN&cc=IN&setlang=en&adlt=moderate",
        "description": "Sony WF-1000XM4 Industry Leading Noise Canceling Truly Wireless Earbuds with Alexa Voice Control, 24-bit Audio Signal Processing, 8 Hours of Battery and Built-in Mic for Phone Calls (Black)"
      },
      {
        "prodName": "Jabra Elite 75t",
        "price": 149.99,
        "rating": 4.6,
        "imgLink": "https://th.bing.com/th/id/OIP.7o74WVqATHGxzK4oJ7I7CQHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "description": "Jabra Elite 75t Earbuds – True Wireless Earbuds with Charging Case, Titanium Black – Active Noise Cancelling Bluetooth Earbuds with a Comfortable, Secure Fit, Long Battery Life, Great Sound"
      },
      {
        "prodName": "Samsung Galaxy Buds Pro",
        "price": 199.99,
        "rating": 4.7,
        "imgLink": "https://th.bing.com/th?id=OIP.QfBER6OGMatTZw_2ePuSCAAAAA&w=100&h=100&c=1&vt=10&bgcl=593c8b&r=0&o=6&pid=5.1",
        "description": "Samsung Galaxy Buds Pro, True Wireless Earbuds w/Active Noise Cancelling (Wireless Charging Case Included), Phantom Black"
      },
      {
        "prodName": "Anker Soundcore Liberty Air 2 Pro",
        "price": 129.99,
        "rating": 4.5,
        "imgLink": "https://m.media-amazon.com/images/I/6140FvsvMzL._AC_UY327_FMwebp_QL65_.jpg",
        "description": "Anker Soundcore Liberty Air 2 Pro True Wireless Earbuds, Targeted Active Noise Cancelling, PureNote Technology, 6 Mics for Calls, 26H Playtime, HearID Personalized EQ, Bluetooth 5, Wireless Charging"
      },
      {
        "prodName": "Sennheiser Momentum True Wireless 2",
        "price": 299.99,
        "rating": 4.9,
        "imgLink": "https://m.media-amazon.com/images/I/61FWJyKS9aL._AC_UY327_FMwebp_QL65_.jpg",
        "description": "Sennheiser Momentum True Wireless 2 - Bluetooth in-Ear Buds with Active Noise Cancellation, Smart Pause, Customizable Touch Control and 28-Hour Battery Life - Black (M3IETW2 Black)"
      }

    ]
    
  }
  public showProduct(index : number) : void{
      this.selectedProdIndex = index
  }
   public showDetails(product : string) : any{
    console.log("count")
    console.log(product);
    return
   }

}
