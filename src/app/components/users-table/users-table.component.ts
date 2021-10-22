import { UsersService } from '../../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Address } from '../../models/address.model';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styles: [' tr { cursor: pointer; } ']
})

export class UsersTableComponent implements OnInit {
  users!: User[];
  listOfNameFilter: any[] = [];
  listOfUsernameFilter: any[] = [];
  listOfEmailFilter: any[] = [];
  listOfPhoneFilter: any[] = [];
  listOfWebsiteFilter: any[] = [];
  listOfColumns: any[] = [
    {
      name: 'Name',
      sortOrder: 'ascend',
      sortFn: (a: User, b: User) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend'],
      filterMultiple: true,
      listOfFilter: this.listOfNameFilter,
      filterFn: (list: string[], item: User) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Username',
      sortOrder: null,
      sortFn: (a: User, b: User) => a.username.localeCompare(b.username),
      sortDirections: ['ascend', 'descend'],
      filterMultiple: true,
      listOfFilter: this.listOfUsernameFilter,
      filterFn: (list: string[], item: User) => list.some(name => item.username.indexOf(name) !== -1),
    },
    {
      name: 'Email',
      sortOrder: null,
      sortFn: (a: User, b: User) => a.email.localeCompare(b.email),
      sortDirections: ['ascend', 'descend'],
      filterMultiple: true,
      listOfFilter: this.listOfEmailFilter,
      filterFn: (list: string[], item: User) => list.some(name => item.email.indexOf(name) !== -1),
    },
    {
      name: 'Phone',
      sortOrder: null,
      sortFn: (a: User, b: User) => a.phone.localeCompare(b.phone),
      sortDirections: ['ascend', 'descend'],
      filterMultiple: true,
      listOfFilter: this.listOfPhoneFilter,
      filterFn: (list: string[], item: User) => list.some(name => item.phone.indexOf(name) !== -1),
    },
    {
      name: 'Website',
      sortOrder: null,
      sortDirections: ['ascend', 'descend'],
      sortFn: (a: User, b: User) => a.website.localeCompare(b.website),
      filterMultiple: true,
      listOfFilter: this.listOfWebsiteFilter,
      filterFn: (list: string[], item: User) => list.some(name => item.website.indexOf(name) !== -1),
    },
    {
      name: 'Action',
    },
  ];
  isVisible = false;
  selectedAddress!: Address;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      (res) => {
        this.users = res;
        this.users.forEach(
          (user) => {
            this.listOfNameFilter.push({ text: user.name, value: user.name });
            this.listOfUsernameFilter.push({ text: user.username, value: user.username });
            this.listOfEmailFilter.push({ text: user.email, value: user.email });
            this.listOfPhoneFilter.push({ text: user.phone, value: user.phone });
            this.listOfWebsiteFilter.push({ text: user.website, value: user.website });
          }
        )
      }
    )
  }

  showModal(address: Address): void {
    this.isVisible = true;
    this.selectedAddress = address;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}
