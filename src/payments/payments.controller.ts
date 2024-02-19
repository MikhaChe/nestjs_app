import { Controller, Get, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('payments')
export class PaymentsController {
  constructor(private paymentService: PaymentsService) {}

  
  @Get()
  getData(): {} {
    return this.paymentService.getDataSpreadsheet(2);
  }
}
