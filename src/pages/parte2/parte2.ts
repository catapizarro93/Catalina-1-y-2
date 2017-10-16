import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Parte2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parte2',
  templateUrl: 'parte2.html',
})
export class Parte2Page {
  alertCtrl: any;
  public nombre: String = "Comegalletas";
  public resistencia: number = 500;
  public descuento: number;
  public resistencianueva: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  

  ionViewDidLoad() {}

  

  clickNombre(){}

}