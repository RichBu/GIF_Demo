
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
    classTopicBttn: "btn-topic",       //for mass selection
    dataTopicBttn: "data-bttnTopic",  //used on topic buttons
    classGif: "img-gif",       //for mass selection
    dataGif: "data-gif",       //returned on click
    idGif: "GIF",               //preface before the ID tage
    imgDir: "assets/images/",
    imgBlocked: "", //what image to display if blocked
    gifQty: 10,  //how many GIF to display
    //GiphyURL: "https://api.giphy.com/v1/gifs/trending?",  //url of the site
    GiphyURL: "https://api.giphy.com/v1/gifs/search?",  //url of the site
    GiphySrch01: "q=",
    GiphySrch02: "&limit=20",  //limit
    GiphySrch03: "&offset=0",  //offset, like a page down
    GiphyKeyPreface: "&api_key=",
    GiphyKeyValue: "EH4xHA1FINek56s43yv4PWrOXL7noTOb"  //key for this project
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
        var stopVal = this.topicsWorkingArray.length;
        for (var i = 0; i < stopVal; i++) {
            this.topicsWorkingArray.pop();
        };

        stopVal = this.topicsPreset.length;
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
    currSingleButtonObj: singleButtonObj,

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
        this.currSingleButtonObj.topic = topicIn;
        this.currSingleButtonObj.searchTerm = topicIn;  //right now both the same
        this.addButtonToArray(this.currSingleButtonObj);
        var divButtons = $(configData.divTopicButtons);
        var newButton = $("<button>");
        $(newButton).addClass("btn");       //HTML
        $(newButton).addClass("btn-info");  //bootstrap
        $(newButton).addClass(configData.classTopicBttn);  //for mass adds
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

    retSearchStr: function (bttnNum) {
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
    TagID: "",     //id used to create the tag on page
    urlStill: "",
    urlAnimated: "",
    topic: "",         //topic associated with
    rating: "",
    title: "",
    date_posted: "",
    source_url: "",
    searchString: "",  //search string used to search this
    EOF: "" //just place keeper
};


var GIFobj = {
    //everything associated with all the GIF's
    currSingleGIFobj: gifSingleObj,

    GIFarray: [],  //array of gifSingleObj

    clearGIFdisplay: function () {
        var divGIF = $(configData.divGIF);
        divGIF.html("");
    },

    clearGIFarray: function () {
        //now clear out the array
        var endVal = this.GIFarray.length;
        for (var i = 0; i < endVal; i++) {
            this.GIFarray.pop();
        };
    },

    clearEverything: function () {
        //clear out GIF's on page and in array
        this.clearGIFdisplay();
        this.clearGIFarray();
    },

    stopGIF: function (numIn) {
        //stops a GIF by swapping url from
        var urlStatic = this.GIFarray[numIn].urlStill;
        var GIFelem = $("#" + this.GIFarray[numIn].TagID)
        $(GIFelem).attr("src", urlStatic);
        this.GIFarray[numIn].status = "still";
    },

    animateGIF: function (numIn) {
        //stops a GIF by swapping url from
        var urlMoving = this.GIFarray[numIn].urlAnimated;
        var GIFelem = $("#" + this.GIFarray[numIn].TagID)
        $(GIFelem).attr("src", urlMoving);
        this.GIFarray[numIn].status = "moving";
    },

    returnGIFanimationStatus: function (numIn) {
        //returns the status of a GIF. just the string
        var outVal = "";
        outVal = this.GIFarray[numIn].status;
        return outVal;
    },

    returnGIFstaticURL: function (numIn) {
        var outVal = "";
        outVal = this.GIFarray[numIn].urlStill;
        return outVal;
    },

    toggleGIFanimation: function (numIn) {
        //toggles the state of a GIF
        var status = this.returnGIFanimationStatus(numIn);
        if (status === "still") {
            this.animateGIF(numIn);
        } else if (status === "moving") {
            this.stopGIF(numIn);
        } else {
            //don't know what status was, so force to stop
            this.stopGIF(numIn);
        };
    },

    addGIFtoStack: function () {
        //adds gif from the currSingleObj
        var newGIFsingleObj = jQuery.extend(true, {}, this.currSingleGIFobj);
        this.GIFarray.push(newGIFsingleObj);
        //should this draw ?
    },

    displayOneGIF: function (GIFnum) {
        //routine to place one GIF onto the page
        var divGIF = $(configData.divGIF);
        var newImage = $("<img>");
        var TagID = configData.idGif + GIFnum;

        this.GIFarray[GIFnum].TagID = TagID; 
        var toolTipStr = "title: " + this.GIFarray[GIFnum].title + "\n";
        toolTipStr += "date: " + this.GIFarray[GIFnum].date_posted;
        toolTipStr += "\n\nclick to start / stop animation";
        $(newImage).attr("src", this.returnGIFstaticURL(GIFnum) );
        $(newImage).attr("id", TagID);
        $(newImage).attr("data-toggle", "tooltip" );
        $(newImage).attr("title", toolTipStr );
        $(newImage).attr("data-image", GIFnum ); //data for click
        $(newImage).css("width", "356px" );
        $(newImage).css("height", "200px" );
        $(newImage).css("border", "2px" );
        $(newImage).css("margin", "5px")
        $(newImage).addClass(configData.classGif);  //for mass adds
        $(newImage).css("margin", "5px");

        //create <div> panel with 2 parts, header and content
        var divPanel = $("<div>");
        $(divPanel).addClass("panel");
        $(divPanel).addClass("panel-info");
        $(divPanel).addClass("panelMinMargin");
        //$(divPanel).css("float", "left");
        $(divPanel).css("width", "368px");
        $(divPanel).css("height", "230px");

        
        var divPanelHead = $("<div>");
        $(divPanelHead).addClass("panel-heading");
        $(divPanelHead).addClass("panelMinPadding");
        $(divPanelHead).css("height", "20px");

        var panelHeadText = $("<p>");
        //"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"
        var panelHeadTextString = "#" + GIFnum  +  " \xa0\xa0\xa0\xa0 rated: " + this.GIFarray[GIFnum].rating;
        $(panelHeadText).text(panelHeadTextString);
        $(panelHeadText).appendTo(divPanelHead);

        $(divPanelHead).appendTo(divPanel);

        var divPanelBody = $("<div>");
        $(divPanelBody).addClass("panel-body");
        $(divPanelBody).addClass("panelMinPadding");
        $(newImage).appendTo(divPanelBody);  //iamge goes onto the panel body
        $(divPanelBody).appendTo(divPanel);

        $(divPanel).appendTo(divGIF);
        this.stopGIF(GIFnum); //force it to stop and set all paraams for stop
    },

    displayAllGIF: function (GIFnum)  {
        var numGIF = this.GIFarray.length;
        for ( var i=0; i<numGIF; i++) {
            this.displayOneGIF( i );
        };
    },

    EOF: ""  //place keeper
};

var APIresponseInputRec = {
    bitly_gif_url: "",
    embed_url: "",
    url_fixed_height_still: "", //wid=354  ht=200
    url_fixed_height_animated: "", //wid=354  ht=200
    rating: "",
    title: "",
    date_posted: "",
    source_url: ""         //split it up to find wwww it came from
};

var responseObj = {
    currResponseRec: APIresponseInputRec,
    responseRecArray: [],  //array of currResponseRec

    generateAPIprompt: function (topicIn) {
        //generic API generator for Giphy
        //should move to an API object
        var topicSearchString = $.trim(topicIn);
        var outVal = "";
        outVal = configData.GiphyURL;
        outVal += configData.GiphySrch01 + topicSearchString;
        outVal += configData.GiphySrch02;
        outVal += configData.GiphySrch03;
        outVal += configData.GiphyKeyPreface;
        outVal += configData.GiphyKeyValue;
        console.log(outVal);
        return outVal;
    },

    convertSingleRec: function (recDataItem) {
        //converts a single data item to curr rec
        this.currResponseRec.bitly_gif_url = recDataItem.bitly_gif_url;
        this.currResponseRec.embed_url = recDataItem.embed_url;
        this.currResponseRec.url_fixed_height_still = recDataItem.images.fixed_height_still.url;
        this.currResponseRec.url_fixed_height_animated = recDataItem.images.fixed_height.url;
        this.currResponseRec.rating = recDataItem.rating;
        this.currResponseRec.title = recDataItem.title;
        this.currResponseRec.date_posted = recDataItem.import_datetime;
        this.currResponseRec.source_url = recDataItem.source_post_url;
    },

    clearRecArray: function () {
        var stopVal = this.responseRecArray.length;
        for (var i = 0; i < stopVal; i++) {
            this.responseRecArray.pop();
        }
    },

    pushOneRecToArray: function (recDataItem) {
        //takes incoming rec, converts it, then pushes it to array
        this.convertSingleRec(recDataItem);  //load currResponseRec
        //need to make a copy of object prior to pushing
        var newRec = jQuery.extend(true, {}, this.currResponseRec);
        this.responseRecArray.push(newRec);  //add to array
    },

    pushWholeResponseToArray: function (responseIn) {
        var numReturned = responseIn.data.length;
        console.log(numReturned);
        //clear out the current storage
        this.clearRecArray();
        for (var i = 0; i < numReturned; i++) {
            this.pushOneRecToArray(responseIn.data[i]);
        };
    },

    exportSingleRecToGFI: function (responseRecToExport) {
        //export a single rec to the GIFobj
        //use simple copy for association
        GIFobj.currSingleGIFobj.status = "";
        GIFobj.currSingleGIFobj.TagID = "";
        GIFobj.currSingleGIFobj.urlStill = responseRecToExport.url_fixed_height_still;
        GIFobj.currSingleGIFobj.urlAnimated = responseRecToExport.url_fixed_height_animated;
        GIFobj.currSingleGIFobj.rating = responseRecToExport.rating;
        GIFobj.currSingleGIFobj.title = responseRecToExport.title;
        GIFobj.currSingleGIFobj.date_posted = responseRecToExport.date_posted;
        GIFobj.currSingleGIFobj.source_url = responseRecToExport.source_url;
        GIFobj.addGIFtoStack();
    },

    exportEntireResponseToGIFarray: function () {
        //prior to export:
        //clear all img's on page
        //clear GIF array
        //then export
        GIFobj.clearEverything();  //clear page and array
        var stopVal = configData.gifQty;
        //now need to make sure have enough responses
        if (this.responseRecArray.length < stopVal) {
            //so if the response back is less than the amount need to post,
            //use the response length to limit how many to throw up
            stopVal = this.responseRecArray.length;
        };
        for (var i = 0; i < stopVal; i++) {
            //lopp thru all the response data up to specified quantity
            this.exportSingleRecToGFI(this.responseRecArray[i]);
        };
    },

    pushResponseToEverything: function (responseIn) {
        //will clear everything then push to responseObj, GIFobj, then display
        GIFobj.clearEverything();
        this.pushWholeResponseToArray(responseIn);
        this.exportEntireResponseToGIFarray(); //use built in array
    }
}


var searchParmObj = {

};

