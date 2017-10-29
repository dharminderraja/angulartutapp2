import { Injectable } from '@angular/core';
import { Settings } from '../models/settings';
import { RemotesettingService } from './remotesetting.service';
import { AuthService} from './auth.service';


@Injectable()
export class SettingsService {
  settings:Settings = {
    allowRegistration: false,
    disableBalanceOnAdd: false,
    disableBalanceOnEdit: false
  }


  constructor(
    private authService:AuthService,
    public remotesetting:RemotesettingService
  ) {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.remotesetting.getSettings().subscribe(settings => {
          this.settings = settings;
        });
      } else {
        if(localStorage.getItem('settings') != null){
          this.settings = JSON.parse(localStorage.getItem('settings'));
        }
      }
    });
    
   }

  getSettings(){
    return this.settings;
  }

  changeSettings(settings:Settings){
    this.remotesetting.updateSettings(settings);
    localStorage.setItem('settings', JSON.stringify(settings));
  }

  updateFromRemote(){
    this.remotesetting.getSettings().subscribe(settings => {
      this.settings = settings;
      localStorage.setItem('settings', JSON.stringify(settings));
    });
  }
}
