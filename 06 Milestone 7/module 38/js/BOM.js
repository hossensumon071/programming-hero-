//! API - Application Programming Interface
/* 
A Set of protocols and definitions that allows communication between two applications */

//! Different types of API 
    /* 
        .Wep APIs: An Application programming interface for the web 
        .Browser APIs: Extend the functionality of a web browser
        .Sever APIs: Extend the functionality of a web server
        .Third party APIs: are not built into your browser
                .Youtube API
                .Twitter API
                .Facebook API
    */


//! Categorise of Browser API
        //  1. storage APIs: Give the ability to store data on the client-side
                // .cookies
                // .Local Storage
                // .Session storage
                // Indexed DB

        //  2. Fetch API: 
                // .Makes Asyncrounous HTTP requests to a server
                // .response format can be JSON, Plain Text, or xml
                // .replacement for old XHR

        //  3. Form data API: 
                // .constructs a set of key/value pairs
                // .represents form fields & value

        //  4. Drag and Drop API: Helps to implement drag and drop fetures:
                    // .Drag And Drop API
                    // .File reader api

        //  5. DOM API: Allows to manipluate html and css in creating, removing, and dynamically applying new styles to your   page 

        //  6. Geolocation API: Helps to find out hte geographical location of an user.

        //  7. Canvas API: Supports the creation of grapics using javascript and HTML

        //  8. Notification API: helps to display desktop notifications to user.

        //  9. History API: Uses the history.PushState() method

        // 10. Audio and videos APIs: can manage, display, and create different media types
                        // .Web Audio API
                        // .WebRTC(Web Real Time communication) API
                        // .HTML media element
                        // Media capture and streams API




    //! BOM vs DOM

            // BOM
               /* 
                .Browser object Model
                    - used to access and manipulation of the browser window

                .Each Browser has its own standards for implementing BOM
                    - Consists of the objects navigator, history, screen, location.
                
                .BOM is a superset of DOM. BOM has many objects, methods and properties that are not part of the DOM sturcture.
               
               */

                

            //! DOM
                 /* 
                    . Document Object Model
                    . used to manipulate the html element 
                    . has a standards of rules to be used across documents.
                    . Repesents the contents of the web Page 
                    . DOM is subset of a DOM
                 */
