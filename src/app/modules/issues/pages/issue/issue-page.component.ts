import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map, tap} from 'rxjs';
import {IssueService} from '../../services/issue.service';
import {
  IssueCommentComponent
} from '../../components/issue-comment/issue-comment.component';
import {
  getIssueCommentsByNumber
} from '../../actions/get-issue-comments-by-number.action';

@Component({
  selector: 'app-issue-page',
  standalone: true,
  imports: [
    RouterLink,
    IssueCommentComponent
  ],
  templateUrl: './issue-page.component.html'
})
export default class IssuePageComponent {
  private route = inject(ActivatedRoute);
  private issueService = inject(IssueService);
  public issueQuery = this.issueService.issueQuery;
  public issueCommentsQuery = this.issueService.issueCommentsQuery;

  issueNumber = toSignal<string | undefined>(
    this.route.paramMap.pipe(
      map( params => params.get('number') ?? ''),
      tap( (number) => this.issueService.setIssueNumber(number) )
    )
  );

  protected readonly getIssueCommentsByNumber = getIssueCommentsByNumber;
}
