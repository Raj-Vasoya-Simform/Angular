import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidator } from '../customValidators/math-validator';
import { delay, filter, scan } from 'rxjs';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css'],
})
export class EquationComponent implements OnInit {
  secondsPerSolution = 0;

  mathForm = new FormGroup(
    {
      a: new FormControl(this.randomNumber()),
      b: new FormControl(this.randomNumber()),
      answer: new FormControl(''),
    },
    [MathValidator.addition('answer', 'a', 'b')]
  );

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit(): void {

    this.mathForm.statusChanges
      .pipe(
        delay(200),
        filter((value) => value === 'VALID'),
        scan(
          (acc, value) => {
            return {
              numberSolved: acc.numberSolved + 1,
              startTime: acc.startTime,
            };
          },
          { numberSolved: 0, startTime: new Date() }
        )
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSolution =
          (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: '',
        });
      });
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
