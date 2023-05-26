import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  modalOpen = false;

  items = [
    {
      title: 'Why is the sky blue?',
      content: 'The sky is blue beacuse it is.....',
    },
    {
      title: 'What does an orange taste like?',
      content: 'An orange is bitter and sweet in taste.',
    },
    {
      title: 'What color is that cat?',
      content: 'The cat is an black and white color.',
    },
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
