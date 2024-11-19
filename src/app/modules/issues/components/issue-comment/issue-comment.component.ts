import {Component, input} from '@angular/core';
import {GithubIssue} from '../../interfaces';
import {MarkdownModule} from 'ngx-markdown';

@Component({
  selector: 'issue-comment',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './issue-comment.component.html',
})
export class IssueCommentComponent {
  issue = input.required<GithubIssue>();
}
