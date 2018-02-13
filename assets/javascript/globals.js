
/*  Global variables  for Quiz Game  */

/* These are al of the scripts to control the 

    These are all the global variables used 
    throughout the game.  Placed in separate 
    file so that can find them there.

    */


const constWordLenMax = 20;

var evalButtonPress;

var configData = {
    divQuestion: "#question",
    divGIF: "#GIFdiv",
    divTopicButtons: "#topicButtons",
    divAnswerButtons: "#answer_buttons",
    divAnswerResult: "#modAnswerDiv",
    divGameOverResult: "#modGameOverResults",
    imgDir: "assets/images/",
    histQty: 5,  //how many history  to store
    GiphyURL: "",  //url of the site
    GiphyKey: "EH4xHA1FINek56s43yv4PWrOXL7noTOb"  //key for this project
};


var topicObj = {
    topicSubject: "Machining",
    topicsPreset: [            //array that started with
        "Endmill",      //0
        "CNC",          //1
        "CAD",          //2
        "EDM",          //3
        "Electronic Discharge", //4
        "Plasma Cutting",   //5
        "Laser Cutting",    //6
        "Welding",          //7
        "Punch Press",      //8
        "Bandsaw cutting",  //9 
    ],

    topicsWorkingArray: [],  //aray that will be working with

    addTopic: function (newTopic) {
        this.topicsWorkingArray.push(newTopic);
    },

    initWorkingArray: function () {
        //loads the working aray from the preset array
        var stopVal = this.topicsPreset.length;
        for (var i = 0; i < stopVal; i++) {
            this.addTopic(this.topicsPreset[i]);  //push to working array
        };
    },

    retTopicString: function (numIn) {
        var outVal = "";
        outVal = this.topicsWorkingArray[numIn];
        return outVal;
    },

    retNumWorkingTopics: function () {
        var outVal = 0;
        outVal = this.topicsWorkingArray.length;
        return outVal;
    }
};


var singleButtonObj = {
    topic: "",
    searchTerm: "", //search term if different
    EOF: ""  //just place keeper to not worry about ,
};

var buttonObj = {
    buttonArray: [],  //array pf singleButtonObj

    addButtonToArray: function (singleBttnObjIn) {
        var newObj = jQuery.extend(true, {}, singleBttnObjIn);
        this.buttonArray.push(newObj);
    },

    clearButtonArray: function () {
        //pop all elements from array
        var endVal = this.buttonArray.length;
        for (var i = 0; i < endVal; i++) {
            this.buttonArray.pop();
        };
    },

    addNewButton: function (topicIn) {
        //takes a topic and adds a button to page
        //assume topic in array already
        singleButtonObj.topic = topicIn;
        singleButtonObj.searchTerm = topicIn;  //right now both the same
        this.addButtonToArray(singleButtonObj);
        var divButtons = $(configData.divTopicButtons);
        var newButton = $("<button>");
        $(newButton).addClass("btn");
        $(newButton).addClass("btn-info");
        $(newButton).css("margin", "5px");
        $(newButton).text(topicIn);
        $(newButton).attr("data-button", this.buttonArray.length - 1);
        $(newButton).appendTo(divButtons);
    },

    refreshAllButtons: function () {
        //clear out all buttons and write them
        this.clearButtonArray();  //clear array
        var divButtons = $(configData.divTopicButtons);
        divButtons.html("");
        var endVal = topicObj.retNumWorkingTopics();
        for (var i = 0; i < endVal; i++) {
            this.addNewButton(topicObj.retTopicString(i));
        };
    },

    retSearchStr: function(bttnNum) {
        //returns the search string for a button
        //normally just the text on the button
        //but have made allotments to make it different
        var outVal = "";
        outVal = this.buttonArray[bttnNum].searchTerm;
        return outVal;
    },

    EOF: ""  //just place keeper to not worry about ,
};


var gifSingleObj = {
    status: "",     //
    urlStill: "",
    urlAnimated: "",
    topic: "",         //topic associated with
    searchString: "",  //search string used to search this
    EOF: "" //just place keeper
};


var GIFobj = {
    //everything associated with all the GIF's
    GIFarray: [],  //array of gifSingleObj

    clearGIFdisplay: function () {
        var divGIF = $(configData.divGIF);
        divGIF.html("");
    },

    clearEverything: function () {
        //clear out all the GIF's on the page
        this.clearGIFdisplay();

        //now clear out the array
        var endVal = GIFarray.length;
        for ( var i=0; i<endVal; i++)
        {
            this.GIFarray.pop();
        }
    },
    EOF: ""  //place keeper
};


var searchParmObj = {

};

