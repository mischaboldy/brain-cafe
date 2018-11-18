import { Injectable } from '@angular/core';
import { Message } from '../interfaces/message.interface';
import { MessageTypes } from '../enums/messages/message-types.enum';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public messages: Array<Message> = [];
  private messageTypes = MessageTypes;

  public sendWarning(messageContent: string) {
    this.createMessage(messageContent, this.messageTypes.Warning);
  }

  public sendError(messageContent: string) {
    this.createMessage(messageContent, this.messageTypes.Error);
  }

  public sendInfo(messageContent: string) {
    this.createMessage(messageContent, this.messageTypes.Info);
  }

  public sendSuccess(messageContent: string) {
    this.createMessage(messageContent, this.messageTypes.Success);
  }

  public removeMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

  private createMessage(messageContent: string, messageType: string) {
    const message: Message = {
      content: messageContent,
      type: messageType
    };

    this.messages.push(message);
  }
}
