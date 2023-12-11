import { Component, OnInit } from '@angular/core';
import { Room } from "../room";
import { RoomService } from "../room.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public rooms: Room[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.getRooms();
  }

  public getRooms(): void {
    this.roomService.getRooms().subscribe(
      (response: Room[]) => {
        this.rooms = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public bookRoom(room: Room): void {
    room.availability = false;
    this.roomService.updateRoom(room).subscribe(
      (updatedRoom: Room) => {
        console.log(`Room ${updatedRoom.roomNumber} booked!`);
        this.rooms = this.rooms.filter(r => r.roomNumber !== updatedRoom.roomNumber);
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
  }
}
