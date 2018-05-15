import { Injectable } from '@angular/core';
import { Topic, TOPICS } from './mock-data';

@Injectable()
export class DashboardService {
  
  tItems = TOPICS;

  constructor() { }
  
  getTopics(): any[] {
    return this.tItems;
  }

  getColumns(): string[] {
    return ["id", "topic", "date", "lecturer", "action"]
  };

  updateTopic(topic: Topic) {
    let index = this.tItems.findIndex( (t: Topic) => {
      return t.id === topic.id;
    });
    this.tItems[index] = topic;
  }
  
  deleteTopic(topic: Topic) {
    this.tItems.splice(this.tItems.indexOf(topic), 1);
  }

  addTopic(topic: Topic) {
    this.tItems.push(topic);
  }

/*
  addProduct(product: Product) {
    this.pItems.push(product);
    console.log(this.pItems);
  }
  */
}