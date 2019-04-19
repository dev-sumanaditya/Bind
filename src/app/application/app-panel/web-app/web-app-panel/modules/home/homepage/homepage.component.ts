import { Component, OnInit, Sanitizer, ViewChild, ElementRef } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';


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

  inputVal: string = '';

  @ViewChild('LocationInput') locationInput: ElementRef;

  constructor(private _sanitizer: Sanitizer) { }

  ngOnInit() {
  }


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
}
