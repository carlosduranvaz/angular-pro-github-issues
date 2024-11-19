import {Component, input} from '@angular/core';
import {GithubIssue} from '../../interfaces';

@Component({
  selector: 'issue-comment',
  standalone: true,
  imports: [],
  templateUrl: './issue-comment.component.html',
})
export class IssueCommentComponent {
  issue = input.required<GithubIssue>();
}
