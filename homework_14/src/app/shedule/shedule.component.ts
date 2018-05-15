import { DashboardService } from './../dashboard.service';
import { Topic } from './../mock-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css'],
})

export class SheduleComponent {
  topics: any[]; //Observable<Topic[]>; // any = [];
  columns: string[];

  topicForm: boolean = false;
  isNewForm: boolean;
  newTopic: any = {};

  constructor(private dService: DashboardService) {}

  ngOnInit(): any {
    this.columns = this.dService.getColumns(); 
    this.topics = this.dService.getTopics();
  }

  saveTopic(topic: Topic) {
    if(this.isNewForm) {
      this.dService.addTopic(topic);
    }
    this.topicForm = false;
  }

  showAddTopicForm() {
    if(this.topics.length) {
      this.newTopic = {};
    }
    this.topicForm = true;
    this.isNewForm = true;
  }

  cancelNewTopic() {
    this.newTopic = {};
    this.topicForm = false;
  }
}