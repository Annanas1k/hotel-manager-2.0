import { Observable } from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Room} from "./room";
import {environment} from "../environments/environment";

@Injectable({
  providedIn : "root"
})

export class RoomService{
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http : HttpClient) {}

    public getRooms(): Observable<Room[]> {
      return this.http.get<Room[]>(`${this.apiServerUrl}/room/all`);
    }
  public addRoom(room : Room): Observable<Room> {
    return this.http.post<Room>(`${this.apiServerUrl}/room/add`, room);
  }

  public updateRoom(room : Room): Observable<Room> {
    return this.http.put<Room>(`${this.apiServerUrl}/room/update`, room);
  }
  public deleteRoom(roomId : number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/room/delete/${roomId}`);
  }
 
  
  }

