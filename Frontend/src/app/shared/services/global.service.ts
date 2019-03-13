import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
/* models */
import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model';

@Injectable()
export class GlobalService {
    private sidebarToggleSource = new Subject<boolean>();

  private tabsMenuSource = new Subject<TabMenuModel>();
  tabsMenu$ = this.tabsMenuSource.asObservable();

  private tabsOrderSource = new Subject<Array<any>>();
  tabsOrder$ = this.tabsOrderSource.asObservable();


  private notificationSource = new Subject<NotificationModel>();
  notification$ = this.notificationSource.asObservable();


  private isActivedSource = new Subject<any>();
  isActived$ = this.isActivedSource.asObservable();


  private dataSource = new Subject<DataSourceClass>();

  data$ = this.dataSource.asObservable();
    sidebarToggle$ = this.sidebarToggleSource.asObservable();


  _tabsMenu(tabsMenu: TabMenuModel) {
    this.tabsMenuSource.next(tabsMenu);
  }

  _tabsOrder(tabsOrder: Array<any>) {
    this.tabsOrderSource.next(tabsOrder);
  }

  _notification(notification: NotificationModel) {
    this.notificationSource.next(notification);
  }

  _isActived(isActived) {
    this.isActivedSource.next(isActived);
  }
  _sidebarToggleState(sidebarToggle: boolean) {
    this.sidebarToggleSource.next(sidebarToggle);
  }
    public dataBusChanged(ev, value) {
        this.dataSource.next({
            ev: ev,
            value: value
        });
    }
}


export class DataSourceClass {
    ev: string;
    value: any;
}
