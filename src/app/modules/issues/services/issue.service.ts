import {Injectable, signal} from '@angular/core';
import {injectQuery} from '@tanstack/angular-query-experimental';
import {getIssueByNumber} from '../actions';
import {
  getIssueCommentsByNumber
} from '../actions/get-issue-comments-by-number.action';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private issueNumber = signal<string | null>(null);

  public issueQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber()],
    queryFn: () => getIssueByNumber( this.issueNumber()! ),
    enabled: this.issueNumber() !== null
  }));

  setIssueNumber(issueNumber: string) {
    this.issueNumber.set(issueNumber);
  }

  public issueCommentsQuery = injectQuery(() => ({
    queryKey: ['issue', this.issueNumber(), "comments"],
    queryFn: () => getIssueCommentsByNumber( this.issueNumber()! ),
    enabled: this.issueNumber() !== null
  }));

}
