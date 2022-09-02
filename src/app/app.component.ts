import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataSource = [];
  displayedColumns = [
    'id',
    'changeDate',
    'key',
    'oldValue',
    'newValue',
    'reasonType',
    'reasonTypeComments',
  ];

  spans = [];
  cacheSpan(array) {
    for (let i = 0; i < array.length; ) {
      const currentValue = array[i].changeDate;
      const count = array.filter(
        (item) => item.changeDate === currentValue
      ).length;
      if (!this.spans[i]) {
        this.spans[i] = {};
      }
      this.spans[i].changeDate = count;
      this.spans[i].reasonType = count;
      i += count;
    }
    console.log(this.spans);
  }

  getRowSpan(col, index) {
    return this.spans[index] && this.spans[index][col];
  }

  ngOnInit(): void {
    const array = originalData.reduce((current, next) => {
      next.fields.forEach((field) => {
        current.push({
          changeDate: next.changeDate,
          fields: field,
          reason: next.reason,
        });
      });
      return current;
    }, []);
    this.cacheSpan(array);
    this.dataSource = array;
  }
}

const originalData = [
  {
    changeDate: '27/07/2022 10:58 AM',
    fields: [
      {
        key: 'name1',
        oldValue: 'value1',
        newValue: 'value2',
      },
      {
        key: 'name2',
        oldValue: 'value2',
        newValue: 'value3',
      },
      {
        key: 'name2',
        oldValue: 'value2',
        newValue: 'value3',
      },
      {
        key: 'name2',
        oldValue: 'value2',
        newValue: 'value3',
      },
    ],
    reason: {
      reasonType: 'tp1',
      reasonTypeComments: 'com1',
    },
  },
  {
    changeDate: '26/07/2022 10:58 AM',
    fields: [
      {
        key: 'name1',
        oldValue: 'value1',
        newValue: 'value2',
      },
      {
        key: 'name2',
        oldValue: 'value2',
        newValue: 'value3',
      },
    ],
    reason: {
      reasonType: 'tp2',
      reasonTypeComments: 'com2',
    },
  },
];
