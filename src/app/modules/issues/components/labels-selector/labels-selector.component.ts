import {Component, input} from '@angular/core';
import {GithubLabel} from '../../interfaces';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'issues-labels-selector',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './labels-selector.component.html',
})
export class LabelsSelectorComponent {
  public labels = input.required<GithubLabel[]>();
}
