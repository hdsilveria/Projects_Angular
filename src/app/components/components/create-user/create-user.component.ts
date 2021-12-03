import { ItemsService } from './../../../services/items.service';
import { RequestCreate, ResponseCreate, RequestUpdate } from './../../../services/model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    complete: 0
  }

  response: ResponseCreate = {
    id: 0,
    created_at: '',
    updated_at: '',
    name: '',
    complete: 0,
  }

  resposta: any

  requestUpdate: any

  constructor(private ItemsService: ItemsService) { }

  ngOnInit(): void {
  }

  createNewItem(){
    this.ItemsService.createUser(this.request).subscribe(res => {
      this.resposta = res
      this.request.name = '',
      this.request.complete = 0
      this.ItemsService.getItems()
    })
  }

  updateItem(): void {
    this.ItemsService.editUser(this.requestUpdate.id, this.requestUpdate).subscribe(res => {
      alert('item ' + res + ' Alterado com sucesso!')
    })
  }

}
