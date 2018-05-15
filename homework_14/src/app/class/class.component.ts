import { Component, OnInit, Input } from '@angular/core';
import { Topic } from './../mock-data';
import { DashboardService } from './../dashboard.service';

@Component({
  selector: '[app-class]',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})

export class ClassComponent implements OnInit {
  editedTopic: any = {};
  topicForm: boolean = false;
  editTopicForm: boolean = false;

  @Input() topic: any;
  @Input() columns: string[];

  constructor(private dService: DashboardService) {}

  ngOnInit() {}

  showEditTopicForm(topic: Topic) {
    console.log("Edit topic: ", topic)
    if(!topic) {
      this.topicForm = false;
      return;
    }
    this.editTopicForm = true;
    this.editedTopic = Object.assign({}, topic);
  }
  
  updateTopic() {
    this.dService.updateTopic(this.editedTopic);
    this.editTopicForm = false;
    this.editedTopic = {};
  }

  removeTopic(topic: Topic) {
    this.dService.deleteTopic(topic);
  } 
  
  cancelEdits() {
    this.editedTopic = {};
    this.editTopicForm = false;
  }
}