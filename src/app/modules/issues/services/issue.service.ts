import {Injectable, signal} from '@angular/core';
import {
  injectQuery,
  injectQueryClient
} from '@tanstack/angular-query-experimental';
import {getIssueByNumber} from '../actions';
import {
  getIssueCommentsByNumber
} from '../actions/get-issue-comments-by-number.action';
import {GithubIssue} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private issueNumber = signal<string | null>(null);
  private queryClient = injectQueryClient();

  public issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null
  }));

  public issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), "comments"],
    queryFn: () => getIssueCommentsByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null
  }));

  public prefetchIssue(issueId: string) {
    this.queryClient.prefetchQuery({
      queryKey: ['issue', issueId],
      queryFn: () => getIssueByNumber(issueId),
      staleTime: 1000 * 60 * 5
    });
  }

  public setIssueData(issue: GithubIssue) {
    this.queryClient.setQueryData(['issue', `${issue.number}`], issue, { updatedAt: Date.now() + 1000 * 60 })
  }

  public setIssueNumber(issueId: string) {
    this.issueNumber.set(issueId);
  }

}
