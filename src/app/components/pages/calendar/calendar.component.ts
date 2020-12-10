import {  
  Component, 
  OnInit ,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, 
} from '@angular/core';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';

import { Subject } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

const colors: any = {
  green: {
    primary: '#548F68',
    secondary: '#3E7852',
  },
};

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  locale: string = "pt-BR";

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) {}

  ngOnInit(){
    let dateA = new Date();
    dateA.setHours( dateA.getHours() + 1 );
    let dateB = new Date();
    dateB.setHours( dateB.getHours() + 2 );
    let dateC = new Date();
    dateC.setHours( dateC.getHours() + 3 );
    let dateD = new Date();
    dateD.setHours( dateD.getHours() + 4 );
    this.events.push(
      {
        start: dateA,
        end: dateB,
        title: '12:00 Marcos Zotti',
        color: colors.green,
        actions: this.actions,
        cssClass: 'custom-day-bg',
      },
      {
        start: dateC,
        end: dateD,
        title: '12:00 Marcos Zotti',
        color: colors.green,
        actions: this.actions,
        cssClass: 'custom-day-bg',
      },
    )
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
