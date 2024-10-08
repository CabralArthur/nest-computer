import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number): number {
    console.log('Drawing 100 watts of power from Power Service');

    this.powerService.supplyPower(100);

    return a + b;
  }
}
