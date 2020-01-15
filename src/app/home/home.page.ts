import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private tts: TextToSpeech) { }


  riproduci() {
    this.tts.speak('Hello World')
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
  }
}
