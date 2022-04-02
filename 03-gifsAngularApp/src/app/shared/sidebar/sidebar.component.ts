import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get history() {
    const history = this.gifsService.history;

    return history;
  }

  search(item: string) {
    this.gifsService.searchGifs(item);
  }
}
