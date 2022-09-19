import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user.model';
 
@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() recipe: User | undefined;
  @Input() index: number | undefined;

  ngOnInit(): void {
  }

}
