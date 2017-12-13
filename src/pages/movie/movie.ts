import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {MoviesProvider} from "../../providers/movies/movies";

/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public moviesProvider: MoviesProvider) {

  }

  ionViewDidEnter() {
    console.log(this.moviesProvider.hotMovies);
  }

}
