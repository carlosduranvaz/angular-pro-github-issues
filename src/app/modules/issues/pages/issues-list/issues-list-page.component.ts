import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {IssuesService} from '../../services/issues.service';
import {
  LabelsSelectorComponent
} from '../../components/labels-selector/labels-selector.component';

@Component({
  selector: 'app-issues-list-page',
  standalone: true,
  imports: [
    RouterLink,
    LabelsSelectorComponent
  ],
  templateUrl: './issues-list-page.component.html'
})
export default class IssuesListPageComponent {
  public issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }
}
