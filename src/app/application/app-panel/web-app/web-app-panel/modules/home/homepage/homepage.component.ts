import { Component, OnInit, Sanitizer, ViewChild, ElementRef } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { PopperContent } from 'ngx-popper';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'] 
})
export class HomepageComponent implements OnInit {

  private people = [1,2,3];
  private dummy = [1,2,3];

  private SelectedFile: File;
  private showThumb: boolean = false;
  private videoUrl: SafeUrl;
  private showVid:boolean = false;

  private poll:boolean = false;
  private pollOptions = [1,2];

  inputVal: string = '';

  private location:string = '';
  private Locations = [
    'New Delhi', 'Bangalore', 'Mumbai', 'Pune', 'Hyderabad', 'Chennai', 'Kolkata'
  ]

  @ViewChild('LocationInput') locationInput: ElementRef;
  @ViewChild('LocationPopper') LocPopper: PopperContent;

  constructor(private _sanitizer: Sanitizer) { }

  ngOnInit() {
  }

  // File Upload
  removeFile() {
    this.SelectedFile = null;
    this.videoUrl = null;
    this.showVid = false;
    this.showThumb = false;
  }
  verifyFile() {
    setTimeout(() => {
      this.verify();
    }, 300);
  }
  verify() {
    var type = this.SelectedFile.type;
    var size = this.SelectedFile.size;
    this.showVid = false;

    console.log(this.SelectedFile);
    if(type.includes("image")){
      this.showThumb = true;
      this.showVid = false;
    } else {
      this.videoUrl = URL.createObjectURL(this.SelectedFile)
      this.showThumb = false;
      setTimeout(() => { this.showVid = true }, 500)
    }
  }


  // feed scroll
  onScroll() {
    console.log('scrolled');
    for(let i=0; i<5; i++) {
      this.dummy.push(i);
      console.log('pushed');
    }
  }

  // Location popper
  popperShown() {
    console.log('popper opened');
    this.locationInput.nativeElement.focus();
  }

  // Select Location
  selLocation(data:string) {
    this.location = data;
    console.log(data);
    this.LocPopper.hide();
  }
  removeLoc() {
    this.location = '';
  }


  // Create Poll
  ShowPoll() {
    this.poll = true;
  }
  HidePoll() {
    this.poll = false;
  }
  addOption() {
    if(this.pollOptions.length > 3) {
      return;
    } else {

      if(this.pollOptions.length == 2) {
        this.pollOptions = [1,2,3]
      }
      else if(this.pollOptions.length == 3) {
        this.pollOptions = [1,2,3,4]
      }

    }
  }
  removeOption(index) {
    let pos = this.pollOptions.indexOf(index);
    this.pollOptions.splice(pos, 1);
    console.log(this.pollOptions);
  }
}
