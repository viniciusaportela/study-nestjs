import { Controller } from "@nestjs/common";
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MailerController {
  @EventPattern('send_welcoming_email')
  async handleSendWelcomingEmail() {
    console.log('Email sent!')
  }
}