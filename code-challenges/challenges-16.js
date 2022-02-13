'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    
        let arr ="" ;
        for (let i =string.length - 1;i>=0;i--) {
            arr = arr + string[i];
        }
        return arr;
    }
    // -------------------------------------------------------------------------------------------------------



    // -------------------------------------------------------------------------------------------------------
    // Challenge 02:
    // Required:
    //
    // Write a function that takes an array of strings and returns only strings that contain ^_^.
    //
    // Ex :-
    // Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

    const detectFace = (arr) => {
        let arr1 =[];
        for(let i=0;i<arr.length;i++){
            let str =arr[i];
            let reg =/\^_\^/g ;
            if (reg.test(str)){
                arr1.push(str);
            }
            
        }
        return arr1 ;
    }
    // -------------------------------------------------------------------------------------------------------


    // -------------------------------------------------------------------------------------------------------
    // Challenge 03:
    // Optional:
    //
    // Write a function that takes in a string and returns a string contains only characters in even positions.
    //
    // Ex :-
    // Input <= "coding" output =>"cdn"

    const eveCharacter = (str) => {
        //write your code here ...
    }
    // -------------------------------------------------------------------------------------------------------


    // -------------------------------------------------------------------------------------------------------
    // Challenge 04
    // Optional:

    // Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

    // And you are assigned to write function to return only ingredients that contains chicken.
    //
    // Input:
    // [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
    //
    // Output:
    // [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


    const chickenGradients = (arr) => {
        //write your code here ...
    }
    // -------------------------------------------------------------------------------------------------------

    module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
