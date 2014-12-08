define(["../module","notification"],function(a){"use strict";a.registerController("GeneralElementsCtrl",["$scope",function(a){a.eg1=function(){$.bigBox({title:"Big Information box",content:"This message will dissapear in 6 seconds!",color:"#C46A69",icon:"fa fa-warning shake animated",number:"1",timeout:6e3})},a.eg2=function(){$.bigBox({title:"Big Information box",content:"Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",color:"#3276B1",icon:"fa fa-bell swing animated",number:"2"})},a.eg3=function(){$.bigBox({title:"Shield is up and running!",content:"Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",color:"#C79121",icon:"fa fa-shield fadeInLeft animated",number:"3"})},a.eg4=function(){$.bigBox({title:"Success Message Example",content:"Lorem ipsum dolor sit amet, test consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",color:"#739E73",icon:"fa fa-check",number:"4"},function(){a.closedthis()})},a.eg5=function(){$.smallBox({title:"Ding Dong!",content:"Someone's at the door...shall one get it sir? <p class='text-align-right'><a href-void class='btn btn-primary btn-sm'>Yes</a> <a href-void class='btn btn-danger btn-sm'>No</a></p>",color:"#296191",icon:"fa fa-bell swing animated"})},a.eg6=function(){$.smallBox({title:"Big Information box",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",color:"#5384AF",icon:"fa fa-bell"})},a.eg7=function(){$.smallBox({title:"James Simmons liked your comment",content:"<i class='fa fa-clock-o'></i> <i>2 seconds ago...</i>",color:"#296191",iconSmall:"fa fa-thumbs-up bounce animated",timeout:4e3})},a.closedthis=function(){$.smallBox({title:"Great! You just closed that last alert!",content:"This message will be gone in 5 seconds!",color:"#739E73",iconSmall:"fa fa-cloud",timeout:5e3})},a.smartModEg1=function(){$.SmartMessageBox({title:"Smart Alert!",content:"This is a confirmation box. Can be programmed for button callback",buttons:"[No][Yes]"},function(a){"Yes"===a&&$.smallBox({title:"Callback function",content:"<i class='fa fa-clock-o'></i> <i>You pressed Yes...</i>",color:"#659265",iconSmall:"fa fa-check fa-2x fadeInRight animated",timeout:4e3}),"No"===a&&$.smallBox({title:"Callback function",content:"<i class='fa fa-clock-o'></i> <i>You pressed No...</i>",color:"#C46A69",iconSmall:"fa fa-times fa-2x fadeInRight animated",timeout:4e3})})},a.smartModEg2=function(){$.SmartMessageBox({title:"Smart Alert: Input",content:"Please enter your user name",buttons:"[Accept]",input:"text",placeholder:"Enter your user name"},function(a,b){alert(a+" "+b)})},a.smartModEg3=function(){$.SmartMessageBox({title:"Smart Notification: Buttons",content:"Lots of buttons to go...",buttons:"[Need?][You][Do][Buttons][Many][How]"})},a.smartModEg4=function(){$.SmartMessageBox({title:"Smart Alert: Select",content:"You can even create a group of options.",buttons:"[Done]",input:"select",options:"[Costa Rica][United States][Autralia][Spain]"},function(a,b){alert(a+" "+b)})},a.smartModEg5=function(){$.SmartMessageBox({title:"Login form",content:"Please enter your user name",buttons:"[Cancel][Accept]",input:"text",placeholder:"Enter your user name"},function(a,b){if("Cancel"==a)return alert("Why did you cancel that? :("),0;var c=b.toUpperCase(),d=b;$.SmartMessageBox({title:"Hey! <strong>"+c+",</strong>",content:"And now please provide your password:",buttons:"[Login]",input:"password",placeholder:"Password"},function(a,b){alert("Username: "+d+" and your password is: "+b)})})}}])});
