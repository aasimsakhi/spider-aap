import { Component } from "@angular/core";
import { NbSidebarService } from "@nebular/theme";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "striver-app";
  menu: any[] = [
    {
      title: "Home",
      icon: "home-outline",
      link: "/home",
      home: true,
      children: undefined,
    },
    {
      title: "Users",
      icon: "people-outline",
      link: "/users",
      home: false,
      children: undefined,
    },
    {
      title: "Post",
      icon: "keypad-outline",
      link: "/posts",
      home: false,
      children: undefined,
    },
    {
      title: "Asim sakhi",
      icon: "people-outline",
      link: "/sports",
      home: false,
      children: undefined,
    },
    {
      title: "todo",
      icon: "bell-outline",
      link: "/todo",
      home: false,
      children: undefined,
    },
    {
      title: "players",
      icon: "heart",
      link: "/players",
      home: false,
      children: undefined,
    },
  ];
  constructor(private sidebarService: NbSidebarService) {}

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
