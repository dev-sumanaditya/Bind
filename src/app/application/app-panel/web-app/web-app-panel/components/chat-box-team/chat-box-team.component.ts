import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Store } from '@ngxs/store';
import { AppTeamChatState } from '../../store/state/appTeamChat.state';
import * as AppTeamChatActions from '../../store/actions/appTeamChat.actions';
import { EmojiService } from '@ctrl/ngx-emoji-mart/ngx-emoji';


@Component({
  selector: 'app-chat-box-team',
  templateUrl: './chat-box-team.component.html',
  styleUrls: ['./chat-box-team.component.css'],
})
export class ChatBoxTeamComponent implements OnInit {

  private ChatsWindow: boolean;
  private GroupBoxWindow: boolean;
  private InfoWindow: boolean;
  private GroupBoxTab: string;

  private emojiToggleState = false;
  private attachMenuState = false;


  private text: string = '';
  private value: string = '';

  private vall = '';
  private pos;
  private caretPos;
  private selection;


  @ViewChild('inputBar') outputContainer:ElementRef;

  constructor(private store: Store, private _emoji: EmojiService, private renderer: Renderer2) {
    this.store.select(AppTeamChatState.getAppTeamChatState).subscribe(
      val => {
        this.ChatsWindow = val.ShowChat;
        this.GroupBoxWindow = val.ShowGroupBox;
        this.InfoWindow = val.ShowInfo;
        this.GroupBoxTab = val.GroupBoxTabOpened;
      }
    )
  }

  ngOnInit() {}

  reply_this(id) {
    console.log(id);
  }

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
    styles["padding"]= "0.7em";

    const element = this.renderer.createElement('img');
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


  return() {
    return false;
  }

  paste(event) {
    let pastedText = event.clipboardData.getData('text/plain');
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
