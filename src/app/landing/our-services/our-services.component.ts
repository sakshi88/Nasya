import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  majorServiceDetails = [
    {
      imgUrl: 'assets/school.png',
      contractName: 'Medical Contract for Schools:',
      style: {
        'background-color': 'rgba(202, 95, 166, 0.7)'
      },
      category : [
        'Quarterly Contract(Duration 3 months)',
        'Half Yearly Contract(Duration 6 months)',
        'Yearly Contract (Duration 12 months)'
      ],
      servicesList :[
        'Presence of medical nursing officers during school hours',
        'Scheduled visit of Doctors (Physician)',
        'Monthly session of Yoga Instructors',
        'Alternate day visit of Physiotherapists'
      ]
    },
    {
      imgUrl: 'assets/corporate.png',
      contractName: 'Medical Contract for Corporate:',
      style: {
        'background-color': 'rgba(243, 104, 134, 0.7)'
      },
      category : [
        'Quarterly Contract(Duration 3 months)',
        'Half Yearly Contract(Duration 6 months)',
        'Yearly Contract (Duration 12 months)'
      ],
      servicesList :[
        'Presence of medical nursing officers during office hours(including working shifts)',
        'Scheduled visit of Doctors (Physician)',
        'Monthly session of Yoga Instructors',
        'Visits of Physiotherapists, Gynaecologist, ENT experts, Dentist**',
        'Medical Sessions as part of Employee Awareness Program**'
      ]
    }
  ]

  minorServiceDetails = [{
    imgUrl: 'assets/nursing.png',
    contractName: 'Nursing Services at your Door Step:',
    style: {
      'background-color': 'rgba(250, 130, 130, 0.7)'
    },
    detail: 'We are providing Nursing Services at your home. To avail this service, just give us a call or mail us on:',
    contact: '9810675626',
    email: 'nasyahealthcare@gmail.com'
  },
  {
    imgUrl: 'assets/emergency.png',
    contractName: 'Emergency Services:',
    style: {
      'background-color': 'rgba(255, 175, 101, 0.7)'
    },
    detail: 'We are providing medical services in emergency cases. We are having our team of experienced doctors and nurses, who will assist you with care in case of emergency.',
    emergencyDetail: 'For emergency services, contact us on:',
    contact: '9810675626',
    email: 'nasyahealthcare@gmail.com'
  }
  ]
}
