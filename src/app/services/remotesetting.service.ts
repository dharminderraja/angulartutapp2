import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs';
import { Settings } from '../models/settings';

@Injectable()
export class RemotesettingService {
  setting: FirebaseObjectObservable<any>;

  constructor(
    public angularFire:AngularFireDatabase
  ) { 
    this.setting = this.angularFire.object('/settings') as FirebaseObjectObservable<Settings>;
  }

  getSettings(){
    return this.setting;
  }

  updateSettings(settings:Settings){
    return this.setting.update(settings);
  }

}
