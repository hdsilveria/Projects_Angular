import { ItemsService } from './../../services/items.service';
import { Component, OnInit } from '@angular/core';
import {Items} from '../../services/model.service'

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  atributoLegal = "qualquer"

  item: any;

  constructor(private getItems: ItemsService) { }

  ngOnInit(): void {
    this.getItemsPage()
  }

  getItemsPage(): void {
    this.getItems.getItems().subscribe(res => {
      this.item = res
    })
  }

  deleteItem(val: any): void{
    if(window.confirm("Deseja deletar?")){
      this.getItems.deleteUser(val).subscribe(res => {
        alert('item ' + res.success + ' Deletado com sucesso!')
        this.getItemsPage()
      })
    }
  }

}
