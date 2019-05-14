// general imports
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

// NGXS store
import { Store } from '@ngxs/store';
import { AppTeamChatState } from '../../store/state/appTeamChat.state';
import * as AppTeamChatActions from '../../store/actions/appTeamChat.actions';

// Services
import { EmojiService } from '@ctrl/ngx-emoji-mart/ngx-emoji';


@Component({
  selector: 'app-chat-box-team',
  templateUrl: './chat-box-team.component.html',
  styleUrls: ['./chat-box-team.component.css'],
})
export class ChatBoxTeamComponent implements OnInit {


  // states for message pages and toggles
  public ChatsWindow: boolean;
  public GroupBoxWindow: boolean;
  public InfoWindow: boolean;
  public GroupBoxTab: string;

  public emojiToggleState = false;
  public attachMenuState = false;


  // Message input
  private text: string = '';
  private value: string = '';

  private vall = '';
  private pos;
  private caretPos;
  private selection;

  public teamId;


  private msgs = [
    {
      user: {
        name: 'John Doe',
        image: 'https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg',
        pos: 'Senior VP Design'
      },
      imp: true,
      time: '2h ago',
      msg: {
        type: 'text',
        text: 'Team - do forward the reports. it is very important for me. if you dont, then be r e a d y to follow the consequences.',
        img: '',
        file: {
          name: 'Marketing Plan.txt',
          type: 'Text Docoment'
        }
      },
      self: false
    },
    {
      user: {
        name: 'Mario Mendez',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTG0j1MmEng29JZuTbH7KqM55WOrUD7XfxtzOseyZeuFWJPv7',
        pos: 'Marketing Head'
      },
      imp: false,
      time: '1h ago',
      msg: {
        type: 'img',
        text: 'Team - do forward the reports. it is very important for me. if you dont, then be r e a d y to follow the consequences.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTG0j1MmEng29JZuTbH7KqM55WOrUD7XfxtzOseyZeuFWJPv7',
        file: {
          name: 'Marketing Plan.txt',
          type: 'Text Docoment'
        }
      },
      self: false
    },
    {
      user: {
        name: 'John Doe',
        image: 'https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg',
        pos: 'Senior VP Design'
      },
      imp: true,
      time: '2h ago',
      msg: {
        type: 'file',
        text: '',
        img: '',
        file: {
          name: 'Marketing Plan.txt',
          type: 'Text Docoment'
        }
      },
      self: true
    },
    {
      user: {
        name: 'John Doe',
        image: 'https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg',
        pos: 'Senior VP Design'
      },
      imp: true,
      time: '2h ago',
      msg: {
        type: 'vid',
        text: 'Team - do forward the reports. it is very important for me. if you dont, then be r e a d y to follow the consequences.',
        img: '',
        file: {
          name: 'Marketing Plan.txt',
          type: 'Text Docoment'
        }
      },
      self: false
    },
    {
      user: {
        name: 'John Doe',
        image: 'https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg',
        pos: 'Senior VP Design'
      },
      imp: true,
      time: '2h ago',
      msg: {
        type: 'text',
        text: 'Team - do forward the reports.',
        img: '',
        file: {
          name: '',
          type: ''
        }
      },
      self: false
    },
    {
      user: {
        name: 'John Doe',
        image: 'https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg',
        pos: 'Senior VP Design'
      },
      imp: true,
      time: '2h ago',
      msg: {
        type: 'text',
        text: 'Great!',
        img: '',
        file: {
          name: 'Marketing Plan.txt',
          type: 'Text Docoment'
        }
      },
      self: false
    }
  ];

  public media = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_H4HeEPBNcqbb5hUjc8Vl3fcFkZsdKw4dSYwJbupTBIrGTpnR',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_H4HeEPBNcqbb5hUjc8Vl3fcFkZsdKw4dSYwJbupTBIrGTpnR',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEY-Ga3xz60W0xU-AV-6dFKmY1FkkPTV7LAVMst4Sa0k071L9n',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTx7RsyxG9S3Eg-KbCFgujx7q9bw24tLGYFpoRsamO_iPLDDxPpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_H4HeEPBNcqbb5hUjc8Vl3fcFkZsdKw4dSYwJbupTBIrGTpnR',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEY-Ga3xz60W0xU-AV-6dFKmY1FkkPTV7LAVMst4Sa0k071L9n',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTx7RsyxG9S3Eg-KbCFgujx7q9bw24tLGYFpoRsamO_iPLDDxPpg',
  ];



  @ViewChild('inputBar') outputContainer:ElementRef;

  constructor(
    private store: Store,
    private _emoji: EmojiService,
    private renderer: Renderer2,
    private route: ActivatedRoute
    ) {
    this.store.select(AppTeamChatState.getAppTeamChatState).subscribe(
      val => {
        this.ChatsWindow = val.ShowChat;
        this.GroupBoxWindow = val.ShowGroupBox;
        this.InfoWindow = val.ShowInfo;
        this.GroupBoxTab = val.GroupBoxTabOpened;
      }
    )
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(
        params => {
          this.teamId = params.id;
        }
      )
  }

  // reply function
  reply_this(id) {
    console.log(id);
  }


  // Group info recent media
  expand() {
    for( let i = 1; i < 12; i ++)
    this.media.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTx7RsyxG9S3Eg-KbCFgujx7q9bw24tLGYFpoRsamO_iPLDDxPpg');
  }



  // toggle Emojiselector & attachmenu
  toggleEmojiSelector() {
    this.emojiToggleState = !this.emojiToggleState;
  }
  toggleAttachMenu() {
    this.attachMenuState = !this.attachMenuState;
  }
  onClickedOutside(data) {
    if(this.attachMenuState) {
      this.toggleAttachMenu();
    }
  } 


  // emoji functions
  addEmoji(data) {
    const native = data.emoji.native; // native emoji

    const styles = this._emoji.emojiSpriteStyles(data.emoji.sheet, 'google');
    styles["vertical-align"] = "sub";
    styles["max-height"]= "1.4em";
    styles["max-width"]= "1.4em";
    styles["height"]= "1.4em";
    styles["width"]= "1.4em";
    styles["position"] = "relative";
    styles["z-index"] = "100";
    styles["overflow"] = "hidden";
    styles["color"] = "transparent";
    


    const element = this.renderer.createElement('span');
    this.renderer.setAttribute(element, 'contenteditable', 'false');
    element.innerHTML = native;    

    this.renderer.addClass(element, 'nodisplay');
    Object.assign(element.style, styles);

    this.insertcustomHtml(element);
    this.vall = this.outputContainer.nativeElement.innerHTML;
  }

  // Output value (form input bar)
  display() {
    this.vall = this.outputContainer.nativeElement.innerHTML;
    this.getPosandRange();
  }

  // get caret position
  getPosandRange() {
    this.outputContainer.nativeElement.focus();
    this.selection = window.getSelection();
    this.caretPos = this.selection.getRangeAt(0);
  }


  // insert at caret position
  insertcustomHtml(element) {
    var sel = this.selection;
    var range = this.caretPos;
    if(window.getSelection) {
        
        range.deleteContents();
        
        var frag = document.createDocumentFragment(), lastNode;
      
        lastNode = frag.appendChild(element);      
        range.insertNode(frag);
        
        if (lastNode) {
           range = range.cloneRange();
           range.setStartAfter(lastNode);
           range.collapse(true);
           sel.removeAllRanges();
           sel.addRange(range);
        }
        this.getPosandRange();
    }
  }



  // Mentions
  
  Options = {
    // symbol that starts the lookup
    trigger: '@',

    // element to target for @mentions
    iframe: null,

    // class added in the flyout menu for active item
    selectClass: 'highlight',

    // function called on select that returns the content to insert
    selectTemplate: function (item) {
      return '<span contenteditable="false"><a href="http://zurb.com" target="_blank"> @' + item.original.value + '</a></span>';
    },

    // template for displaying item in menu
    menuItemTemplate: function (item) {
      return '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmSR-zx4-ofSGNDScwCYObZdySCtLhTk_dnY7dBvzdQjLr6HO">' + item.string;
    },

    // template for when no match is found (optional),
    // If no template is provided, menu is hidden.
    noMatchTemplate: null,

    // specify an alternative parent container for the menu

    // column to search against in the object (accepts function or string)
    lookup: 'key',

    // column that contains the content to insert by default
    fillAttr: 'value',

    // load remote data
      //..other config options
      // function retrieving an array of objects
      //      values: function (text, cb) {
      //         remoteSearch(text, users => cb(users));
      //      },
    // REQUIRED: array of objects to match
    values: [
      {key: 'Aditya Suman', value: 'sumanaditya'},
      {key: 'Rishav Singh', value: 'r.rishav'},
      {key: 'Bikas Phukan', value: 'bphkns'},
      {key: 'Neha Singh', value: 'singhneha'},
      {key: 'Mark', value: 'markell'},
      {key: 'Lucky Dangi', value: 'dangi705'},
      {key: 'Phil Heartman', value: 'pheartman'},
      {key: 'Gordon Ramsey', value: 'gramsey'}
    ],

    // specify whether a space is required before the trigger character
    requireLeadingSpace: true,

    // specify whether a space is allowed in the middle of mentions
    allowSpaces: true,

    // optionally specify a custom suffix for the replace text
    // (defaults to empty space if undefined)
    replaceTextSuffix: '\n',

    // specify whether the menu should be positioned.  Set to false and use in conjuction with menuContainer to create an inline menu
    // (defaults to true)
    positionMenu: true,

    // when the spacebar is hit, select the current match
    spaceSelectsMatch: false,

    // Customize the elements used to wrap matched strings within the results list
    // defaults to <span></span> if undefined
    searchOpts: {
      pre: '<span>',
      post: '</span>'
    }
  };

  // for right click
  return() {
    return false;
  }

  // for sanitizing and selecting only text content
  paste(event) {
    let pastedText = event.clipboardData.getData('text/plain');
    this.getPosandRange();
    this.insertTextAtPosition(pastedText ,this.caretPos);
    return false;
  }

  insertTextAtPosition(text, range) {
    var sel = this.selection;
    var frag = document.createTextNode(text), lastNode;
      
        lastNode = frag;      
        range.insertNode(frag);
        if (lastNode) {
          range = range.cloneRange();
          range.setStartAfter(lastNode);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
       }
       this.getPosandRange();
  }

  

  // NGXS store actions
  // topbar options
  ShowGroupBox() {
    this.emojiToggleState = false;
    this.store.dispatch(new AppTeamChatActions.ShowGroupBox);
  }
  ShowInfo() {
    this.emojiToggleState = false;
    this.store.dispatch(new AppTeamChatActions.ShowInfo);
  }
  ShowChatsWindow() {
    this.store.dispatch(new AppTeamChatActions.ShowChat);
  }

  // GroupBox nav
  showBoards() {
    this.store.dispatch(new AppTeamChatActions.ShowBoards);
  }
  showTasks() {
    this.store.dispatch(new AppTeamChatActions.ShowTasks);
  }
  showFiles() {
    this.store.dispatch(new AppTeamChatActions.ShowFiles);
  }
  showPolls() {
    this.store.dispatch(new AppTeamChatActions.ShowPolls);
  }
  showImportants() {
    this.store.dispatch(new AppTeamChatActions.showImportants)
  }
}
