import { Component } from '@angular/core';

@Component({
  selector: 'app-videodegree',
  templateUrl: './videodegree.component.html',
  styleUrl: './videodegree.component.css'
})
export class VideodegreeComponent {
   // Function to handle opening the video in a new tab
  openVideo(videoUrl: string): void {
    window.open(videoUrl, '_blank');
  }
}
