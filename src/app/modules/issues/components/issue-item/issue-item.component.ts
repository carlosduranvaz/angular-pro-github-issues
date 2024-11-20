import {Component, inject, input} from '@angular/core';
import {GithubIssue, State} from '../../interfaces';
import {RouterLink} from '@angular/router';
import {NgStyle} from '@angular/common';
import {IssueService} from '../../services/issue.service';

@Component({
  selector: 'issue-item',
  standalone: true,
  imports: [
    RouterLink,
    NgStyle
  ],
  templateUrl: './issue-item.component.html',
})
export class IssueItemComponent {
  issue = input.required<GithubIssue>();
  private issueService = inject(IssueService);

  get isOpen() {
    return this.issue().state === State.Open;
  }

  prefetchData() {
    //this.issueService.prefetchIssue(`${this.issue().number}`);
    this.issueService.setIssueData(this.issue());
  }
}
