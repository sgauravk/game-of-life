import React from "react";
let currentId = 1;

const withTdTag = function(text, id, onclick) {
  return <td id={id} onClick={onclick.bind(null,id)}>{text}</td>;
};

const createTableRow = function(id, length, text, fnRef) {
  let row = [];
  for (let count = 0; count < length; count++) {
    row.push (withTdTag(text, id++, fnRef));
  }
  return <tr>{row}</tr>;
};

const createTable = function(length, width, fnRef) {
  const table = [];
  let currentId = 1;
  for (let count = 0; count < width; count++) {
    table.push (createTableRow(currentId, length, " ", fnRef));
    currentId = currentId + length;
  }
  return <table id={"table"} className={"main-table"}>{table}</table>;
};


export default createTable;