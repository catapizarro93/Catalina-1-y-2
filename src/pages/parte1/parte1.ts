import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Parte1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parte1',
  templateUrl: 'parte1.html',
})
export class Parte1Page {
public a = 1;
public b = 7;
public c = 3;
public d = 4;
public e = 2;


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    var max_cinco = [this.a, this.b, this.c, this.d, this.e];
    max_cinco.sort(function(a, b) {
      return b - a;

                    });
    console.log(max_cinco);
    console.log(max_cinco[0],max_cinco[1],max_cinco[2]);

    var cuadratica = [this.a,this.b,this.c];
    var discriminante = (this.b*this.b-(4*this.a*this.c));
    if(discriminante<0){
        console.log("El discrimintante es menor que 0, por lo tanto no tiene solución");
    } 
    else{ var x1=(-this.b-Math.sqrt(discriminante))/(2*this.a);
          var x2=(-this.b+Math.sqrt(discriminante))/(2*this.a);
        
          console.log("El resultado es" ,x1.toFixed(3),x2.toFixed(3));

    }


  }
}